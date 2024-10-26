let arrayEntradas = [];
let arrayEntradasFiltradas=[];

function guardarEntrada(){
    
    // recopilar los valores del formulario

    let nombre = document.getElementById("nombre").value
    let origen = document.getElementById("origen").value
    let destino = document.getElementById("destino").value
    let numPersonas = document.getElementById ("numPersonas").value
    let fecha = document.getElementById ("fecha").value

    // crear un objeto con los valores del formulario

    let entrada = {nombre: nombre,
        origen: origen,
        destino: destino,
        personas: numPersonas,
        fecha: fecha,
    }
    
    // agregar los objetos al array 
    
    arrayEntradas.push(entrada);
    console.log(arrayEntradas);
    return arrayEntradas;

}   

// function mostrarEntradas (){

//     for (let i=0; i<arrayEntradas.length; i++){
    
//         if(arrayEntradas[i].destino == "Canarias"){
//          arrayEntradasFiltradas.push(arrayEntradas[i]);
//          console.log(arrayEntradasFiltradas);
//         }
//     }
// }

function añadirSeccion (){

let nuevaSeccion = document.getElementById("seccionFiltrada")
let nuevoElemento = document.createElement("p");

    for (let i=0; i<arrayEntradas.length; i++){
    
        if((arrayEntradas[i].destino.toLowerCase() == "canarias")||(arrayEntradas[i].destino.toLowerCase() == "mallorca") ||(arrayEntradas[i].destino.toLowerCase() == "galicia")){
        arrayEntradasFiltradas.push(arrayEntradas[i]);
        }
    }

nuevoElemento.textContent = JSON.stringify(arrayEntradasFiltradas);
nuevaSeccion.appendChild(nuevoElemento);
}