/*
1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima no console a mensagem no formato abaixo:
O e-mail emailDoUsuario foi cadastrado com sucesso. Boas vindas, nomeDoUsuario!

2. Adicione à mensagem anterior a quantidade de caracteres presente no nome da pessoa.
*/

const nome = prompt(`Qual seu nome?`)
const email = prompt(`Qual seu e-mail?`)

let frase = `O e-mail ${email} foi cadastrado com sucesso. Boas vindas, ${nome}! Seu nome possue ${nome.length} caracteres.`
console.log(frase)

/*
3. A seguir, faça o que se pede:
Substitua todas as letras R na frase criada, por letras X
Verifique se o e-mail da pessoa possui @, e imprima a resposta da checagem no console.
*/

let fraseComX =frase.replaceAll("r","x")
console.log(fraseComX)
console.log(`checando email com @ : ${email.includes("@")}`)