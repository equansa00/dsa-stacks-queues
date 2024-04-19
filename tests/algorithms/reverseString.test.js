const reverseString = require('../../src/algorithms/reverseString');

describe('reverseString', () => {
  test('reverse strings', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('JavaScript')).toBe('tpircSavaJ');
  });

  test('reverse empty string', () => {
    expect(reverseString('')).toBe('');
  });
});
