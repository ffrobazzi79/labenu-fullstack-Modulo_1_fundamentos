// const pokemons = [
//     {nome: , tipo: , vida: },
//     {nome: , tipo: , vida: },
//     {nome: , tipo: , vida: },
//     {nome: , tipo: , vida: },
//     {nome: , tipo: , vida: },
//     {nome: , tipo: , vida: },
// ]

// Declare duas funções:
// Aprimeira deve receber um array de números, e retornar os números do array multiplicados por 3;

function multiplicarPor3 (array){
    const novoArray = []
    for (Elemento of array) {
        novoArray.push(Elemento * 3)
    }
    return novoArray
}

// for = (para cada número do array)
// A segunda deve receber um array de números, e retornar um array apenas com os números pares.

const retornaPares = (array) => {
    const novoArray = []
    for(numero of array){
        if (numero%2 === 0) {
        novoArray.push(numero)
        }
    }
    return novoArray
}

// return número % 2 === 0 ? número : false

const arrayNumeros = [1,2,3,4,5,6,7,8,9,10]
const arrayNumeros2 = [7,3,6,8,4,2,5]
console.log(arrayNumeros);
console.log(arrayNumeros2);
console.log("Multiplica arr1", multiplicarPor3(arrayNumeros));
console.log("Multiplica arr2", multiplicarPor3(arrayNumeros2));
console.log("retorna Pares arr1", retornaPares(arrayNumeros));
console.log("retorna Pares arr2", retornaPares(arrayNumeros2));

// criar função Callback

function imprimir(array, callback) {
    const novoArray = callback(array) // este é o callback
    console.log("Dentro da função", novoArray);
}

imprimir(arrayNumeros, multiplicarPor3)
imprimir(arrayNumeros, retornaPares)

// array.map((elemento, indice, array)=>{})

function multiplicaPor3map(array) {
    const novoArray = array.map((numero) => {
        return numero * 3
    })
    return novoArray
}
// jeito compacto
// function multiplicaPor3map(array) {
//    return = array.map((numero) => numero * 3)
// }

multiplicaPor3map(arrayNumeros)
imprimir(arrayNumeros, multiplicaPor3map)

function retornaParesFilter(array) {
    const novoArray = array.filter((numero)=>{
        if (numero%2 === 0) {
            return numero
        }
    })
    return novoArray
}
// jeito compacto
// function retornaParesFilter(array) {return = array.filter((numero)=> numero%2 === 0)}

retornaParesFilter(arrayNumeros)
imprimir(arrayNumeros, retornaParesFilter)