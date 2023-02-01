// Modelos de objetos

const meuObjeto = {
    chave1: 2,
    chave2: "string",
    chave3: true,
    chave4: [],
    chave5: {},
    dadoUsuario: prompt("Digite um valor :")
};

meuObjeto.modulo1 = "Módulo 1"; // notação de ponto
meuObjeto["modulo2"] = "Módulo 2"; // notação de colchete

const estudante1 = "Vini";
const estudante1Matricula = 32481;
const estudante1Notas = [10, 8, 5];

// Exercício 1
const estudante = {
    nome: "Vini",
    sobrenome: "Silva",
    matricula: 32481,
    notas: [10, 8 , 5]
};

estudante.modulo = "Módulo 1"; // notação de ponto
estudante["modulo"] = "Módulo 1"; // notação de colchete

// acessar as propriedades
console.log("estudante", estudante);
console.log("Nome : ", estudante.nome);
console.log("Segunda nota : ", estudante.notas[1]);
console.log("Módulo : ", estudante.modulo);

// criar outro objeto com base no objeto anterior
const novoEstudante = {
    ...estudante, 
    nome: "Astrodev",
    notas: [...estudante.notas, 9], // espelhamento feito
    modulo: "Módulo 2"
};

novoEstudante.notas.push(9) // adicionado mais um elemento
console.log("novo estudante", novoEstudante);
// console.log("estudante", estudante)

// criar um array com o s dois estudantes
const estudanteLabenu = [novoEstudante];
estudanteLabenu.push(estudante)

console.log(estudanteLabenu);