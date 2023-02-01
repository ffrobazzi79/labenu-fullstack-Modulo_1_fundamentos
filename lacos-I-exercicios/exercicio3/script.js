let array1 = ["Brasil","USA","Australia","Canada","Italia"];

for (let x = 0; x < array1.length; x++) {
    console.log(`${x+1} - ${array1[Number(`${x}`)]}`);
}

console.log(``);

let x = 0
while (x < array1.length) {
    console.log(`${x+1} - ${array1[Number(`${x}`)]}`);
    x++
}