/* # Exercício 3

Você foi contratado para criar o programa de RH, que realiza o cadastro de funcionários e armazene suas respostas. 


1) Este programa deve perguntar ao usuário.

   a) Nome completo
   
   b) Data de nascimento (utilize as / ) 
   
   c) Endereço
   
   d) CPF
   
   e) Escolaridade
   
   f) Possui CHN?
   
   g) Quantos filhos possui?
   
   h) Cargo atual
   
   i) Salário
   
   j) Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero
   
   k) Informe o ano de admissão

2) Utilize o casting para a conversão de tipos das variáveis que recebem números.
3) Imprima no console o tipo de todas as variáveis.
4) Imprima no console um relatório do funcionário.
*/

const nomeComp = prompt(`Escreva seu nome completo:`);
const dataNasc = prompt(`Data de nascimento: DD/MM/AA`);
let endComp = prompt(`Endereço:`);
const cpf = prompt(`CPF:`);
let escolar = prompt(`Escolaridade:`);
let cnh = confirm(`Possui CNH ?`);
let filhos = Number(prompt(`Quantos filhos:`));
let cargoAtual = prompt(`Cargo atual:`);
let salario = Number(prompt(`Salário:`));
let comissao = Number(prompt(`Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero:`));
let anoAdmiss = Number(prompt(`Ano de adimissão:`));

console.log(typeof nomeComp,typeof dataNasc,typeof endComp,typeof cpf,typeof escolar,typeof cnh,typeof filhos,typeof cargoAtual,typeof salario,typeof comissao,typeof anoAdmiss)

console.log("nome completo:", nomeComp)
console.log("Data de nascimento:", dataNasc)
console.log("Endereço:", endComp)
console.log("CPF:", cpf)
console.log("Escolaridade:", escolar)
console.log("Possui CNH ?", cnh)
console.log("Quantos filhos:", filhos)
console.log("Cargo atual:", cargoAtual)
console.log("Salário:", salario)
console.log("Comissão:", comissao)
console.log("Ano de adimissão:", anoAdmiss)