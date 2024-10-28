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

    function añadirSeccion (){

        // nueva seccion, elemento y texto 
        let nuevaSeccion = document.getElementById("seccionFiltrada")
        let nuevoElemento = document.createElement("p");
        let texto = "";

        // para borrar los resultados de filtrar anteriores 
        arrayEntradasFiltradas =[];

        // para añadir objetos al array que cumplan con las condiciones
            for (let i=0; i<arrayEntradas.length; i++){
            
                if((arrayEntradas[i].destino.toLowerCase() == "canarias")||(arrayEntradas[i].destino.toLowerCase() == "mallorca") ||(arrayEntradas[i].destino.toLowerCase() == "galicia")){
                arrayEntradasFiltradas.push(arrayEntradas[i]);
                }
            }
        
        // convertir a texto el array
            for (let i=0; i<arrayEntradasFiltradas.length; i++){
                texto = texto + `<strong> Nombre:</strong>${arrayEntradasFiltradas[i].nombre}, <strong> Destino:</strong> ${arrayEntradasFiltradas[i].destino}, <strong> Origen:</strong> ${arrayEntradasFiltradas[i].origen}, <strong> Número de personas:</strong>${arrayEntradasFiltradas[i].personas}, <strong> Fecha:</strong>${arrayEntradasFiltradas[i].fecha}<br>`;
            }
        
        // cambiar el contenido del nuevo elemento
        nuevoElemento.innerHTML = texto; 

        // añadir el nuevo elemento a la página
        nuevaSeccion.appendChild(nuevoElemento);
        }
        