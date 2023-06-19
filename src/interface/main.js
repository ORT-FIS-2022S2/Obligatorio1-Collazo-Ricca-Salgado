import { Comensal } from "../dominio/comensal.js";
import { ListaComensal } from "../dominio/lista_comensal.js";
import { Pedido } from "../dominio/pedido.js";
import { ListaPedido } from "../dominio/lista_pedido.js";

//DOMContentLoaded es un evento que se dispara cuando el documento HTML ha sido completamente cargado y parseado.
document.addEventListener('DOMContentLoaded', () => { 

const listaComensal = new ListaComensal();
const listaPedido = new ListaPedido();

let comensal1 = new Comensal("Santiago", "Molinari", 14, "Jose Pedro Varela", "Ninguna");
let comensal2 = new Comensal("Agustina", "Molinari", 12, "Jose Pedro Varela", "Ninguna");
let comensal3 = new Comensal("Joaquin", "Molinari", 8, "Jose Pedro Varela", "Ninguna");
listaComensal.addComensal(comensal1);
listaComensal.addComensal(comensal2);
listaComensal.addComensal(comensal3);

let pedido1 = new Pedido("Lunes", "Tarta con ensalada de coliflor, chauchas, morron y zanahoria. Incluye pan y juego de naranja o agua, y una fruta.", "15/05/2023", comensal1);
let pedido2 = new Pedido("Lunes", "Tarta coensaladan ensalada de coliflor, chauchas, morron y zanahoria. Incluye pan y juego de naranja o agua, y una fruta.", "22/05/2023", comensal2);
let pedido3 = new Pedido("Martes", "Croquetas de papa con pasta. Ensalada de tomate, brocoli y zanahoria. Incluye pan y juego de naranja o agua, y una fruta.", "16/05/2023", comensal1);
let pedido4 = new Pedido("Martes", "Croquetas de papa con pasta. Ensalada de tomate, brocoli y zanahoria. Incluye pan y juego de naranja o agua, y una fruta.", "16/05/2023", comensal3);
let pedido5 = new Pedido("Miercoles", "Pollo con papas y ensalada de arvejas y zanahoria. Incluye pan y juego de naranja o agua, y una fruta.", "17/05/2023", comensal1);
let pedido6 = new Pedido("Miercoles", "Carne con papas y ensalada de arvejas y zanahoria. Incluye pan y juego de naranja o agua, y una fruta.", "14/06/2023", comensal1);
let pedido7 = new Pedido("Jueves", "Milanesa de carne con arroz y ensalada de coliflor, brocoli y zanahoria. Incluye pan y juego de naranja o agua, y una fruta.", "18/05/2023", comensal1);
let pedido8 = new Pedido("Jueves", "Milanesa de carne con arroz y ensalada de coliflor, brocoli y zanahoria. Incluye pan y juego de naranja o agua, y una fruta.", "25/05/2023", comensal1);
let pedido9 = new Pedido("Jueves", "Milanesa de pollo con arroz y ensalada de coliflor, brocoli y zanahoria. Incluye pan y juego de naranja o agua, y una fruta.", "15/06/2023", comensal2);
let pedido10 = new Pedido("Viernes", "Albóndigas con pasta y ensalada de tomate, lechuga y zanahoria. Incluye pan y juego de naranja o agua, y una fruta.", "19/05/2023", comensal2);
listaPedido.addPedido(pedido1);
listaPedido.addPedido(pedido2);
listaPedido.addPedido(pedido3);
listaPedido.addPedido(pedido4);
listaPedido.addPedido(pedido5);
listaPedido.addPedido(pedido6);
listaPedido.addPedido(pedido7);
listaPedido.addPedido(pedido8);
listaPedido.addPedido(pedido9);
listaPedido.addPedido(pedido10);

//se agrega funcionalidad al boton agregar comensal
    if (document.querySelector('#agregar-comensal')) { 
        document.querySelector('#agregar-comensal').addEventListener('click', () => {
          window.location.href = './comensales.html';
        });
      }

//se agrega funcionalidad al boton historial pedido
    if (document.querySelector('#historial-pedidos')) { 
        document.querySelector('#historial-pedidos').addEventListener('click', () => {
          window.location.href = './historial.html';
        });
      }

//se agrega funcionalidad al boton agregar comensal
    if (document.querySelector('#form-agregar-comensal')) {
        document.querySelector('#form-agregar-comensal').addEventListener('submit', (event) => {
            event.preventDefault();
            try {
                const nombre = document.querySelector('#nombre').value;
                const apellido = document.querySelector('#apellido').value;
                const edad = document.querySelector('#edad').value;
                const colegio = document.querySelector('#colegio').value;
                const dieta = document.querySelector('#dieta-especial').value;
                if (nombre === "" || apellido === "" || edad === "" || colegio === "" || dieta === "") {
                    throw new Error("Todos los campos deben ser llenados");
                }
                const nuevoComensal = new Comensal(nombre, apellido, edad, colegio, dieta);
                if (existeComensal(nuevoComensal, listaComensal.getListaComensal())) {
                    throw new Error("El comensal ya existe en la lista");
                }
                console.log(nuevoComensal);
                listaComensal.addComensal(nuevoComensal);
                console.log(listaComensal);
                event.target.reset();
            } catch (error) {
                console.error("Ocurrió un error al agregar el comensal: ", error);
                window.alert(error);
            }
        });
    }
    
    let formMes = document.getElementById('mes-option');
    let formComensal = document.getElementById('comensal-option');
    if(formMes && formComensal) {
    //se agrega funcionalidad cuando se selecciona mes y comensal a hist. ped.
    formMes.addEventListener('change', function() {
        formComensal.innerHTML = '';
        let mesSeleccionado = formMes.selectedIndex + 1;
        let listaPed = listaPedido.getListaPedido();
        if (!listaPed || listaPed.length <= 0 ) {
            console.error('No listaPed or listaPed.lista found');
            return;
        }
        let comensalesSinRepetir = new Array();
        let optDefecto = document.createElement('option');
        optDefecto.text = "Seleccione un comensal";
        optDefecto.value =  "-";
        formComensal.add(optDefecto);

        listaPed.filter(pedido => {
            if (!pedido.getFecha() || !pedido.getComensal()) {
                console.error('Pedido invalido', pedido);
                return false;
            }

            let day = pedido.getFecha().split("/")[0];
            let month = pedido.getFecha().split("/")[1];
            let year = pedido.getFecha().split("/")[2];
            let pedidoFecha = new Date(year, month - 1, day);
            let pedidoMes = pedidoFecha.getMonth() + 1;
            return pedidoMes === mesSeleccionado;
        }).forEach(pedido => {
            var repeated = false;
            for(var i = 0; i < comensalesSinRepetir.length; i++) {
                if (comensalesSinRepetir[i].getNombre() == pedido.getComensal().getNombre()) {
                    repeated = true;
                    break;
                }
            }
            if (!repeated) {
                let comensal = pedido.getComensal();
                let option = document.createElement('option');
                option.text = comensal.toString();
                option.value =  comensal.toString();
                comensalesSinRepetir.push(comensal);
                formComensal.add(option);
            }
            
        });
        formComensal.addEventListener('change', function() {
            limpiarCamposHist();
            let comensalSeleccionado = formComensal.value;
            let mesSeleccionado = formMes.selectedIndex + 1;
            cargarDetalleyCantPedMes(mesSeleccionado, comensalSeleccionado);
        }
        );
    });
    }

    function cargarDetalleyCantPedMes(unMes, unComensal){
        let listaPed = listaPedido.getListaPedido();
        if (!listaPed || listaPed.length <= 0 ) {
            console.error('No listaPed or listaPed.lista found');
            return;
        }  
        for(var i = 0; i < listaPed.length; i++) {
            let pedido = listaPed[i];
            let day = pedido.getFecha().split("/")[0];
            let month = pedido.getFecha().split("/")[1];
            let year = pedido.getFecha().split("/")[2];
            let pedidoFecha = new Date(year, month - 1, day);
            let pedidoMes = pedidoFecha.getMonth() + 1;
            if(pedidoMes === unMes && pedido.getComensal().toString() === unComensal){
                if(pedido.getDia() == "Lunes"){
                    let detLun = document.getElementById("detalle-menu-lunes");
                    if(detLun.innerHTML != pedido.getDetalle()){
                        detLun.innerHTML = pedido.getDetalle();
                    }
                    let cantPedLun = parseInt((document.getElementById("cant-menu-lunes")).innerHTML) +1;
                    document.getElementById("cant-menu-lunes").innerHTML = cantPedLun;
                }
                if(pedido.getDia() == "Martes"){
                    let detMar = document.getElementById("detalle-menu-martes");
                    if(detMar.innerHTML != pedido.getDetalle()){
                        detMar.innerHTML = pedido.getDetalle();
                    }
                    let cantPedMar = parseInt((document.getElementById("cant-menu-martes")).innerHTML) +1;
                    document.getElementById("cant-menu-martes").innerHTML = cantPedMar;
                }
                if(pedido.getDia() == "Miercoles"){
                    let detMier = document.getElementById("detalle-menu-miercoles");
                    if(detMier.innerHTML != pedido.getDetalle()){
                        detMier.innerHTML = pedido.getDetalle();
                    }
                    let cantPedMier = parseInt((document.getElementById("cant-menu-miercoles")).innerHTML) +1;
                    document.getElementById("cant-menu-miercoles").innerHTML = cantPedMier;
                }
                if(pedido.getDia() == "Jueves"){
                    let detJue = document.getElementById("detalle-menu-jueves");
                    if(detJue.innerHTML != pedido.getDetalle()){
                        detJue.innerHTML = pedido.getDetalle();
                    }
                    let cantPedJue = parseInt((document.getElementById("cant-menu-jueves")).innerHTML) +1;
                    document.getElementById("cant-menu-jueves").innerHTML = cantPedJue;
                }
                if(pedido.getDia() == "Viernes"){
                    let detVier = document.getElementById("detalle-menu-viernes");
                    if(detVier.innerHTML != pedido.getDetalle()){
                        detVier.innerHTML = pedido.getDetalle();
                    }
                    let cantPedVier = parseInt((document.getElementById("cant-menu-viernes")).innerHTML) +1;
                    document.getElementById("cant-menu-viernes").innerHTML = cantPedVier;
                }
            }
        }
    }

    function existeComensal(unComensal, listaCom){
        for(var i = 0; i < listaCom.length; i++) {
            if(listaCom[i].getNombre() == unComensal.getNombre() && listaCom[i].getApellido() == unComensal.getApellido() && listaCom[i].getEdad() == unComensal.getEdad() && listaCom[i].getColegio() == unComensal.getColegio()){
                return true;
            }
        }
        return false;
    }

    function limpiarCamposHist(){
        document.getElementById("detalle-menu-lunes").innerHTML = "";
        document.getElementById("cant-menu-lunes").innerHTML = 0;
        document.getElementById("detalle-menu-martes").innerHTML = "";
        document.getElementById("cant-menu-martes").innerHTML = 0;
        document.getElementById("detalle-menu-miercoles").innerHTML = "";
        document.getElementById("cant-menu-miercoles").innerHTML = 0;
        document.getElementById("detalle-menu-jueves").innerHTML = "";
        document.getElementById("cant-menu-jueves").innerHTML = 0;
        document.getElementById("detalle-menu-viernes").innerHTML = "";
        document.getElementById("cant-menu-viernes").innerHTML = 0;
    }
        
});

