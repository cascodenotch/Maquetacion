class Professional {

    constructor (name, age, weight, height, isRetired, nationality, oscarsNumber, profession, photo){
    this.name = name; 
    this.age = age; 
    this.weight = weight; 
    this.height = height; 
    this.isRetired = isRetired;
    this.nationality = nationality; 
    this.oscarsNumber =oscarsNumber;
    this.profession = profession;
    this.photo = photo; 
    }
    
    mostrarAtributo() {
    let atributos = 
    "Nombre: " + this.name + 
    " Edad: " + this.age + 
    " Peso: "+this.weight + 
    " Altura: "+this.height + 
    " Retirado: "+this.isRetired + 
    " Nacionalidad: "+this.nationality + 
    " Num de Oscars: "+this.oscarsNumber + 
    " Profesion: "+this.profession +
    " Foto: " + this.photo;

    return atributos;
    
    }
    
}