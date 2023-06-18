import { Comensal } from "../comensal";
import { ListaComensal } from "../ListaComensal";

describe("Tests de ListaComensal", () => {

    test ("Crear una lista vacía", () =>{
        let listaComensal = new ListaComensal();
        let largoEsperado = 0;
        expect(listaComensal.getListaComensal().length).toBe(largoEsperado);
    });

    test ("Agregar un Comensal a la lista", () =>{
        let listaComensal = new ListaComensal();
        let comensal = new Comensal("Juan","Perez",12,"Colegio","Dieta");
        listaComensal.add(comensal);
        let largoEsperado = 1;
        expect(listaComensal.getCountries().length).toBe(largoEsperado);
    });

    test ("Agregar un Comensal repetido en la lista", () =>{
        let listaComensal = new ListaComensal();
        let comensal = new Comensal("Juan","Perez",12,"Colegio","Dieta");
        listaComensal.add(comensal);
        let error = "No se pudo agregar. Juan Perez ya está en la lista.";
        expect(() => listaComensal.add(comensal)).toThrow(error);
    });
});