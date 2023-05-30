export class ListaPedido {

    #pedido;

    constructor() {
        this.#pedido = [];
    }

    add(unPedido) {
        this.#pedido.push(unPedido);
    }
    
    getListaPedido() {
        return this.#pedido;
    }
}