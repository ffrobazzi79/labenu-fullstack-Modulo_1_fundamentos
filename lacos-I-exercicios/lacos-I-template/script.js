// Vamos criar um sistema em que a pessoa será solicitada a inserir vários números, um após o outro.


// Quando digitar o número '0', devemos parar de solicitar novos inputs e imprimir no console a soma de todos os números indicados.

// Ex.: Vamos supor que ele coloque:  10, 3, 50, 7, 0. 
// O resultado deve ser: 70

let numero = +prompt(`Digite um número`)
let resultadoSoma = 0

while (numero !== 0) {
    resultadoSoma = resultadoSoma + numero
    numero = Number(prompt(`Digite outro número`))
}
console.log(resultadoSoma);