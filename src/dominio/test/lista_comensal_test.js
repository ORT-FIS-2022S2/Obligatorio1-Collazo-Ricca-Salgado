import { Comensal } from "../comensal";
import { ListaComensal } from "../lista_comensal";

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
});