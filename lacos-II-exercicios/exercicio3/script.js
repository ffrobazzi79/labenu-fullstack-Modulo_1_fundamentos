let array1 = ["Brasil", "EUA", "Austrália", "Itália", "Canadá"]
    
for (let i = 0; i < array1.length; i++) {
    console.log(`${i+1} - ${array1[i]}`);
        
}

console.log(` \nFOR OF\n `);

for (const i of array1) {
    console.log(`${array1.indexOf(i)+1} - ${i}`);
}
