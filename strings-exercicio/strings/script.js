/*
Vamos criar um programa que peça ao usuário para inserir seu nome, e sua cor favorita. Em seguida, o programa deve imprimir a mensagem:
A cor favorita de pessoa é cor;
*/
const nome = prompt(`Qual seu nome?`)
const cor = prompt(`Qual sua cor favorita?`)
const citacao = prompt("Escreva sua citação :")
const fraseTemplateString = `A cor favorita de ${nome} é ${cor}`
console.log(fraseTemplateString)
/*
Agora, vamos alterar a forma com que o texto aparece.
Altere a primeira string para que a pessoa também envie sua citação favorita. Essa citação deve ser impressa entre aspas.
Altere a segunda string que criamos, para que seja impressa dessa forma (utilizando apenas um console.log):
*/


const fraseTemplateString2 = `A cor favorita de ${nome} é ${cor}, citação "${citacao}".`
console.log(fraseTemplateString2)

/*
Vamos alterar a forma de nossa exibição de strings agora.
Faça com que o nome da pessoa sempre seja exibido em letras maiúsculas;
Exiba no console quantos caracteres tem o nome da pessoa.
Cheque se o nome da pessoa possui a letra A
*/
const nome2 = nome.toUpperCase()
const fraseTemplateString3 = `A cor favorita de ${nome2} é ${cor}, citação "${citacao}". O nome ${nome2} tem ${nome2.length} caracteres. Verificando se em ${nome2} existe a letra "A" : ${nome2.includes("A")}.`
console.log(fraseTemplateString3)

