// tests/data_structures/linked_list.test.js

const LinkedList = require('../../src/data_structures/linked_list'); // Adjust the path as necessary

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
    list.push('first');
    list.push('second');
    list.push('third');
  });

  test('remove', () => {
    expect(list.remove(1).val).toBe('second');
    expect(list.length).toBe(2);
    expect(list.get(1).val).toBe('third');
  });

  test('remove from invalid index', () => {
    expect(list.remove(-1)).toBeUndefined();
    expect(list.remove(3)).toBeUndefined();
  });

  test('reverse', () => {
    list.reverse();
    expect(list.get(0).val).toBe('third');
    expect(list.get(1).val).toBe('second');
    expect(list.get(2).val).toBe('first');
  });
});