// Assuming the correct path based on your project structure
const LinkedListQueue = require('../../src/data_structures/linked_list_queue');

describe('LinkedListQueue', () => {
  let queue;

  beforeEach(() => {
    queue = new LinkedListQueue();
  });

  test('enqueue', () => {
    queue.enqueue('first');
    expect(queue.peek()).toBe('first');
    queue.enqueue('second');
    expect(queue.peek()).toBe('first');
  });

  test('dequeue', () => {
    queue.enqueue('first');
    queue.enqueue('second');
    expect(queue.dequeue()).toBe('first');
    expect(queue.dequeue()).toBe('second');
  });

  test('dequeue from empty queue', () => {
    expect(() => {
      queue.dequeue();
    }).toThrow('Queue is empty');
  });

  test('peek', () => {
    queue.enqueue('first');
    queue.enqueue('second');
    expect(queue.peek()).toBe('first');
  });

  test('peek from empty queue', () => {
    expect(() => {
      queue.peek();
    }).toThrow('Queue is empty');
  });

  test('isEmpty', () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue('first');
    expect(queue.isEmpty()).toBe(false);
  });
});
