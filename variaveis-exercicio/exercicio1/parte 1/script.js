/*
# Exercício 1
*/

let nome;
let idade;

console.log(typeof nome, idade);
// por que esse tipo foi impresso?
// O valor "undefined" foi atribuído por não ter sido atribuído outro valor

nome = prompt(`nome:`);
idade = prompt(`idade:`);

console.log(typeof nome, typeof idade);
// O valor "string" foi atribuído

console.log(`Olá ${nome},  você tem ${idade} anos".`);