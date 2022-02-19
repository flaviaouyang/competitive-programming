const list = [10, 2, 3, 15, 2, 8, 6];
for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - 1; j++) {
        if (list[j] > list[j+1]) {
            let store = list[j];
            list[j] = list[j+1];
            list[j+1] = store;
        }
    }
}
console.log(list);