// Vamos escrever um programa que recebe um número por input de usuário.
// Esse programa deve escrever os números de 0 até o valor que foi digitado pela pessoa.
// Para isso, vamos utilizar um laço for que roda por X vezes, onde X é o número digitado.

const numero = +prompt(`Digite um número`)

for (let i = 0; i <= numero; i++) {
    console.log(i);
}
