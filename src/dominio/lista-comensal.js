export class ListaComensal {

  #Listacomensal;

  constructor() {
    this.#Listacomensal = [];
  }

  addComensal(unComensal) {
    let comensalEnLista = this.#Listacomensal.some(m => m.getNombre() == unComensal.getNombre() && m.getApellido() == unComensal.getApellido());
    if (!comensalEnLista && unComensal.isValid()){
      this.#Listacomensal.push(unComensal);
    } else {
      throw new Error(`No se pudo agregar. ${unComensal.getNombre()} ${unComensal.getApellido()} ya está en la lista.`);
    }
  }

  getListaComensal() {
    return this.#Listacomensal;
  }

}