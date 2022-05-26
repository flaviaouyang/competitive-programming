const map = new Map();

map.set("Poussay", "Soso");
map.set("Piper", "Alex");
map.set("Nicky", "Morello");

console.log(map);
console.log(map.get("Piper"));
console.log(map.size);
map.delete("Poussay");
console.log(map.size);