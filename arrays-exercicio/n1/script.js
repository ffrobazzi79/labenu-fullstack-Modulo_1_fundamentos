/*
/ Vamos criar alguns arrays, e refletir a respeito.
// Crie um array com 3 itens do tipo String
// Crie um array com 3 itens do tipo Number
// Crie um array com uma String, um número e um booleano;
// Crie um array com apenas um valor. Um número.
// Crie um array sem nenhum valor dentro.
*/

const arrayDeStrings = ["Bruno","Tião","Dandara"]
console.log(arrayDeStrings)
console.table(arrayDeStrings)

const arrayDeNumeros = [100,200,300]
console.log(arrayDeNumeros)
console.table(arrayDeNumeros)

const arrayVariado = ["Copa",6,true]
console.log(arrayVariado)
console.table(arrayVariado)
arrayVariado[0] = "Brasil"

const arrayItemUnico = [6]
console.log(arrayItemUnico)

const arrayVazio = []
console.log(arrayVazio)

const timeParaOHexa = ["Brasil"]
console.log(timeParaOHexa)
const copa = "copa do mundo"
const hexa = 6
const anoDaCopa = true
console.log(arrayVariado)
/*
Vamos tentar acessar índices específicos dos arrays da última prática.
Cheque o length do primeiro array. O que acontece se tentarmos acessar o índice 3 deste array?
Verifique se o terceiro array inclui cada um dos itens;
No quarto array, imprima o valor do único item. Observe qual o seu índice, e imprima seu tamanho.
*/
console.log(arrayDeStrings.length)
console.log(arrayDeStrings[3]) // undefined

console.log(arrayVariado.includes("copa"))
console.log(arrayVariado.includes(6))
const busca = "Brasil"
console.log(arrayVariado.includes(busca))

console.log(arrayItemUnico.indexOf(0))
console.log(arrayItemUnico.indexOf(1))
console.log(arrayItemUnico.indexOf(6))

/*
Crie uma cópia do primeiro array, utilizando a atribuição com sinal de igual.
Faça push() de uma nova string no array copiado
Imprima os dois arrays. Há diferença?
Como podemos ajustar?
Com o array copiado corretamente, remova os itens dos índices 2 e 3 do array copiado.
*/

/*
const novoArrayCopia = arrayDeStrings // isto cria uma referencia
*/
const novoArrayCopia = arrayDeStrings.slice()
console.log("Array de strings :", arrayDeStrings)
console.log("Array copiado :", novoArrayCopia)
novoArrayCopia.push("LABENU")
console.table(novoArrayCopia)
console.log("Array de strings :", arrayDeStrings)
console.log("Array copiado :", novoArrayCopia)

arrayDeStrings.push("O HEXA VEM")
console.table(arrayDeStrings)

// Com o array copiado corretamente, remova os itens dos índices 2 e 3 do array copiado.
// novoArrayCopia.slice(2,2)
// console.log("Array copiado :", novoArrayCopia)


/*
1. Crie um novo array. Ele deve possuir apenas números, e estes números não devem seguir nenhuma ordem específica. Por enquanto, não vamos imprimir o array.

2. Depois disso, crie uma cópia deste array utilizando o método slice().

Remova o último item 
Em seguida adicione o número 6 no fim do   array.
Depois, remova o número que está no índice 2 array.
Por fim, imprima os dois arrays.

*/

const novoArray1 = [21,32,43,54]
const novoArray1Copiado = novoArray1.slice()
novoArray1Copiado.pop()
novoArray1Copiado.push(6)
novoArray1Copiado.splice(2,1)
console.table(novoArray1)
console.table(novoArray1Copiado)