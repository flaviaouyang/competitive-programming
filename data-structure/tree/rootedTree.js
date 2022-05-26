class treeNode {
  constructor(value) {
    this.value = value;
    this.descendants = [];
  }
}

// create nodes with values
const root = new treeNode("pet store");
const cat = new treeNode("cat");
const dog = new treeNode("dog");

// associate children with its parent
root.descendants.push(dog, cat);

const beagle = new treeNode("beagle");
const golden = new treeNode("golden retriever");
const husky = new treeNode("husky");

dog.descendants.push(beagle, golden, husky);

const shortHair = new treeNode("English short hair");
const garfield = new treeNode("garfield");

cat.descendants.push(shortHair, garfield);