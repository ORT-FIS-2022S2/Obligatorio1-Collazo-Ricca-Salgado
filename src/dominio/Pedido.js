export class Comensal {

    #dia;
    #detalleMenu;
    #fecha;
    #comensal;

    constructor(unDia,unDetalle,unaFecha,unComensal){
        this.setDia(unDia);
        this.setDetalle(unDetalle);
        this.setFecha(unaFecha);
        this.setComensal(unComensal);
    }

    // constructor() {}

    getDia() {
        return this.#dia;
    }

    setDia(unDia) {
        this.#dia = unDia;
    }

    getDetalle() {
        return this.#detalleMenu;
    }

    setDetalle(unDetalle) {
        this.#detalleMenu = unDetalle;
    }

    getFecha() {
        return this.#fecha;
    }

    setFecha(unaFecha) {
        this.#fecha = unaFecha;
    }

    getComensal() {
        return this.#comensal;
    }

    setComensal(unComensal) {
        this.#comensal = unComensal;
    }

    toString() {
        return `${this.getDetalle()}`;
    }
}