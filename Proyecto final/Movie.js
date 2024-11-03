class Movie {

    constructor (title, releaseYear, genre, nationality, language, plataforma, producer, distributor, mainCharacterName, isMcu, photo){
    this.title = title;
    this.releaseYear = releaseYear;
    this.genre = genre; 
    this.nationality = nationality; 
    this.language = language;
    this.actors = [];
    this.director = "";
    this.writer = "";
    this.plataforma = plataforma;
    this.producer = producer;
    this.distributor = distributor;
    this.mainCharacterName = mainCharacterName;
    this.isMCU = isMcu;
    this.photo = photo;
    }   

    mostrarDatos (){

        let datos = "<h4 class=espacio10>Título: " + this.title + "</h4>" +
                 "<p>Año: " + this.releaseYear + "</p>" +
                 "<p>Género: " + this.genre + "</p>" +
                 "<p>Nacionalidad: " + this.nationality + "</p>" +
                 "<p>Idioma: " + this.language + "</p>" +
                 "<p>Actores: " + this.actors + "</p>" + 
                 "<p>Director: " + this.director + "</p>" +
                 "<p>Escritor: " + this.writer + "</p>" +
                 "<p>Plataforma: " + this.plataforma + "</p>" +
                 "<p>Productor: " + this.producer + "</p>" +
                 "<p>Distribuidor: " + this.distributor + "</p>" +
                 "<p>Personaje principal: " + this.mainCharacterName + "</p>" +
                 "<p>MCU: " + (this.isMCU ? "Sí" : "No") + "</p>";
       
        return datos; 
    }

    mostrarImagen (){

    let photoUrl = URL.createObjectURL(this.photo);
    return `<img src="${photoUrl}"/>`;

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
    let productor = document.getElementById("productor").value;
    let distribuidor = document.getElementById("distribuidor").value;
    let personaje = document.getElementById("personaje").value
    let mcu = document.getElementById("isMCU").checked;
    let foto = document.getElementById("foto").files[0];

    // crear un nuevo objeto con los inputs
    let nuevaPeli = new Movie (titulo, año, genero, nacionalidad, idioma,plataforma, productor, distribuidor, personaje, mcu,foto);
    
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
    let cajaPrincipal = document.getElementById("principal")
    cajaPrincipal.appendChild(nuevaCaja);
  
}

