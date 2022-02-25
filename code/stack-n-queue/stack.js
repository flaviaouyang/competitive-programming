class Stack {
  // use array to implement stack
  constructor() {
    this.items = [];
  }

  // add an element to the top of the Stack
  push(element) {
    this.items.push(element);
  }

  // remove the element from the top of the Stack and return removed element
  pop() {
    if ((this.items.length = 0)) {
      return "Stack Underflow";
    }
    return this.items.pop();
  }

  // return the element on the top of the Stack but does not delete it
  peep() {
    return this.items[this.items.length - 1];
  }

  // helper functions
  isEmpty() {
    return this.items.length === 0;
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

let test = new Stack();
test.push(10);
test.pop();
test.pop();
test.push(12);
test.push(15);
test.peep();
console.log(test.printStack());
