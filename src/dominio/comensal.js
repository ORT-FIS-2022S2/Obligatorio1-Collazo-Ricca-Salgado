export class Comensal {

  #nombre;
  #apellido;
  #edad;
  #colegio;
  #dieta;

  constructor(unNombre,unApellido,unaEdad,unColegio,unaDieta){
      this.setNombre(unNombre);
      this.setApellido(unApellido);
      this.setEdad(unaEdad);
      this.setColegio(unColegio);
      this.setDieta(unaDieta);
    }

  getNombre() {
    return this.#nombre;
  }

  setNombre(unNombre) {
    this.#nombre = unNombre;
  }

  getApellido() {
    return this.#apellido;
  }

  setApellido(unApellido) {
    this.#apellido = unApellido;
  }

  getEdad() {
    return this.#edad;
  }

  setEdad(unaEdad) {
  	this.#edad = unaEdad;
  }

  getColegio() {
      return this.#colegio;
    }

  setColegio(unColegio) {
    this.#colegio = unColegio;
  }

  getDieta() {
    return this.#dieta;
  }

  setDieta(unaDieta) {
    this.#dieta = unaDieta;
  }

  toString() {
    return `${this.getNombre()} ${this.getApellido()}`;
  }

  equals(unComensal) {
    return this.getNombre() === unComensal.getNombre() &&
        this.getApellido() === unComensal.getApellido();
  }

  isValid() {
    if (this.getNombre() === "") {
	    throw new Error("El nombre no puede estar vacio");
    }
    if (this.getApellido() === "") {
      throw new Error("El apellido no puede estar vacio");
    }
    if (this.getColegio() === "") {
      throw new Error("El colegio no puede estar vacio");
    }
    if (this.getDieta() === "") {
      throw new Error("La dieta no puede estar vacia");
    }
    return true;
  }

      
}