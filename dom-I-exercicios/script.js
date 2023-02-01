const frutas = ["laranja", "limão", "uva"];

// for(let i-1; i<4;i++){
//     let j = i-1
//     const fruta = "fruta-"+1
//     document.getElementById(`${fruta}`).innerHTML = frutas[arrayFrutas]
// }

document.getElementById("fruta-1").innerHTML = frutas[0]
document.getElementById("fruta-2").innerHTML = frutas[1]
document.getElementById("fruta-3").innerHTML = frutas[2]

function adicionarFruta () {
    
    if (frutas.includes(document.getElementById("fruta-4").innerHTML = document.getElementById("fruta").value)) {
        document.getElementById("resp").innerHTML = 'esta fruta já está listada.';
      } else {
    frutas.push(document.getElementById("fruta").value)
    document.getElementById("fruta-4").innerHTML = document.getElementById("fruta").value
    document.getElementById("resp").innerHTML = 'nova fruta adicionada.';
    }
}