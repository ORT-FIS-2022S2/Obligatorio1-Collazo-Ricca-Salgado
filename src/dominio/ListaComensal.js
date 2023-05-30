export class ListaComensal {

    #comensal;

    constructor() {
        this.#comensal = [];
    }

    add(unComensal) {
        this.#comensal.push(unComensal);
    }

    getListaComensal() {
        return this.#comensal;
    }
}