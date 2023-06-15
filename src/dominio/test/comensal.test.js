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

   /* test ("crear un comensal nombre vacio", () => {
        const comensal = new Comensal("","Perez",12,"Colegio","Dieta");
        expect(comensal.getNombre()).toBe("");
    });

    test ("crear un comensal apellido vacio", () => {
        const comensal = new Comensal("Juan","",12,"Colegio","Dieta");
        expect(comensal.getApellido()).toBe("");
    });

    test ("crear un comensal edad vacio", () => {
        const comensal = new Comensal("Juan","Perez",0,"Colegio","Dieta");
        expect(comensal.getEdad()).toBe(0);
    });

    test ("crear un comensal colegio vacio", () => {
        const comensal = new Comensal("Juan","Perez",12,"","Dieta");
        expect(comensal.getColegio()).toBe("");
    });

    test ("crear un comensal dieta vacio", () => {
        const comensal = new Comensal("Juan","Perez",12,"Colegio","");
        expect(comensal.getDieta()).toBe("");
    }); */

    test ("toString", () => {
        const comensal = new Comensal("Juan","Perez",12,"Colegio","Dieta");
        expect(comensal.toString()).toBe("Juan Perez");
    });

    /*test ("valid comensal", () => {
        const comensal = new Comensal("Juan","Perez",12,"Colegio","Dieta");
        expect(comensal.valid()).toBe(true);
    }); */





});