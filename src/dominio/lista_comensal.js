export class ListaComensal {
  #Listacomensal;

  constructor() {
    this.#Listacomensal = [];
  }

  addComensal(unComensal) {
    this.#Listacomensal.push(unComensal);
  }

  getListaComensal() {
    return this.#Listacomensal;
  }
}
