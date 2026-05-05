/**
 * Regression prevention:
 * - coachingSlides having more or fewer than 3 points (carousel renderer limitation).
 * - Missing required fields in coachingSlides or servicesData.
 * - servicesData slugs not matching translation keys.
 */
import { describe, it, expect } from 'vitest';
import { coachingSlides } from '../data/coachingData';
import { servicesData } from '../data/servicesData';
import en from '../locales/en.json';
import pt from '../locales/pt.json';

describe('Data Shape Integrity', () => {
  describe('coachingSlides', () => {
    it('every slide has exactly 3 points', () => {
      coachingSlides.forEach(slide => {
        expect(slide.points.length,
          `Slide '${slide.week}' has ${slide.points.length} points but the carousel renderer only supports exactly 3 (indexes 0, 1, 2). Extra points are silently dropped.`
        ).toBe(3);
      });
    });

    it('every slide has required fields', () => {
      coachingSlides.forEach(slide => {
        expect(slide).toMatchObject({
          week: expect.any(String),
          title: expect.any(String),
          tag: expect.any(String),
          description: expect.any(String),
          points: expect.any(Array)
        });
      });
    });
  });

  describe('servicesData', () => {
    it('every service has required fields', () => {
      servicesData.forEach(service => {
        expect(service).toMatchObject({
          slug: expect.any(String),
          icon: expect.any(String),
          title: expect.any(String),
          description: expect.any(String)
        });
      });
    });

    it('every slug has a corresponding translation key', () => {
      const missingKeys: string[] = [];
      servicesData.forEach(service => {
        if (!(en.servicesData as any)[service.slug]) {
          missingKeys.push(`EN: servicesData.${service.slug}`);
        }
        if (!(pt.servicesData as any)[service.slug]) {
          missingKeys.push(`PT: servicesData.${service.slug}`);
        }
      });
      expect(missingKeys, `Missing translation keys for servicesData slugs:\n${missingKeys.join('\n')}`).toEqual([]);
    });
  });
});
