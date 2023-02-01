/*
1. Utilizando o laço while, escreva um código que recebe um prompt esperando seu tipo de usuário. O tipo de usuário é representado pelas letras abaixo:
“A”: Administrador;
“B”: Usuário comum;
“C”: Usuário assinante

Enquanto o valor passado for diferente da letra que representa “Administrador”, o laço deve se repetir, exibindo a mensagem: “Acesso negado.”
Quando o valor for igual ao da letra que representa “Administrador”, o laço deve parar, e a mensagem “Boas-vindas, admin!” deve ser impressa.
*/

let tipoUsuario = prompt(`Digite:\n“A”: Administrador\n“B”: Usuário comum\n“C”: Usuário assinante`).toLocaleUpperCase()

while (tipoUsuario != "A") {
    alert(`acesso negado`);
    tipoUsuario = prompt(`Digite:\n“A”: Administrador\n“B”: Usuário comum\n“C”: Usuário assinante`).toLocaleUpperCase()
}

alert(`Bem Vindo ADM!`);