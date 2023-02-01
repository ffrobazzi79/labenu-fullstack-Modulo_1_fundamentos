/*# Exercício 3


a)4 funções, dois parâmetros numéricos e retornar o valores.

b) receba do usuário dois números e armazene.

c) Invoque as funções, argumento os dois números recebidos.

d) Receber o retorno das funções e imprima no console.
*/
let numSoma1 = Number(prompt(`Primeiro número :`));
let numSoma2 = Number(prompt(`Primeiro número :`));

function somar(num1, num2){
	const resultado = num1+num2;
	return `A soma de ${num1} com ${num2} é igual a: ${resultado}`
}
console.log(somar(numSoma1,numSoma2));

function subtrair(num1, num2){
	const resultado = num1-num2;
	return `Se de ${num1} subtrair ${num2} fica igual a: ${resultado}`
}
console.log(subtrair(numSoma1,numSoma2));

function multiplicar(num1, num2){
	const resultado = num1*num2;
	return `Se multiplicar ${num1} e ${num2} isso é igual a: ${resultado}`
}
console.log(multiplicar(numSoma1,numSoma2));

function dividir(num1, num2){
	const resultado = num1/num2;
	return `A divisão de ${num1} com ${num2} é: ${resultado}`
}
console.log(dividir(numSoma1,numSoma2));
