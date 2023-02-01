let perguntarMais = prompt(`Deseja comer uma coxinha ? (s / n)`)
let conta = 0

let entrarWhile = 1 // é só para entrar no loop


while (perguntarMais !== "n" || entrarWhile === 1) {

    if (perguntarMais === "s") {
        conta += 2.5    
        perguntarMais = prompt(`Deseja comer mais uma  coxinha ? (s / n)`)
    }

    if (perguntarMais === "n" && perguntarMais !== "s") {
        alert(`O total da conta é de R$ ${conta.toFixed(2)}`);
    } else if (perguntarMais != "s") {
        perguntarMais = prompt(`Desculpe, não entendi...\nDeseja comer mais uma  coxinha ? (s / n)`)
        if (perguntarMais === "n" && perguntarMais !== "s") {
            alert(`O total da conta é de R$ ${conta.toFixed(2)}`);
        }
    } // else if
    entrarWhile = 0 // cancelado para sair do loop
    
} // while


