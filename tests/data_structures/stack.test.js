const Stack = require('../../src/data_structures/stack');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('push', () => {
    stack.push('hello');
    expect(stack.peek()).toBe('hello');
  });

  describe("pop", function() {
    it("returns the value of the node removed", function() {
      stack.push(10);
      stack.push(100);
      stack.push(1000);
      var removed = stack.pop();
      expect(removed).toBe(1000);
      expect(stack.size).toBe(2);
      stack.pop();
      stack.pop();
      expect(stack.size).toBe(0);
    });

    it("throws an error if the stack is empty", function() {
      expect(() => stack.pop()).toThrow(Error);
    });
  });

  describe("peek", function() {
    it("returns the value at the start of the stack", function() {
      stack.push('hello');
      expect(stack.peek()).toBe('hello');
    });
  });
});