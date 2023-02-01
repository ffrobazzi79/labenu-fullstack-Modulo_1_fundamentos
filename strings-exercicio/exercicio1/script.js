/*
# Exercício 1

Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    
    ```
    Estas são as comidas favoritas de nomeDoUsuario
    - Comida1
    - Comida2
    - Comida3
    ```
    
Você deve usar apenas um `console.log()` para isso

  <details> 
  <summary> 💡 Dica</summary>
  
    ⭐ Você pode juntar texto com variáveis de duas formas:
    - Concatenando as strings (com o sinal de +)
    - Utilizando template strings (e envolvendo a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)
    
    Adicionar um  `\n` na string coloca uma **quebra de linha** no texto.
  
  </details>
*/

const nome = prompt(`Qual o seu nome ?`);
const Comida1 = prompt(`Qual sua comida favorita  ?`);
const Comida2 = prompt(`Mais uma comida favorita :`);
const Comida3 = prompt(`Mais uma comida favorita :`);
console.log(`Meu nome é ${nome} e as minhas 3 comidas favoritas são :\n-${Comida1}\n-${Comida2}\n-${Comida3} `)