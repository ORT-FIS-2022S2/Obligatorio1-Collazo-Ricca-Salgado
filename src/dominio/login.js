export class Login {

    #usuario;
    #password;
  
    constructor(unUsuario,unaPassword){
        this.setUsuario(unUsuario);
        this.setPassword(unaPassword);
    }
  
    getUsuario() {
      return this.#usuario;
    }
  
    setUsuario(unUsuario) {
      this.#usuario = unUsuario;
    }

    getPassword() {
        return this.#password;
    }
    
    setPassword(unPassword) {
        this.#password = unPassword;
    }
  
    toString() {
      return `${this.getUsuario()}`;
    }
  
    equals(unLogin) {
      return this.getUsuario() === unLogin.getUsuario() && this.getPassword() === unLogin.getPassword();
    }
  
    isValid() {
      if (this.getUsuario() === "") {
          throw new Error("El usuario no puede estar vacio");
      }
      if (this.getPassword() === "") {
        throw new Error("La contrasenia no puede estar vacia");
    }
      return true;
    }        
  }