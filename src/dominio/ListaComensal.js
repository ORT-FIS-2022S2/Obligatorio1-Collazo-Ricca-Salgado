export class Listacomensal {

    #comensal;

    constructor() {
        this.#comensal = [];
    }

    add(comensal) {
        this.#comensal.push(comensal);
    }

    getListaComensal() {
        return this.#comensal;
    }
}