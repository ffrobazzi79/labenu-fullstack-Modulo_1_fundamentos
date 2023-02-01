const passwordInput = document.getElementById("password");
const escondeSenha = (event) => {
    event.preventDefault()
    passwordInput.setAttribute("type", "password")
};

const formulario = document.getElementById("formulario")

formulario.classList.remove("ligth")
formulario.classList.add("dark")
console.log(formulario)

// const toggle = document.getElementById("password");
//     if (toggle.type === "password") {
//         toggle.type = "text"
//     } else {
//         toggle.type = "password"
//     }