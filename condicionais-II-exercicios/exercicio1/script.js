// Exercício 1
let num1 = prompt(`Digite um número : `);

if (num1%2 == 0 || num1%3 == 0) {
    if (num1%2==0 && num1%3==0) {
        console.log(`o número divisível por 2 e por 3`);
    } else {
    
    if (num1%2==0) {
        console.log(`número divisível por 2`);
    }
    if (num1%3==0) {
        console.log(`número divisível por 3`);

    }
    }
} else {
    console.log(`número não divisível por 2 ou por 3`);
}