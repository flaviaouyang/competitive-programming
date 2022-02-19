const list = [10, 2, 3, 15, 2, 8, 6];

for ( let i = 0; i < list.length; i++ ) {
    let element = list[ i ];
    let j = i;
    while ( j > 0 && element < list[j-1]) {
        list[j] = list[j-1];
        j--;
    }
    list[j] = element;
}

console.log(list);