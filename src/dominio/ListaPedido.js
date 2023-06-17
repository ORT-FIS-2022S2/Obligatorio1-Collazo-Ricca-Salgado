export class ListaPedido {

    #pedido;

    constructor() {
        this.#pedido = [];
    }

    addPedido(unPedido) {
        this.#pedido.push(unPedido);
    }
    
    getListaPedido() {
        return this.#pedido;
    }
}