let idade = Number(prompt(`Qual sua idade ?`));

let idadeAmigo = Number(prompt(`Qual a idade do seu melhor amigo ?`));

let resp = idade > idadeAmigo

console.log(`Sua idade de ${idade} é maior do que a idade de ${idadeAmigo} do seu amigo "V" ou "F" ? :${resp}`);

let comparar = idade - idadeAmigo

console.log(`sua idade tem a seguinte relação com a de seu amigo : ${comparar}`);

/*
a = vou para a praia.
b = sou maior de idade.
c = posso tomar uma cervejinha.
d = quero passear de carro.

1- Não sou maior de idade e quero passear de carro
2- Sou maior de idade e vou para a praia
3- Vou para a praia ou quero passear de carro
4- posso tomar uma cervejinha e não vou passear de carro
*/
const a = true;
const b = true;
const c = true;
const d = true;

let resp1 = !b && d;
console.log(`1- Não sou maior de idade e quero passear de carro :${resp1}`);

resp1 = b && a;
console.log(`2- Sou maior de idade e vou para a praia :${resp1}`);

resp1 = a || d;
console.log(`3- Vou para a praia ou quero passear de carro :${resp1}`);

resp1 = c || !d;
console.log(`3- posso tomar uma cervejinha e não vou passear de carro :${resp1}`);