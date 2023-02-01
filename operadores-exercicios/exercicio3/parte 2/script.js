// # Exercício 3



// ### Parte 2
// colocando os dados do exercício

let nomeComp = "Fulano de Silva";
let dataNasc = "10/02/1990";
let endComp = "Rua dos bobos nº 0";
let cpf = "000.000.000-00";
let escolar = "Mestrado em fritar coxinhas";
let cnh = true;
let filhos = Number(2);
let cargoAtual = "vendedor";
let salario = Number(2000);
let comissao = Number(0.1);
let anoAdmiss = Number(2019);

// 1) O salário fixo mais o auxílio creche
let auxCreche = 45.50 * filhos
salario = salario + auxCreche
console.log(`O salário fixo mais o auxílio creche: R$ ${salario}`)

let janeiro = Number(5784.50);
let fevereiro = Number(3418.41);
let marco = Number(4124.10);
let abril = Number(1874.00);
let maio = Number(7000.00);
let junho = Number(9450.00);


let valParaComissJan = janeiro * comissao
console.log(`Fulano de Silva receberá de comissão em janeiro R$ ${valParaComissJan} de comissão.`)

let janeiroInss = (janeiro + valParaComissJan) * 0.05
console.log(`Fulano de Silva será descontado em janeiro pelo INSS em R$ ${janeiroInss}.`)

let calcTodos = ((salario * 6) + (janeiro+fevereiro+marco+abril+maio+junho) * comissao) - (((salario * 6) + (janeiro+fevereiro+marco+abril+maio+junho)) * 0.05)
console.log(`cálculo do salário de todos os meses com acréscimos e descontos: R$ ${calcTodos}.`)

let mediaSal = ((salario * 6) + ((janeiro+fevereiro+marco+abril+maio+junho) * comissao))/6
console.log(`A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio: R$ ${mediaSal}.`)

/*


2) Quanto Fulano de Silva receberá de comissão em janeiro ( dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)

3) Quanto Fulano de Silva será descontado em janeiro pelo INSS ( o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.)

4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
  ( Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos  somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)
  */


