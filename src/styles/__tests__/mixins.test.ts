import { describe, test, expect } from '@jest/globals';

import { Mixins } from '../index';

describe('Calculate backdrop height', () => {
  test.each([
    [400, 1000],
    [613, 1000],
    [822, 1000],
    [1000, 1500],
    [1501, 2000],
    [2010, 2500],
  ])('height %i %i', (phoneHeight, expected) => {
    expect(Mixins.backdropHeight(phoneHeight)).toBe(expected);
  });
});
