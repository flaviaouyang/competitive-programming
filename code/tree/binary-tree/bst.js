class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(root) {
    this.root = root;
  }

  insert(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
        return node;
      } else {
        return "Failed to insert";
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
        return node;
      } else {
        return "Failed to insert";
      }
    }
  }

  find(key, root = this.root) {
    if (root === null) {
      return null;
    } else if (root.key === key) {
      return root;
    } else if (root.key > key) {
      return this.find(key, root.left);
    } else {
      return this.find(key, root.right);
    }
  }

  findMin(root = this.root) {
    if (root === null) {
      return null;
    } else if (root.left === null) {
      return root;
    } else {
      return this.findMin(root.left);
    }
  }

  findMax(root = this.root) {
      if (root === null) {
          return null;
      } else if (root.right === null) {
          return root;
      } else {
          return this.findMax(root.right);
      }
  }
}

const root = new Node(20);

const leftOne = new Node(15);
const leftTwoLeft = new Node(10);
const leftTwoRight = new Node(17);

const rightOne = new Node(30);
const rightTwoLeft = new Node(25);

const tree = new BST(root);

tree.insert(root, leftOne);
tree.insert(root, rightOne);
tree.insert(leftOne, leftTwoLeft);
tree.insert(leftOne, leftTwoRight);
tree.insert(rightOne, rightTwoLeft);

console.log(tree.find(17));
console.log(tree.findMin());
console.log(tree.findMax());
