const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}
// console.log(Object.keys(objeto).length);
// console.log(typeof(objeto));
// console.log(objeto.nome, typeof(objeto.nome));
console.log("Print objeto\n",objeto)

function upperC (ob) {
    for (let key in ob) {
        ob[key] = ob[key].toUpperCase();
    }
    return ob
}
console.log("Print upperC(objeto)\n",upperC(objeto))
console.log("Print objeto\n",objeto)

// for (const key in ob) {
//     elemento = ob[key];
//     elemento = elemento.toUpperCase()
//     let x = {}
//     console.log(elemento);
// }

// function textoCorrido(obj)
// {
//     let texto = ""
//     for (let item in obj){
//         texto = texto + `${obj[item]}, `
//     }        
//     return texto.slice(0, texto.length -2)     
// }