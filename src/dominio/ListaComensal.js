export class ListaComensal {

    #comensal;

    constructor() {
        this.#comensal = [];
    }

    addComensal(unComensal) {
        this.#comensal.push(unComensal);
    }

    getListaComensal() {
        return this.#comensal;
    }
}