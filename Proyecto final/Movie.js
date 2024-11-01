class Movie {

    constructor (title, releaseYear, genre, nationality, language, plataforma, isMcu, producer, distributor, mainCharacterName, photo){
    this.title = title;
    this.releaseYear = releaseYear;
    this.genre = genre; 
    this.nationality = nationality; 
    this.language = language;
    this.actors = [];
    this.director = "";
    this.writer = "";
    this.plataforma = plataforma;
    this.isMCU = isMcu;
    this.producer = producer;
    this.distributor = distributor;
    this.mainCharacterName = mainCharacterName;
    this.photo = photo;
    }   

    mostrarDatos (){

        let datos = "Título: " + this.title + "<br>" +
        "Año: " + this.releaseYear + "<br>" +
        "Genero: " + this.genre + "<br>" +
        "Nacionalidad: " + this.nationality + "<br>" +
        "Idioma: " + this.language + "<br>" +
        "Actores: " + this.actors + "<br>" +
        "Director: " + this.director + "<br>" +
        "Escritor: " + this.writer + "<br>" +
        "Plataforma: " + this.plataforma + "<br>" +
        "MCU: " + this.isMCU + "<br>" +
        "Productor: " + this.producer + "<br>" +
        "Distribuidor: " + this.distributor + "<br>" +
        "Personaje principal: " + this.mainCharacterName
       
        return datos; 
    }

    mostrarImagen (){

        let imagen = this.imagen;
        return imagen; 
    }
}

function añadir (){

    // obtener los inputs del formulario 
    let titulo = document.getElementById("titulo").value;
    let año = document.getElementById("año").value;
    let genero = document.getElementById("genero").value;
    let nacionalidad = document.getElementById("nacionalidad").value;
    let idioma = document.getElementById("idioma").value;
    let plataforma = document.getElementById("plataforma").value;
    let mcu = document.getElementById("isMCU").value;
    let productor = document.getElementById("productor").value;
    let distribuidor = document.getElementById("distribuidor").value;
    let personaje = document.getElementById("personaje").value
    let foto = document.getElementById("foto").value

    // crear un nuevo objeto 
    let nuevaPeli = new Movie (titulo, año, genero, nacionalidad, idioma,plataforma, mcu, productor, distribuidor, personaje, foto);
    
    // crear caja vertical 
    let nuevaCaja = document.createElement("div");
    nuevaCaja.classList.add("caja-vertical");

    // crear caja imagen
    let cajaImagen = document.createElement("div");
    cajaImagen.classList.add("caja-imagen");
    nuevaCaja.appendChild(cajaImagen);
    cajaImagen.innerHTML = nuevaPeli.mostrarImagen();

    // crear caja atributos
    let cajaAtributos = document.createElement ("div");
    cajaAtributos.classList.add("caja-atributos")
    nuevaCaja.appendChild(cajaAtributos)
    cajaAtributos.innerHTML = nuevaPeli.mostrarDatos();

    // añadir las nuevas cajas
    document.querySelector(".caja-principal").appendChild(nuevaCaja);
  
}

