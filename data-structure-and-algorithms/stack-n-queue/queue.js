class Queue {
  // queue is implemented with an array
  constructor() {
    this.items = [];
  }

  // add element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // remove the first element from the queue and return the removed element
  dequeue() {
    if (this.items.length === 0) {
      return "Queue Underflow";
    }
    return this.items.shift();
  }

  // return the first element from the queue without removing it
  front() {
    if (this.items.length === 0) {
      return "Queue Empty";
    }
    return this.items[0];
  }

  //helper methods
  isEmpty() {
      return this.items.length === 0;
  }

  printQueue() {
      let str = "Queue: ";
      for (let i = 0; i < this.items.length; i++) {
          str += this.items[i] + " ";
      }
      return str;
  }
}

let i = new Queue();
i.enqueue(15);
i.enqueue(35);
i.enqueue(55);
console.log(i.dequeue());
console.log(i.printQueue());
