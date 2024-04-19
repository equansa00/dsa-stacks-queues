//src/data_structures/linked_list_queue.js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedListQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) throw new Error("Queue is empty");
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }

  peek() {
    if (!this.first) throw new Error("Queue is empty");
    return this.first.val;
  }

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = LinkedListQueue;
