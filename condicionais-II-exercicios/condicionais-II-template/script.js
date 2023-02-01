// if aninhados

let idadeDependente = 15

// idadeDependente >= 13
// idadeDependente <= 17

if (idadeDependente >= 13) {
    if (idadeDependente <= 17) {
        console.log(`Pode ter o cartão de dependente`);
    } else {
        console.log(`o limite de idade é 17 anos`);
    }
    
} else {
    console.log(`Para ter o cartão, o dependente precisa ter entre 13 e 17 anos.`);
}

// usando os operadores lógicos

idade = 13

if (idade >= 13 && idade <= 17) {
    console.log(`Pode ter o cartão, o dependente pracisa ter entre 13 e 17 anos. Consulte outras possibilidades do Labank`);
}

// ternário

let chuva = true

chuva ? console.log(`leva sombrinha`): console.log(`pode deixar a sombrinha`);

idadeDependente = 14

idadeDependente === 13 ? console.log(`Pode ter o cartão de dependente`):console.log(`Consulte outras possibilidades do Labank`);

// switch-case

let escolhaUusario = Number(prompt(`Digite o cartão desejado : `))
let cartao

switch (escolhaUusario) {
    case 1:
        cartao = `Fácil`;
        break;
    case 2:
        cartao = `Black`;
        break;
    case 3:
        cartao = `Platinum`;        
        break;
    case 4:
        cartao = `Master Gold`;
        break;
    default:
        cartao = `Escolha uma das 4 opções disponíveis`;
        break;
}

console.log(`Cartão`,cartao);