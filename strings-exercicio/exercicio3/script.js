const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
console.log(frase);
console.log(frase.replace("verde","rosa").replace("azul","laranja"));
console.log(frase.length);


console.log(`${frase.substring(0,59)}${frase.substring(59,100).toLocaleUpperCase()}`);

console.log(frase.replace("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR"));

const nome = [23, "eu", true]
console.log(nome[0],nome[1],nome[2])