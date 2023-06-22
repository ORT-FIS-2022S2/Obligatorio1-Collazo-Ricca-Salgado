export class Usuario {

    #username
    #password

    constructor(unUsername,unPassword){
        this.setUsername(unUsername)
        this.setPassword(unPassword)
    }

    getUsername(){
        return this.#username
    }

    setUsername(unUsername){
        this.#username = unUsername
    }

    getPassword(){
        return this.#password
    }

    setPassword(unPassword){
        this.#password = unPassword
    }

    ValidUser(){
        let username = this.getUsername()
        let password = this.getPassword()
        if (username == "" || password == ""){
            throw new Error("El usuario y/o la contraseña no pueden estar vacios")
        }
        return true
    }

    ValidPassword(){ //more than 8 caracters
        let password = this.getPassword()
        if (password.length < 8 && password != ""){
            throw new Error("La contraseña debe tener al menos 8 caracteres")
        }
        return true
    }
}
