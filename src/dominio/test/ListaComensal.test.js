import { Comensal } from "../comensal";
import { ListaComensal } from "../lista-comensal";

describe("Tests de ListaComensal", () => {

    test ("Crear una lista vacía", () =>{
        let listaComensal = new ListaComensal();
        let largoEsperado = 0;
        expect(listaComensal.getListaComensal().length).toBe(largoEsperado);
    });

    test ("Agregar un Comensal a la lista", () =>{
        let listaComensal = new ListaComensal();
        let comensal = new Comensal("Juan","Perez",12,"Colegio","Dieta");
        listaComensal.addComensal(comensal);
        let largoEsperado = 1;
        expect(listaComensal.getListaComensal().length).toBe(largoEsperado);
    });

    test ("Agregar un Comensal repetido en la lista", () =>{
        let listaComensal = new ListaComensal();
        let comensal = new Comensal("Juan","Perez",12,"Colegio","Dieta");
        listaComensal.addComensal(comensal);
        let error = "No se pudo agregar. Juan Perez ya está en la lista.";
        expect(() => listaComensal.addComensal(comensal)).toThrow(error);
    });
});