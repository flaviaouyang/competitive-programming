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

// preorder
const DFS = (root) => {
  if (root !== undefined) {
    console.log(root.value);
    for (let i = 0; i < root.children.length; i++) {
      DFS(root.children[i]);
    }
  }
};

// DFS(root);

// post order
const DFSPost = (root) => {
  if (root !== undefined) {
    for (let i = 0; i < root.children.length; i++) {
      DFS(root.children[i]);
    }
    console.log(root.value);
  }
};
// DFSPost(root);

// stack
const DFSStack = (root) => {
  const s = [];
  s.push(root);
  while (s.length !== 0) {
    let current = s.pop();
    console.log(current.value);
    for (let i = 0; i < current.children.length; i++) {
      s.push(current.children[i]);
    }
  }
};
// DFSStack(root);
