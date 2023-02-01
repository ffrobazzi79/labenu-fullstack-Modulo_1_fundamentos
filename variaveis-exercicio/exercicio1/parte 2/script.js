/*
# Exercício 1

## Parte 2

Agora, vamos criar 3 perguntas com valores de Sim ou Não.

Siga as instruções abaixo:

**a)** Crie um programa que faça 3 perguntas para o usuário, através do prompt. Armazene a resposta de cada pergunta em uma variável.

**b)** Imprima no console todas as respostas.

**c)** Altere seu programa, para que o texto das perguntas sejam armazenadas em 3 variáveis diferentes. 

**d)** Troque o texto do seu prompt, pelas variáveis que contém as perguntas.

```
//mandando a pergunta como texto direto
const respostaA = prompt("Você está usando uma roupa azul hoje?");

//mandando a pergunta como variável
const perguntaA = "Você está usando uma roupa azul hoje?";
const respostaA = prompt(perguntaA);

```
e) Altere o console para imprimir a pergunta e a resposta. 

```
Você está usando uma roupa azul hoje? - SIM
```

*/

let nome = prompt(`Mora no Brasil ?`);
let idade = prompt(`Mora em uma casa ?`);
let corFav = prompt(`Tem pet ?`);

console.log(nome, idade, corFav)

let perg1 = "Mora no Brasil ?"
let perg2 = "Mora em uma casa ?"
let perg3 = "Tem pet ?"

let resp1 = prompt(perg1);
let resp2 = prompt(perg2);
let resp3 = prompt(perg3);

console.log(resp1, resp2, resp3);