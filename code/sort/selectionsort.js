const list = [10, 2, 3, 15, 2, 8, 6];

for ( let i = 0; i < list.length - 1; i++ ) {
    let min = i;
    for ( let j = i + 1; j < list.length; j++ ) {
        if (list[j] < list[min]) {
            min = j;
        }
    }
    if (min != i) {
        [list[min], list[i]] = [list[i], list[min]];
    }
}

console.log(list);