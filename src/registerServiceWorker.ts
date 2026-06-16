export function registerServiceWorker() {
  if (!import.meta.env.PROD || !('serviceWorker' in navigator)) {
    return;
  }

  window.addEventListener('load', () => {
    const swUrl = new URL('sw.js', window.location.href);
    navigator.serviceWorker.register(swUrl, { scope: './' }).catch((error: unknown) => {
      console.warn('Service worker registration failed:', error);
    });
  });
}
