const nacionalidade1 = prompt("Escreva aqui sua nacionalidade : ").toLocaleLowerCase();


if (nacionalidade1 == "brasileira") {
    console.log(`brasileira`);
} else {
    if (nacionalidade1 == "argentina") {
        console.log(`argentina`);
    } else {
        if (nacionalidade1 == "uruguaia") {
            console.log(`uruguaia`);
        } else {
            if (nacionalidade1 == "chilena") {
                console.log(`chilena`);
            } else {
                if (nacionalidade1 == "colombiana") {
                    console.log(`colombiana`);
                } else {
                    console.log(`nacionalidade não encontrada`);
                    console.log(`dado colocado : ${nacionalidade1}`);
                }
            }
        }
    }
}