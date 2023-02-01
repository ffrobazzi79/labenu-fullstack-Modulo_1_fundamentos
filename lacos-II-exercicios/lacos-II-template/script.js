const bimestre1 = [10, 10, 10, 10]
const bimestre2 = [2, 3, 8, 2]
const bimestre3 = [10, 10, 7, 9]
const bimestre4 = [5, 5, 5, 5]

const notasDoAno = [bimestre1,bimestre2,bimestre3,bimestre4]

for (let i = 0; i < notasDoAno.length; i++) {
    let somaDasNotas = 0
    let mediaDoBimestre = 0

    for (let j = 0; j < notasDoAno[i].length; j++) {
        somaDasNotas += notasDoAno[i][j]
    }
    console.log(`\n`);
    console.log(`A soma das notas do bimestre ${i+1} é: ${somaDasNotas}`);

    mediaDoBimestre = somaDasNotas/notasDoAno[i].length

    console.log(`A media do bimestre ${i+1} é : ${mediaDoBimestre} `);

}