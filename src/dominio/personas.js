export class Persona {

    #usuario;
    #contrasena;
  
    constructor(unUsuario,unaContra){
        this.setUsuario(unUsuario);
        this.setContrasena(unaContra);
      }
  
    getUsuario() {
      return this.#usuario;
    }
  
    setUsuario(unUsuario) {
      this.#usuario = unUsuario;
    }
  
    getContrasena() {
      return this.#contrasena;
    }
  
    setContrasena(unaContra) {
      this.#contrasena = unaContra;
    }

    toString() {
        return `${this.getUsuario()} ${this.getContrasena()}`;
    }

    isValid() {
        if (this.getUsuario() == "") {
            throw "El usuario no puede estar vacio";
        }
        if (this.getContrasena() == "") {
            throw "El campo contrasena no puede estar vacio";
        }
        return true;
    }

}