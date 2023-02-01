/* # Exercício 1

Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
R- valor será "true"

O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código
R- valor será "false"

*/

let numPedido
let numero

numPedido = Number(prompt("Digite um número par."));
console.log (numPedido);
numPedido = numPedido % 2;
console.log (numPedido);
numPedido = Boolean(numPedido === 0);

console.log (`Seu número é par ? ${numPedido}`);
