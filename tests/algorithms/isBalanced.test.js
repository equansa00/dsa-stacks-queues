const isBalanced = require('../../src/algorithms/isBalanced');

describe('isBalanced', () => {
  test('balanced strings', () => {
    expect(isBalanced('hello')).toBe(true);
    expect(isBalanced('(hi) [there]')).toBe(true);
    expect(isBalanced('(hi [there])')).toBe(true);
    expect(isBalanced('(((hi)))')).toBe(true);
  });

  test('imbalanced strings', () => {
    expect(isBalanced('(hello')).toBe(false);
    expect(isBalanced('(nope]')).toBe(false);
    expect(isBalanced('((ok) [nope)]')).toBe(false);
  });
});