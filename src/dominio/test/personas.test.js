import { Persona } from '../personas.js';


describe('Persona', () => {

    test ("crear una persona, usuario", () => {
        const persona = new Persona("Silvia345","xt6790_3");
        expect(persona.getUsuario()).toBe("Silvia345");
    });

    test ("crear una persona, contrsasena", () => {
        const persona = new Persona("Silvia345","xt6790_3");
        expect(persona.getContrasena()).toBe("xt6790_3");
    });

    test ("crear ua persona usuario vacio", () => {
        const persona = new Persona("","xt6790_3");
        const error = "El usuario no puede estar vacio";
        expect(() => persona.isValid()).toThrow(error);
    });

    test ("crear ua persona contrasena vacio", () => {
        const persona = new Persona("Silvia345","");
        const error = "El campo contrasena no puede estar vacio";
        expect(() => persona.isValid()).toThrow(error);
    });

    test ("toString", () => {
        const persona = new Persona("Silvia345","xt6790_3");
        expect(persona.toString()).toBe("Silvia345 xt6790_3");
    });


    test ("valid comensal", () => {
        const persona = new Persona("Silvia345","xt6790_3");
        expect(persona.isValid()).toBe(true);
    }); 

});