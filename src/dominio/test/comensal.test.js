import { Comensal } from '../comensal.js';


describe('Comensal', () => {

    test ("crear un comensal nombre", () => {
        const comensal = new Comensal("Juan","Perez",12,"Colegio","Dieta");
        expect(comensal.getNombre()).toBe("Juan");
    });

    test ("crear un comensal apellido", () => {
        const comensal = new Comensal("Juan","Perez",12,"Colegio","Dieta");
        expect(comensal.getApellido()).toBe("Perez");
    });

    test ("crear un comensal edad", () => {
        const comensal = new Comensal("Juan","Perez",12,"Colegio","Dieta");
        expect(comensal.getEdad()).toBe(12);
    });

    test ("crear un comensal colegio", () => {
        const comensal = new Comensal("Juan","Perez",12,"Colegio","Dieta");
        expect(comensal.getColegio()).toBe("Colegio");
    });

    test ("crear un comensal dieta", () => {
        const comensal = new Comensal("Juan","Perez",12,"Colegio","Dieta");
        expect(comensal.getDieta()).toBe("Dieta");
    });

    test ("crear un comensal nombre vacio", () => {
        const comensal = new Comensal("","Perez",12,"Colegio","Dieta");
        const error = "El nombre no puede estar vacio";
        expect(() => comensal.isValid()).toThrow(error);
    });

    test ("crear un comensal apellido vacio", () => {
        const comensal = new Comensal("Juan","",12,"Colegio","Dieta");
        const error = "El apellido no puede estar vacio";
        expect(() => comensal.isValid()).toThrow(error);
    });

    test ("crear un comensal colegio vacio", () => {
        const comensal = new Comensal("Juan","Perez",12,"","Dieta");
        const error = "El colegio no puede estar vacio";
        expect(() => comensal.isValid()).toThrow(error);
    });

    test ("crear un comensal dieta vacio", () => {
        const comensal = new Comensal("Juan","Perez",12,"Colegio","");
        const error = "La dieta no puede estar vacia";
        expect(() => comensal.isValid()).toThrow(error);
    });

    test ("toString", () => {
        const comensal = new Comensal("Juan","Perez",12,"Colegio","Dieta");
        expect(comensal.toString()).toBe("Juan Perez");
    });

    test ("valid comensal", () => {
        const comensal = new Comensal("Juan","Perez",12,"Colegio","Dieta");
        expect(comensal.isValid()).toBe(true);
    }); 





});