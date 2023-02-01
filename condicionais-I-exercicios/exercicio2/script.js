function maiorMenor(idade, booleano1, booleano2) {
    idade = prompt(`Digite a idade:`)
    if (idade >= 18) {
        console.log(`A pessoa é maior de idade`)
        booleano1 = confirm(`Terminou o ensino médio ? (responda true ou false)`)
        booleano2 = confirm(`Cursando alguma faculdade ? (responda true ou false)`)
        console.log(idade, booleano1 ,booleano2);
        if (booleano1) {
            console.log(`a pessoa terminou o ensino médio`);
        } else {
            console.log(`a pessoa não terminou o ensino médio`);
        }
        if (booleano2 && true) {
            console.log(`a pessoa está cursando alguma faculdade;`);
        } else {
            console.log(`a pessoa NÃO está cursando alguma faculdade`);
        }

    } else {
        booleano1 = false
        booleano2 = false
        console.log(`A pessoa é menor de idade.`);
        console.log(`a pessoa tem menos que 18 anos, não terminou o ensino médio e não cursa faculdade`);

        console.log(idade, booleano1 ,booleano2);
    }
}

maiorMenor()

// let idade = prompt(`Digite uma idade : `);
// let isMaiorIdade;
// let isCursandoOutraFaculdade;

// if(idade >= 18){isMaiorIdade = true, isCursandoOutraFaculdade = true
//     console.log(`A pessoa é maior de idade`)
// }else{
// 	isMaiorIdade = false, isCursandoOutraFaculdade = false
//     console.log(`A pessoa é menor de idade`)
// }

// console.log(idade,isMaiorIdade,isCursandoOutraFaculdade);