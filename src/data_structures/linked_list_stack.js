class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class LinkedListStack {
    constructor() {
      this.first = null;
      this.size = 0;
    }
  
    push(val) {
      let newNode = new Node(val);
      if (!this.first) {
        this.first = newNode;
      } else {
        newNode.next = this.first;
        this.first = newNode;
      }
      return ++this.size;
    }
  
    pop() {
      if (!this.first) throw new Error("Stack is empty");
      let temp = this.first;
      this.first = this.first.next;
      this.size--;
      return temp.val;
    }
  
    peek() {
      if (!this.first) throw new Error("Stack is empty");
      return this.first.val;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  }
  
  module.exports = LinkedListStack;
  