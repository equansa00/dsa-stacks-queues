const LinkedListStack = require('../../src/data_structures/linked_list_stack');

describe('LinkedListStack', () => {
  let stack;

  beforeEach(() => {
    stack = new LinkedListStack();
  });

  test('push', () => {
    stack.push('first');
    expect(stack.peek()).toBe('first');
    stack.push('second');
    expect(stack.peek()).toBe('second');
  });

  test('pop', () => {
    stack.push('first');
    stack.push('second');
    expect(stack.pop()).toBe('second');
    expect(stack.pop()).toBe('first');
  });

  test('pop from empty stack', () => {
    expect(() => {
      stack.pop();
    }).toThrow('Stack is empty');
  });

  test('peek', () => {
    stack.push('first');
    stack.push('second');
    expect(stack.peek()).toBe('second');
  });

  test('peek from empty stack', () => {
    expect(() => {
      stack.peek();
    }).toThrow('Stack is empty');
  });

  test('isEmpty', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push('first');
    expect(stack.isEmpty()).toBe(false);
  });
});