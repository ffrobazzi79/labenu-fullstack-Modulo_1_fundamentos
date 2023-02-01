/* # Exercício 2

Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

```
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

divisível = com resto zero

Obs: O true ou false vai depender dos números inseridos e do resultado das operações.
*/

let primNum = prompt(`Digite o primeiro número:`);
let secNum = prompt(`Digite o segundo número:`);
let terceiraVar

console.log(`primeiro número: ${primNum}`);
console.log(`segundo número: ${secNum}`);

terceiraVar = primNum > secNum
console.log(`O primeiro numero é maior que segundo? ${terceiraVar}`);

terceiraVar = primNum === secNum
console.log(`O primeiro numero é igual ao segundo? ${terceiraVar}`);

terceiraVar = primNum % secNum === 0
console.log(`O primeiro numero é divisível pelo segundo? ${terceiraVar}`);