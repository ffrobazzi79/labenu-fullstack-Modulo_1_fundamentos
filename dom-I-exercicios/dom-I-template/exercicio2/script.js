const nome = document.getElementById("nome")
console.log(nome.value)
// nome.value = ""

const endereco = document.getElementById("endereco")
console.log(endereco.value)
// endereco.value = ""

const email = document.getElementById("email")
console.log(email.value)
// email.value = ""

const cadastro = {nome: nome.value, endereco: endereco.value, email: email.value}
console.log(cadastro)

const limpaInputs = () => {
    nome.value = "";
    endereco.value = "";
    email.value = "";
}

