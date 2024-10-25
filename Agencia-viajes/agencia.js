function guardarEntrada(){
    
    let nombre = document.getElementById("nombre").value
    let origen = document.getElementById("origen").value
    let destino = document.getElementById("destino").value
    let numPersonas = document.getElementById ("numPersonas").value
    let fecha = document.getElementById ("fecha").value

   let entrada {
        nombre: nombre,
        origen: origen,
        destino: destino,
        personas: numPersonas,
        fecha: fecha,
    }

    return entrada;
}

