const josephusSurvivor = require('../../src/algorithms/josephusSurvivor');

describe('josephusSurvivor', () => {
  test('survivor with different inputs', () => {
    expect(josephusSurvivor(7, 3)).toBe(4);
    expect(josephusSurvivor(11, 2)).toBe(7);
    expect(josephusSurvivor(1, 300)).toBe(1);
    expect(josephusSurvivor(14, 2)).toBe(13);
    expect(josephusSurvivor(100, 1)).toBe(100);
  });
});