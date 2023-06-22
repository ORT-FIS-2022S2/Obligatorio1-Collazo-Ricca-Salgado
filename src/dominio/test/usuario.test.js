import { Usuario } from "../usuario";
import { test, expect, describe } from 'jest';


describe("Usuario", () => {

    test ("crear un usuario username", () => {
        let usuario = new Usuario("username", "password");
        expect(usuario.getUsername()).toBe("username");
    });

    test ("crear un usuario password", () => {
        let usuario = new Usuario("username", "password");
        expect(usuario.getPassword()).toBe("password");
    });

    test ("crear un usuario username vacio", () => {
        let usuario = new Usuario("", "password");
        const error = "El usuario y/o la contraseña no pueden estar vacios";
        expect(() => usuario.ValidUser()).toThrow(error);
    });

    test ("crear un usuario password vacio", () => {
        let usuario = new Usuario("username", "");
        const error = "El usuario y/o la contraseña no pueden estar vacios";
        expect(() => usuario.ValidUser()).toThrow(error);
    });

    test ("crear un usuario password menor a 8 caracteres", () => {
        let usuario = new Usuario("username", "pass");
        const error = "La contraseña debe tener al menos 8 caracteres";
        expect(() => usuario.ValidPassword()).toThrow(error);
    });

});