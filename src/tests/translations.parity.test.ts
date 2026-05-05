/**
 * Regression prevention:
 * - Missing translation keys in one locale that exist in another.
 * - Mismatched value types (e.g. string in EN, object in PT).
 * - Mismatched array lengths (e.g. 3 points in EN, 2 in PT).
 */
import { describe, it, expect } from 'vitest';
import en from '../locales/en.json';
import pt from '../locales/pt.json';

function getAllKeys(obj: any, prefix = ''): string[] {
  return Object.keys(obj).reduce((res: string[], el) => {
    if (Array.isArray(obj[el])) {
      return [...res, prefix + el];
    } else if (typeof obj[el] === 'object' && obj[el] !== null) {
      return [...res, prefix + el, ...getAllKeys(obj[el], prefix + el + '.')];
    }
    return [...res, prefix + el];
  }, []);
}

function getValue(obj: any, key: string) {
  return key.split('.').reduce((o, i) => (o ? o[i] : undefined), obj);
}

describe('Translation Parity', () => {
  const enKeys = getAllKeys(en);
  const ptKeys = getAllKeys(pt);

  it('all EN keys exist in PT', () => {
    const missingInPT = enKeys.filter(key => getValue(pt, key) === undefined);
    expect(missingInPT, `The following keys are missing in PT:\n${missingInPT.join('\n')}`).toEqual([]);
  });

  it('all PT keys exist in EN', () => {
    const missingInEN = ptKeys.filter(key => getValue(en, key) === undefined);
    expect(missingInEN, `The following keys are missing in EN:\n${missingInEN.join('\n')}`).toEqual([]);
  });

  it('value types match between EN and PT', () => {
    const commonKeys = enKeys.filter(key => ptKeys.includes(key));
    const typeMismatches: string[] = [];

    commonKeys.forEach(key => {
      const enVal = getValue(en, key);
      const ptVal = getValue(pt, key);

      const enType = Array.isArray(enVal) ? 'array' : typeof enVal;
      const ptType = Array.isArray(ptVal) ? 'array' : typeof ptVal;

      if (enType !== ptType) {
        typeMismatches.push(`${key}: EN=${enType}, PT=${ptType}`);
      }
    });

    expect(typeMismatches, `The following keys have type mismatches:\n${typeMismatches.join('\n')}`).toEqual([]);
  });

  it('array lengths match between EN and PT', () => {
    const commonKeys = enKeys.filter(key => ptKeys.includes(key));
    const lengthMismatches: string[] = [];

    commonKeys.forEach(key => {
      const enVal = getValue(en, key);
      const ptVal = getValue(pt, key);

      if (Array.isArray(enVal) && Array.isArray(ptVal)) {
        if (enVal.length !== ptVal.length) {
          lengthMismatches.push(`${key}: EN.length=${enVal.length}, PT.length=${ptVal.length}`);
        }
      }
    });

    expect(lengthMismatches, `The following array keys have length mismatches:\n${lengthMismatches.join('\n')}`).toEqual([]);
  });
});
