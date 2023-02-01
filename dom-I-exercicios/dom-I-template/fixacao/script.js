const textoP = document.getElementById("paragrafo")
console.log(textoP.innerHTML)

const imprimirValor = () => {
    console.log(document.getElementById("texto").value)
}


const mudarValor = () => {
    textoP.innerHTML = document.getElementById("texto").value
}