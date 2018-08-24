// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1]
  }
  
  weave(q1, q2) {
    const q = new Queue();
    while (q1.peek() || q2.peek()) {
      if (q1.peek()) {
        q.add(q1.remove());
      }

      if (q2.peek()) {
        q.add(q2.remove());
      }

    }

    return q;
  }

}



module.exports = Queue;
