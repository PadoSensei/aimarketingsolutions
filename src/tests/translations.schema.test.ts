/**
 * Regression prevention:
 * - services.process being an array (must be an object with keys "0", "1", "2").
 * - footer nested inside coachingData.
 * - hero.titleConnector missing or not a string.
 * - coachingData.investment missing required fields (week, title, tag, description, points).
 * - coachingData.investment having stale fields (duration, cta).
 */
import { describe, it, expect } from 'vitest';
import en from '../locales/en.json';
import pt from '../locales/pt.json';

describe('Translation Schema Conformance', () => {
  [
    { name: 'EN', data: en },
    { name: 'PT', data: pt }
  ].forEach(({ name, data }) => {
    describe(`${name} locale`, () => {
      it('services.process is an object with keys "0", "1", "2"', () => {
        const process = (data as any).services.process;
        expect(typeof process, `${name}: services.process must be an object`).toBe('object');
        expect(Array.isArray(process), `${name}: services.process must not be an array`).toBe(false);
        expect(Object.keys(process).sort(), `${name}: services.process must have keys "0", "1", "2"`).toEqual(['0', '1', '2']);

        ['0', '1', '2'].forEach(key => {
          expect(process[key], `${name}: services.process.${key} must have title and description`).toMatchObject({
            title: expect.any(String),
            description: expect.any(String)
          });
        });
      });

      it('footer is a top-level key, not nested in coachingData', () => {
        expect(data, `${name}: footer must be a top-level key`).toHaveProperty('footer');
        expect((data as any).coachingData, `${name}: coachingData must not contain footer`).not.toHaveProperty('footer');
      });

      it('hero.titleConnector exists and is a string', () => {
        expect((data as any).hero.titleConnector, `${name}: hero.titleConnector must be a string`).toBeTypeOf('string');
      });

      it('coachingData.investment has correct fields', () => {
        const investment = (data as any).coachingData.investment;
        expect(investment, `${name}: coachingData.investment must exist`).toBeDefined();

        // Required fields
        expect(investment.week, `${name}: coachingData.investment.week must be a string`).toBeTypeOf('string');
        expect(investment.title, `${name}: coachingData.investment.title must be a string`).toBeTypeOf('string');
        expect(investment.tag, `${name}: coachingData.investment.tag must be a string`).toBeTypeOf('string');
        expect(investment.description, `${name}: coachingData.investment.description must be a string`).toBeTypeOf('string');
        expect(Array.isArray(investment.points), `${name}: coachingData.investment.points must be an array`).toBe(true);

        // Forbidden stale fields
        expect(investment, `${name}: coachingData.investment must not have duration`).not.toHaveProperty('duration');
        expect(investment, `${name}: coachingData.investment must not have cta`).not.toHaveProperty('cta');
      });
    });
  });
});
