const DoublyLinkedList = require('../../src/data_structures/doubly_linked_list');

describe('DoublyLinkedList', () => {
    let list;

    beforeEach(() => {
        list = new DoublyLinkedList();
        list.push('first'); // Adjust based on the specific test needs
        list.push('second');
        list.push('third');
    });

    test('push', () => {
        list.push('fourth');
        expect(list.length).toBe(4);
        expect(list.tail.val).toBe('fourth');
    });

    test('pop', () => {
        const val = list.pop()?.val;
        expect(val).toBe('third');
        expect(list.length).toBe(2);
        expect(list.tail.val).toBe('second');
    });

    test('shift', () => {
        const val = list.shift()?.val;
        expect(val).toBe('first');
        expect(list.length).toBe(2);
        expect(list.head.val).toBe('second');
    });

    test('unshift', () => {
        list.unshift('zero');
        expect(list.length).toBe(4);
        expect(list.head.val).toBe('zero');
    });

    test('get', () => {
        expect(list.get(0)?.val).toBe('first');
        expect(list.get(1)?.val).toBe('second');
        expect(list.get(2)?.val).toBe('third');
    });

    test('set', () => {
        const success = list.set(1, 'middle');
        expect(success).toBe(true);
        expect(list.get(1)?.val).toBe('middle');
    });

    test('insert', () => {
        const success = list.insert(1, 'middle');
        expect(success).toBe(true);
        expect(list.get(1)?.val).toBe('middle');
        expect(list.length).toBe(4);
    });

    test('remove', () => {
        const removed = list.remove(1)?.val;
        expect(removed).toBe('second');
        expect(list.get(1)?.val).toBe('third');
        expect(list.length).toBe(2);
    });
});
