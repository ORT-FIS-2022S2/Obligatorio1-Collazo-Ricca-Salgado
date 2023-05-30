export class ListaPedido {

    #pedido;

    constructor() {
        this.#pedido = [];
    }

    add(pedido) {
        this.#pedido.push(pedido);
    }

    getListaPedido() {
        return this.#pedido;
    }
}