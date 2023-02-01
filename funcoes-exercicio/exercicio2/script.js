/*
# Exercício 2
Declare e chame as funções abaixo:

a) função receba 2 números parâmetros, faça a soma e imprima. Invoquee imprima no console o resultado.
*/
function somar(num1, num2){
	const resultado = num1+num2;
	console.log(resultado);
	return resultado
}
somar(10,20);
console.log(somar(10,20));

/*
b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
*/
function numMaior(num1, num2){
	const resultado = num1>num2;
	console.log(`Verificando se o ${num1} é maior que ${num2} : ${resultado}`);
	return resultado
}
numMaior(5,4);
console.log(numMaior(5,4));


/*
c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.
*/
function numPar(num1){
	const resultado = num1%2 === 0;
    console.log(`Verificando se o ${num1} é par :${resultado}`);
	return resultado
}
numPar(2);
console.log(numPar(2));

/*
d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.  
*/

function salMenosInss(num1){
	const resultado = num1-num1*0.1;
	console.log(resultado);
	return resultado
}
salMenosInss(3000);
console.log(salMenosInss(3000));
