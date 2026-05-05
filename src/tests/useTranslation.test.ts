/**
 * Regression prevention:
 * - t() function logic breaking (interpolation, fallback, key resolution).
 * - Changes to resolveTranslation utility.
 */
import { describe, it, expect } from 'vitest';
import { resolveTranslation } from '../lib/resolveTranslation';
import en from '../locales/en.json';
import pt from '../locales/pt.json';

describe('resolveTranslation Utility', () => {
  it('returns the string value for an existing key', () => {
    const result = resolveTranslation(en, 'nav.home');
    expect(result).toBe('Home');
  });

  it('returns undefined for a key that does NOT exist', () => {
    const result = resolveTranslation(en, 'non.existent.key');
    expect(result).toBeUndefined();
  });

  it('correctly interpolates variables', () => {
    const result = resolveTranslation(en, 'hero.eyebrow', { brandName: 'Test Brand' });
    expect(result).toBe('Test Brand · Ireland');
  });

  it('returns PT value when PT locale is used', () => {
    const result = resolveTranslation(pt, 'nav.home');
    expect(result).toBe('Início');
  });

  it('handles nested objects by returning undefined (not the object)', () => {
    const result = resolveTranslation(en, 'nav');
    expect(result).toBeUndefined();
  });
});

// Testing the logic as it's used in the context
describe('t() logic simulation', () => {
  const t = (key: string, locale: any, variables?: Record<string, string>) => {
    let value = resolveTranslation(locale, key, variables);
    if (value === undefined) {
      value = resolveTranslation(en, key, variables);
    }
    return value ?? key;
  };

  it('falls back to EN when key is missing in PT', () => {
    // We need a key that exists in EN but not in PT for this test.
    // Let's mock a scenario if we don't have one in the real data.
    const mockPt = { ...pt };
    delete (mockPt as any).nav.blog;

    const result = t('nav.blog', mockPt);
    expect(result).toBe('Blog'); // Value from en.json
  });

  it('returns the key string if it does not exist in any locale', () => {
    const result = t('completely.made.up.key', pt);
    expect(result).toBe('completely.made.up.key');
  });
});
