const CACHE_NAME = 'pico-kontrol-panel-v8';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './art/logo.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png',
  './micropython/micropython.mjs',
  './micropython/micropython.wasm',
];

// Cross-origin isolation headers. GitHub Pages cannot set response headers, so
// the service worker adds them to every same-origin response. This makes the
// page cross-origin isolated, which is required for SharedArrayBuffer (used by
// interactive input() in Browser-MicroPython).
const COI_HEADERS = {
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Embedder-Policy': 'require-corp',
  'Cross-Origin-Resource-Policy': 'same-origin',
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)),
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const requestUrl = new URL(request.url);

  if (request.method !== 'GET' || requestUrl.origin !== self.location.origin) {
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(withCoiHeaders(networkFirst(request, './index.html')));
    return;
  }

  event.respondWith(withCoiHeaders(cacheFirst(request)));
});

async function withCoiHeaders(responsePromise) {
  const response = await responsePromise;
  // Can only rebuild same-origin, non-opaque responses.
  if (!response || response.type === 'opaque' || response.status === 0) {
    return response;
  }
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(COI_HEADERS)) {
    headers.set(key, value);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

async function networkFirst(request, fallbackUrl) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch {
    return (await cache.match(request)) || (await cache.match(fallbackUrl));
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) {
    return cached;
  }

  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, response.clone());
  }

  return response;
}
