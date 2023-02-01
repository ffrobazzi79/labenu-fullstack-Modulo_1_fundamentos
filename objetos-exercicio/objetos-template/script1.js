// Exercício de fixação

const carrinho = {
    nome:"Aloisio",
    formaPag:"cartão",
    endereco:"R Eloa, 32",
    compras:[item1 = {nomeItem:"Faca",precoItem: 30}, item2 = {nomeItem:"Panela",precoItem: 50}]
};
/*
Imprima a quantidade de compras que existem no carrinho;
Crie uma cópia do objeto, chamada “carrinhoPresente”, que seja igual ao carrinho original, mas com o nome da pessoa alterado para o nome de uma pessoa que você gosta, e a forma de pagamento alterada para cartão presente
*/
console.log(`quantidade de itens : ${carrinho.compras.length}`);

const carrinhoPresente = {...carrinho, nome:"eu mesmo", formaPag:"cartão presente"}

