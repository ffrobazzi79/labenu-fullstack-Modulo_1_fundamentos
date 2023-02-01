/*
Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

- Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;
- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
*/
const array1 = [23, 54, 36]
const array2 = ["eu","tu","ele","nós","vós","eles"]
const array3 = [983, "?!?", true, false]

console.log(array1, array2, array3)

console.log(array1.length)
console.log(array2.length)
console.log(array3.length)

console.log(array1[0])
console.log(array2[1])
console.log(array3[2])

const array1Copia = array1.slice()
const array2Copia = array2.slice()
const array3Copia = array3.slice()

array1Copia.splice(0,0,32)
console.log(array1)
console.log(array1Copia)

array2Copia.pop()
console.log(array2)
console.log(array2Copia)

array3Copia.splice(2,1)
console.log(array3)
console.log(array3Copia)

