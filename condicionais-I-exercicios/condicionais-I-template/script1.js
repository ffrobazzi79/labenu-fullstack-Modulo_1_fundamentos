// PRATICA GUIADA 3

const idade = 15;

// if (idade >= 18) {
//     alert("Título obrigatório")    
// } else if(idade < 18) {
//     alert("Título não obrigatório")
// } else if(idade > 60) {
//     alert("facultativo")
// }else if(idade >= 16) {
//     alert("facultativo")
// }else {
//     alert("valor errado")
// }

if (idade >= 16 && idade <18) {
    alert("facultativo")
} else if (idade >= 60) {
    alert("facultativo")
} else if (idade >= 18) {
    alert("obrigatório")
} else if(idade < 16) {
    alert("não pode votar")
} else {
    alert("valor inválido")
}

