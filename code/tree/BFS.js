class treeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

// create nodes with values
const root = new treeNode("pet store");
const cat = new treeNode("cat");
const dog = new treeNode("dog");

// associate children with its parent
root.children.push(dog, cat);

const beagle = new treeNode("beagle");
const golden = new treeNode("golden retriever");
const husky = new treeNode("husky");

dog.children.push(beagle, golden, husky);

const shortHair = new treeNode("English short hair");
const garfield = new treeNode("garfield");

cat.children.push(shortHair, garfield);

const BFS = (root) => {
  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let current = queue.shift();
    console.log(current.value);
    for (let i = 0; i < current.children.length; i++) {
      queue.push(current.children[i]);
    }
  }
};

BFS(root);
