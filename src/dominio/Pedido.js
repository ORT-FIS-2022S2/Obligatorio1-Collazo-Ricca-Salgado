export class Pedido {

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

  validDate() { 
    let fecha = this.getFecha();
    if (fecha.length != 10) {
      return false;
    }
    let dia = fecha.substring(0,2);
    let mes = fecha.substring(3,5);
    if (dia > 31 || dia < 1) {
      return false;
    }
    if (mes > 12 || mes < 1) {
      return false;
    }
    return true;
  }

  isValid() {
    if (this.getDia() == null || this.getDia() == "") {
      throw new Error("El dia no puede estar vacio");
    }
    if (this.getDetalle() == null || this.getDetalle() == "") {
      throw new Error("El detalle no puede estar vacio");
    }
    if (this.getFecha() == null || this.getFecha() == "" || !this.validDate()) {
      throw new Error("La fecha no puede estar vacia o ser invalida");
    }
    if (this.getComensal() == null || this.getComensal() == "") {
      throw new Error("El comensal no puede estar vacio");
    }
    return true;
  }
}