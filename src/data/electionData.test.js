import { describe, it, expect } from 'vitest';
import { timelineData, stepsData, quizData, glossaryData, suggestedChips } from './electionData';

describe('electionData', () => {
  it('timelineData should be an array and have entries', () => {
    expect(Array.isArray(timelineData)).toBe(true);
    expect(timelineData.length).toBeGreaterThan(0);
  });

  it('stepsData should be an array and have entries', () => {
    expect(Array.isArray(stepsData)).toBe(true);
    expect(stepsData.length).toBeGreaterThan(0);
  });

  it('quizData should have questions and valid answers', () => {
    expect(Array.isArray(quizData)).toBe(true);
    quizData.forEach(item => {
      expect(item).toHaveProperty('q');
      expect(item).toHaveProperty('opts');
      expect(item).toHaveProperty('ans');
      expect(typeof item.ans).toBe('number');
      expect(item.ans).toBeLessThan(item.opts.length);
    });
  });

  it('glossaryData should be sorted alphabetically', () => {
    const terms = glossaryData.map(item => item.term);
    const sortedTerms = [...terms].sort((a, b) => a.localeCompare(b));
    expect(terms).toEqual(sortedTerms);
  });

  it('suggestedChips should be an array of strings', () => {
    expect(Array.isArray(suggestedChips)).toBe(true);
    suggestedChips.forEach(chip => {
      expect(typeof chip).toBe('string');
    });
  });
});
