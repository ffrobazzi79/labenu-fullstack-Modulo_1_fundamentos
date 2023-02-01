/*
function pratica1Normal(num1){
    let sePar = num1%2 == 0
    console.log(`É número par ? ${sePar}!`)
    let mais10 = Number(num1)+10
    console.log(`O número mais 10 = ${mais10}!`)
    let multNum1 = num1*num1
    console.log(`O número multiplicado por ele mesmo = ${multNum1}!`)
}
numInserido = prompt(`Número :`)
pratica1Normal(numInserido)
*/

/*
function pratica2(num){
    return `o número ${num} é par ? ${num % 2 ===0}. Somado com 10 o resultado é ${num + 10} e multiplicado por ele mesmo é ${num*num}`
}
pratica2(2);

*/

/*
function pratica2(num){
    const verificada = num % 2 ===0
    const soma = num + 10
    const multiplica = num * num
    return `o número ${num} é par ? ${verificada}. Somado com 10 o resultado é ${num + 10} e multiplicado por ele mesmo é ${num*num}`
}
pratica2(2);
*/

/*
Faça uma função
que receba como parâmetros, login e senha. 
No corpo da função declare duas variáveis do tipo string loginArmazenado e senhaArmazenada com lavores já pré estabelecidos. Usaremos essas variáveis para verificar se são iguais às que estamos recebendo como parâmetro. Retorne true se as duas variáveis forem verdadeiras.
*/

/*
const pratica3 = (loginDigitado,senhaDigitada) => {
    const loginArmazenado = "admin@gmail.com"
    const senhaArmazenada = "bananinha"

    return loginDigitado == loginArmazenado && senhaDigitada === senhaArmazenada
}
console.log(pratica3 ("admin","senha"))

function pratica3function (loginDigitado,senhaDigitada) {
    const loginArmazenado = "admin"
    const senhaArmazenada = "senha"

    return loginDigitado == loginArmazenado && senhaDigitada === senhaArmazenada
}
console.log(pratica3function ("admin","senha"))

*/

/*
Declare uma função que:
Receba um nome, um ano de nascimento e o ano  Atual 
Retorne uma string com um boleano true para se o usuário for maior de idade e false para se for menor de idade. 
A string retornada deve ter a seguinte mensagem:
“Fulano é maior de idade? true”
Chame a função duas vezes, passando como argumento nomes e anos de nascimento diferentes.
*/

function maioridade (nome, anoNasc, anoAtual ) {
    
    const comp = anoAtual - anoNasc
    const maiorMenor = comp >= 18

    console.log(nome)
    console.log(anoNasc)
    console.log(anoAtual)
    console.log(comp)

    return `${nome} é maior de idade? ${maiorMenor}”`
}
let nomeDaPessoa = prompt(`Qual seu nome ?`)
let anoNasc = prompt(`Qual o ano de nascimento ?`)
let anoAtual = prompt(`Qual o ano atual ?`)

console.log(maioridade (nomeDaPessoa, anoNasc, anoAtual))