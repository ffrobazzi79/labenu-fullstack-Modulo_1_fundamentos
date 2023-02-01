// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort((a,b)=> a-b)
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    array = array.filter((x)=> x%2 === 0)
    return array
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let x = array.filter((x)=> x%2 === 0)
    for (let i = 0; i < x.length; i++) {
        x[i]= x[i]**2;
    }
    return x
}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let x = array.sort((a,b)=> a-b)
    let y = array.pop()
    return y
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let array1 = [num2,num1]
    let ar = array1.sort((a,b)=> a-b)
    let y = ar.pop()
    let z = ar[0];
    let b = y%z === 0
    let a = y - z
    let ob1 = {maiorNumero: y, maiorDivisivelPorMenor: b,diferenca: a}
    return ob1
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const resultado = []
    for (let i = 0; resultado.length < n; i+=2) {
        resultado.push(i)
    }
    return resultado
}
console.log(retornaNPrimeirosPares(2));
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero";
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC){
        return "Escaleno";
    }else
        return "Isósceles";

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let x = array.sort((a,b)=> a-b)
    let y = x[x.length - 2];
    let z = x[1];
    return [y, z]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

    return "Venha assistir ao filme " + filme.nome + ", de " + filme.ano + ", dirigido por " + filme.diretor + " e estrelado por " + filme.atores.join(", ") + "."
}

// EXERCÍCIO 11
// function retornaChamadaDeFilme(filme) {
//     let ator = `${filme.atores}`.replaceAll(",", ", ")
//     // ator = ator.replaceAll(",", ", ");
//     return "Venha assistir ao filme " + filme.nome + ", de " + filme.ano + ", dirigido por " + filme.diretor + " e estrelado por " + ator + "."
// }

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const p2 = {...pessoa, nome:"ANÔNIMO"}
    return p2
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const x = pessoas.filter(pessoas => pessoas.altura > 1.5 && pessoas.idade > 14 && pessoas.idade < 60);
    console.log(x);
    return x
    
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const x = pessoas.filter(pessoas => pessoas.altura <= 1.5 || pessoas.idade <= 14 || pessoas.idade >= 60);
    return x
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    console.log(contas);
    console.log(contas.compras);
    contas = {...contas, compras:""}
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}