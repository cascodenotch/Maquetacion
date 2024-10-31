let arrayProductos = [];

// AÑADIR A CARRITO 

function añadir1(){

    let nombre = document.getElementById("nombre1").innerText;
    let precio = document.getElementById("precio1").innerText;

    let producto = {
        nombre: nombre,
        precio: precio,
    }

    arrayProductos.push(producto);
}

function añadir2(){

    let nombre = document.getElementById("nombre2").innerText;
    let precio = document.getElementById("precio2").innerText;

    let producto = {
        nombre: nombre,
        precio: precio,
    }

    arrayProductos.push(producto);
}

function añadir3(){

    let nombre = document.getElementById("nombre3").innerText;
    let precio = document.getElementById("precio3").innerText;

    let producto = {
        nombre: nombre,
        precio: precio,
    }

    arrayProductos.push(producto);
}

function añadir4(){

    let nombre = document.getElementById("nombre4").innerText;
    let precio = document.getElementById("precio4").innerText;

    let producto = {
        nombre: nombre,
        precio: precio,
    }

    arrayProductos.push(producto);
}


function añadir5(){

    let nombre = document.getElementById("nombre5").innerText;
    let precio = document.getElementById("precio5").innerText;

    let producto = {
        nombre: nombre,
        precio: precio,
    }

    arrayProductos.push(producto);
}

function añadir6(){

    let nombre = document.getElementById("nombre6").innerText;
    let precio = document.getElementById("precio6").innerText;

    let producto = {
        nombre: nombre,
        precio: precio,
    }

    arrayProductos.push(producto);
}

function añadir7(){

    let nombre = document.getElementById("nombre7").innerText;
    let precio = document.getElementById("precio7").innerText;

    let producto = {
        nombre: nombre,
        precio: precio,
    }

    arrayProductos.push(producto);
}

function añadir8(){

    let nombre = document.getElementById("nombre8").innerText;
    let precio = document.getElementById("precio8").innerText;

    let producto = {
        nombre: nombre,
        precio: precio,
    }

    arrayProductos.push(producto);
}

// MOSTRAR CARRITO 

function mostrar(){

    let listado = "";
    let total = 0;
    let totalString = "";


    // Suma de los precios de los elementos en el carrito 

    arrayProductos.forEach(producto=>{
        total += Number(producto.precio)}
    )

    totalString =`TOTAL: ${total}€`;

    // Devolver el nombre y precio de los elementos en el carrito 

    arrayProductos.forEach(producto =>{
       listado += `PRENDA: ${producto.nombre}, ${producto.precio}€<br>`} 
    )

    // Añadir al HTML

    document.getElementById("resultado-prendas").innerHTML = listado;
    document.getElementById("total").innerHTML= totalString;

}


// MODAL 

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
