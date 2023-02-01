const paragrafo = document.getElementById("mensagem")
const checaCaps = (event) => {
    if(event.shiftKey) {
        paragrafo.innerHTML = "Atenção : segurando SHIFT"
    } else {
        paragrafo.innerHTML = ""
    }
}