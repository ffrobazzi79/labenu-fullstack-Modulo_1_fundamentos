const media = prompt("digite um número de 0 a 10")

if (media == Number(media)){
    if (media >= 5 && 10 >= media) {
        console.log("foi aprovada");
    }else if (media >= 3 && 5 > media){
        console.log("recuperação");
    } else if(media < 3 && media >= 0) {
        console.log("reprovada");
    } else {
        console.log("dado inválido");
    }
}else {
    console.log("dado inválido");
}