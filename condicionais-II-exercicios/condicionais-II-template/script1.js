

const num = Number(prompt(`Numero : `));

if (num%2===0 || num%3===0) {
    
    if (num%2===0) {
        console.log(`Divisível por 2`);
    }
    if (num%3===0) {
        console.log(`Divisível por 3`);
    }
    if (num%2===0 && num%3===0) {
        console.log(`reafirmando que o número ${num} é divisível por 2 e por 3`);
    }

    switch (num) {
        case 6:
            console.log(`6`);
            break;
        case 12:
            console.log(`12`);
            break;
        case 18:
            console.log(`18`);
            break;
        case 24:
            console.log(`24`);
            break;
        case 30:
            console.log(`30`);
            break;
        default:
            console.log(`O número é maior do que 30 ou menor que 6`);
            break;
    }

    num===30?console.log(`UFA ACERTEI o número`):console.log(`não foi dessa vez que acertei o número`);
}else {
    console.log(`o número chamado não é divisível por 2 ou por 3`)
};