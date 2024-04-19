const Queue = require('../data_structures/queue'); 

function josephusSurvivor(n, skip) {
    const queue = new Queue();
    for (let i = 1; i <= n; i++) {
      queue.enqueue(i);
    }
  
    while (queue.size > 1) {
      for (let i = 1; i < skip; i++) {
        queue.enqueue(queue.dequeue());
      }
      queue.dequeue();
    }
  
    return queue.dequeue();
}

module.exports = josephusSurvivor;
