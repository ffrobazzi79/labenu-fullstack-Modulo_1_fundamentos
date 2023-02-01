const array1 = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

for (let i = 0; i < array1.length; i++) {
    console.log(`Jogador ${[i+1]}: ${array1[i]}`);
}

console.log(`FOR IN`);

for (const i in array1) {
    console.log(`Jogador ${[+i+1]}: ${array1[i]}`);
}

console.log(`FOR OF`);

for (const [index, value] of array1.entries()) {
    console.log(`Jogador ${[Number(index)+1]}: ${value}`);
}
