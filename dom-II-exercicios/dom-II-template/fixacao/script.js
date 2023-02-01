const insereItem = (event) => {
    event.preventDefault()

    const ultimoItem = document.createElement('li')
    const texto = document.createTextNode(document.getElementById("meu-input").value)
    ultimoItem.appendChild(texto)

    document.getElementById("meu-input").value = "";
    lista.appendChild(ultimoItem)
}

