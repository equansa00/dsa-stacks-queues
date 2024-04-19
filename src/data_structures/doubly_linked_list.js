class Node {
  constructor(val) {
      this.val = val;
      this.prev = null;
      this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  push(val) {
      const newNode = new Node(val);
      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
      }
      this.length++;
      return this;
  }

  pop() {
      if (!this.tail) return undefined;
      const poppedNode = this.tail;
      if (this.head === this.tail) {
          this.head = null;
          this.tail = null;
      } else {
          this.tail = poppedNode.prev;
          this.tail.next = null;
          poppedNode.prev = null;
      }
      this.length--;
      return poppedNode;
  }

  shift() {
      if (!this.head) return undefined;
      const oldHead = this.head;
      if (this.head === this.tail) {
          this.head = null;
          this.tail = null;
      } else {
          this.head = oldHead.next;
          this.head.prev = null;
          oldHead.next = null;
      }
      this.length--;
      return oldHead;
  }

  unshift(val) {
      const newNode = new Node(val);
      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          newNode.next = this.head;
          this.head.prev = newNode;
          this.head = newNode;
      }
      this.length++;
      return this;
  }

  get(index) {
      if (index < 0 || index >= this.length) return null;
      let current, count;
      if (index < this.length / 2) {
          count = 0;
          current = this.head;
          while (count !== index) {
              current = current.next;
              count++;
          }
      } else {
          count = this.length - 1;
          current = this.tail;
          while (count !== index) {
              current = current.prev;
              count--;
          }
      }
      return current;
  }

  set(index, val) {
      let node = this.get(index);
      if (node != null) {
          node.val = val;
          return true;
      }
      return false;
  }

  insert(index, val) {
      if (index < 0 || index > this.length) return false;
      if (index === 0) return !!this.unshift(val);
      if (index === this.length) return !!this.push(val);

      const newNode = new Node(val);
      const beforeNode = this.get(index - 1);
      const afterNode = beforeNode.next;

      beforeNode.next = newNode;
      newNode.prev = beforeNode;
      newNode.next = afterNode;
      afterNode.prev = newNode;
      this.length++;
      return true;
  }

  remove(index) {
      if (index < 0 || index >= this.length) return undefined;
      if (index === 0) return this.shift();
      if (index === this.length - 1) return this.pop();

      const nodeToRemove = this.get(index);
      nodeToRemove.prev.next = nodeToRemove.next;
      nodeToRemove.next.prev = nodeToRemove.prev;
      nodeToRemove.next = null;
      nodeToRemove.prev = null;
      this.length--;
      return nodeToRemove;
  }
}

module.exports = DoublyLinkedList;

