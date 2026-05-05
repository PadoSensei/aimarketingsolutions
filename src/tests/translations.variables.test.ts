/**
 * Regression prevention:
 * - Placeholders like {{brandName}} missing in one locale but present in another.
 * - Malformed placeholders (e.g. {brandName}, {{brandName}).
 */
import { describe, it, expect } from 'vitest';
import en from '../locales/en.json';
import pt from '../locales/pt.json';

function getAllStringValues(obj: any, prefix = ''): { key: string; value: string }[] {
  let results: { key: string; value: string }[] = [];
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'string') {
      results.push({ key: fullKey, value: obj[key] });
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      results = results.concat(getAllStringValues(obj[key], fullKey));
    }
  }
  return results;
}

function extractPlaceholders(str: string): string[] {
  const matches = str.match(/{{(.*?)}}/g);
  return matches ? matches.map(m => m.slice(2, -2)) : [];
}

describe('Variable Placeholders', () => {
  const enStrings = getAllStringValues(en);
  const ptStrings = getAllStringValues(pt);

  it('placeholders match between EN and PT', () => {
    const mismatches: string[] = [];
    enStrings.forEach(({ key, value: enVal }) => {
      const ptObj = ptStrings.find(s => s.key === key);
      if (ptObj) {
        const enPlaceholders = extractPlaceholders(enVal).sort();
        const ptPlaceholders = extractPlaceholders(ptObj.value).sort();
        if (JSON.stringify(enPlaceholders) !== JSON.stringify(ptPlaceholders)) {
          mismatches.push(`${key}: EN=[${enPlaceholders}], PT=[${ptPlaceholders}]`);
        }
      }
    });
    expect(mismatches, `The following keys have mismatched placeholders:\n${mismatches.join('\n')}`).toEqual([]);
  });

  it('no malformed placeholders', () => {
    const malformed: string[] = [];
    const allStrings = [...enStrings, ...ptStrings];

    allStrings.forEach(({ key, value }) => {
      // Check for single braces not followed/preceded by another brace
      // This is a bit tricky, but we can look for { or } that are not part of {{ or }}
      const singleOpen = (value.match(/(?<!{){(?!{)/g) || []).length;
      const singleClose = (value.match(/(?<!})}(?!})/g) || []).length;

      // Also check for unclosed double braces
      const doubleOpen = (value.match(/{{/g) || []).length;
      const doubleClose = (value.match(/}}/g) || []).length;

      if (singleOpen > 0 || singleClose > 0 || doubleOpen !== doubleClose) {
        malformed.push(`${key}: "${value}"`);
      }
    });

    expect(malformed, `The following keys have malformed placeholders:\n${malformed.join('\n')}`).toEqual([]);
  });
});
