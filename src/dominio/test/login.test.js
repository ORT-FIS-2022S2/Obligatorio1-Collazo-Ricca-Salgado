import { Login } from '../login.js';
import { test, expect, describe } from 'jest';


describe('Login', () => {

    test ("crear un Login usuario", () => {
        const login = new Login("SantAl","1234S");
        expect(login.getUsuario()).toBe("SantAl");
    });

    test ("crear un Login password", () => {
        const login = new Login("SantAl","1234S");
        expect(login.getPassword()).toBe("1234S");
    });

    test ("crear un Login con usuario vacio", () => {
        const login = new Login("","1234S");
        const error = "El usuario no puede estar vacio";
        expect(() => login.isValid()).toThrow(error);
    });

    test ("crear un Login con password vacia", () => {
        const login = new Login("SantAl","");
        const error = "La contrasenia no puede estar vacia";
        expect(() => login.isValid()).toThrow(error);
    });

    test ("toString", () => {
        const login = new Login("SantAl","1234S");
        expect(login.toString()).toBe("SantAl");
    });

    test ("valid Login", () => {
        const login = new Login("SantAl","1234S");
        expect(login.isValid()).toBe(true);
    }); 

});