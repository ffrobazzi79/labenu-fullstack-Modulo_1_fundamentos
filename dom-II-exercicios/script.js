function novoElemento () {
    let novaTag = document.createElement("article");
    novaTag.classList.add("item")

    novaTag.setAttribute("onclick", "removeItem(event)") 
    console.log(novaTag)

    let textoTag = document.createTextNode(`Nova caixa`);
    novaTag.appendChild(textoTag);
    container.appendChild(novaTag)
}

const removeItem = (event) => {
    event.target.remove()
}