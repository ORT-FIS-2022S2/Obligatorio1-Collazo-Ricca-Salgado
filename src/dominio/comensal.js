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
    // constructor() {
    //     this.setNombre("");
    //     this.setApellido("");
    //     this.setEdad(0);
    //     this.setColegio("");
    //     this.setDieta("");
    // }

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
}