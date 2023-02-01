const filmes = [
    {
      titulo: 'O Auto da Compadecida',
      ano: 2000,
      diretor: 'Guel Arraes',
      elenco: [
        'Selton Mello',
        'Mateus Nachtergaele',
        'Marco Nanini',
        'Fernanda Montenegro',
      ],
    },
    {
      titulo: 'Carandiru',
      ano: 2001,
      diretor: 'Hector Babenco',
      elenco: [
        'Wagner Moura',
        'José Carlos Vasconcelos',
        'Ailton Graça',
        'Caio Blat',
      ],
    },
    {
      titulo: 'Aquarius',
      ano: 2012,
      diretor: 'Kléber Mendonça Filho',
      elenco: [
        'Sônia Braga',
        'Humberto Carrão',
        'Maeve Jinkings',
        'Bárbara Colen',
      ],
    },
  ]
  
  // escreva seu código abaixo 👇🏻

  /*
Use o array de filmes que esta no template

Crie um laço for para exibir o título, o ano e o diretor dos filmes como uma String
Crie um laço for dentro do primeiro, para concatenar o elenco numa String
A saída deve se parecer com:

“O Homem que copiava, de 2003, dirigido por Jorge Furtado”
“Ator 1: Lázaro Ramos"
"Ator 2: Leandra Leal"
"Ator 3: Pedro Cardoso”
*/

for (let i = 0; i < filmes.length; i++) {
    console.log("Título:",filmes[i].titulo);
    console.log("Ano:",filmes[i].ano);
    console.log("Dirigido por:",filmes[i].diretor);
    console.log("Elenco:");

    for (let j = 0; j < filmes[i].elenco.length; j++) {
        console.log(" ",filmes[i].elenco[j]);
        
    }
    console.log(`\n`);
}