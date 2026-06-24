export interface ExplainedMicroPythonError {
  simple: string;
  technical: string;
  line?: number;
}

const BLOCK_START = /^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;

export function explainMicroPythonError(errorText: string, sourceCode: string): ExplainedMicroPythonError {
  const technical = errorText.trim();
  const lines = sourceCode.split(/\r?\n/);
  const line = parseErrorLine(technical);
  const errorLine = line ? (lines[line - 1] ?? '') : '';
  const previous = previousCodeLine(lines, line);
  const last = technical.split(/\r?\n/).filter(Boolean).at(-1) ?? '';

  const name = last.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);
  if (name) {
    return { simple: `Python kender ikke navnet ${name[1]}${line ? ` på linje ${line}` : ''}.`, technical, line };
  }

  if (/ZeroDivisionError/.test(last)) {
    return { simple: `Kan ikke dividere med 0${line ? ` på linje ${line}` : ''}.`, technical, line };
  }

  if (/IndentationError/.test(last)) {
    return { simple: `Mangler indrykning${line ? ` på linje ${line}` : ''}.`, technical, line };
  }

  if (/ImportError|ModuleNotFoundError/.test(last)) {
    const moduleName = last.match(/['"](.+?)['"]/)?.[1];
    return { simple: `Python kan ikke finde modulet${moduleName ? ` ${moduleName}` : ''}.`, technical, line };
  }

  if (/SyntaxError/.test(last)) {
    const blockWithoutColon = findBlockWithoutColon(errorLine, line) ?? findBlockWithoutColon(previous.text, previous.line) ?? nearbyBlockWithoutColon(lines, line);
    if (blockWithoutColon) {
      return { simple: `Mangler : efter linje ${blockWithoutColon.line}.`, technical, line: blockWithoutColon.line };
    }

    if (line && previous.text.trim().endsWith(':') && errorLine.trim() && !/^\s+/.test(errorLine)) {
      return { simple: `Mangler indrykning på linje ${line}.`, technical, line };
    }

    if (looksLikeUnquotedText(errorLine)) {
      return { simple: `Tekst mangler citationstegn${line ? ` på linje ${line}` : ''}.`, technical, line };
    }

    if (hasOddQuoteCount(errorLine)) {
      return { simple: `Tekst mangler et afsluttende citationstegn${line ? ` på linje ${line}` : ''}.`, technical, line };
    }

    return { simple: `Python fandt en syntaksfejl${line ? ` omkring linje ${line}` : ''}.`, technical, line };
  }

  if (/TypeError/.test(last)) {
    return { simple: `En værdi har den forkerte type${line ? ` på linje ${line}` : ''}.`, technical, line };
  }

  if (/IndexError/.test(last)) {
    return { simple: `Listen har ikke et element på den plads${line ? ` på linje ${line}` : ''}.`, technical, line };
  }

  if (/KeyError/.test(last)) {
    return { simple: `Ordbogen mangler den nøgle${line ? ` på linje ${line}` : ''}.`, technical, line };
  }

  if (/AttributeError/.test(last)) {
    return { simple: `Den ting har ikke den kommando${line ? ` på linje ${line}` : ''}.`, technical, line };
  }

  if (/ValueError/.test(last)) {
    return { simple: `Værdien passer ikke her${line ? ` på linje ${line}` : ''}.`, technical, line };
  }

  return { simple: `Python fandt en fejl${line ? ` omkring linje ${line}` : ''}.`, technical, line };
}

function parseErrorLine(errorText: string): number | undefined {
  const matches = [...errorText.matchAll(/line\s+(\d+)/g)];
  const raw = matches.at(-1)?.[1];
  if (!raw) return undefined;
  const line = parseInt(raw, 10);
  return Number.isFinite(line) && line > 0 ? line : undefined;
}

function previousCodeLine(lines: string[], line: number | undefined): { line?: number; text: string } {
  if (!line) return { text: '' };
  for (let index = line - 2; index >= 0; index -= 1) {
    const text = lines[index] ?? '';
    if (text.trim()) return { line: index + 1, text };
  }
  return { text: '' };
}

function findBlockWithoutColon(text: string, line: number | undefined): { line: number } | null {
  if (!line) return null;
  const trimmed = text.trim();
  if (!BLOCK_START.test(trimmed) || trimmed.endsWith(':')) return null;
  return { line };
}

function nearbyBlockWithoutColon(lines: string[], line: number | undefined): { line: number } | null {
  const end = line ? Math.min(lines.length, line) : lines.length;
  const start = Math.max(0, end - 4);
  for (let index = end - 1; index >= start; index -= 1) {
    const match = findBlockWithoutColon(lines[index] ?? '', index + 1);
    if (match) return match;
  }
  return null;
}

function hasOddQuoteCount(text: string): boolean {
  const single = (text.match(/'/g) ?? []).length;
  const double = (text.match(/"/g) ?? []).length;
  return single % 2 === 1 || double % 2 === 1;
}

function looksLikeUnquotedText(text: string): boolean {
  const trimmed = text.trim();
  const printValue = trimmed.match(/^print\((.+)\)$/)?.[1]?.trim();
  if (!printValue || /['"]/.test(printValue)) return false;
  return /\s/.test(printValue) && /[a-zA-ZæøåÆØÅ]/.test(printValue);
}
