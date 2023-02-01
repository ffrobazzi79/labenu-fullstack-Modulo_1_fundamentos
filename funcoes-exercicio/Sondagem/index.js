function pratica1Normal(nome1){
    console.log(`Olá ${nome1}!`)
}

const pratica1Arrow = (nome1)=>{
    console.log(`Olá ${nome1}!`)
}

pratica1Normal ("João");
pratica1Arrow ("Bananinha");
pratica1Normal ("Fulana");

const pratica1ComReturn = (nome) => {
    return `Olá ${nome}!`
}

console.log(pratica1ComReturn("teste"))