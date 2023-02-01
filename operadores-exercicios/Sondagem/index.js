let saldo;
saldo = 15 + 22.40;
console.log(`Eu tenho R$ ${saldo.toFixed(2)}.`);
saldo = saldo - 12.34;
console.log(`O saldo depois do gasto é de R$ ${saldo.toFixed(2)}.`);
saldo = saldo / 2;
console.log(`O dinheiro foi dividido entre dois irmãos e cada um recebeu R$ ${saldo.toFixed(2)}`);
saldo = saldo + (saldo * 3.42);
console.log(`Dinheiro depois da aplicação: R$ ${saldo.toFixed(2)}`);
saldo = saldo % 3
console.log(`Reparti o dinheiro em 3 contas e com R$ ${saldo.toFixed(2)}, eu comprei um chicletinho.`)