import { Comensal } from "../dominio/comensal.js";
import { ListaComensal } from "../dominio/listacomensal.js";
import { Pedido } from "../dominio/pedido.js";
import { ListaPedido } from "../dominio/listapedido.js";

let listacomensal = new ListaComensal();
let listapedido = new ListaPedido();

let comensal1 = new Comensal();
let comensal2 = new Comensal();
let comensal3 = new Comensal();

comensal1.setNombre("Santiago");
comensal1.setApellido("Molinari");
comensal1.setEdad(14);
comensal1.setColegio("Jose Pedro Varela");
comensal1.setDieta("Ninguna");

comensal2.setNombre("Agustina");
comensal2.setApellido("Molinari");
comensal2.setEdad(12);
comensal2.setColegio("Jose Pedro Varela");
comensal2.setDieta("Ninguna");

comensal3.setNombre("Joaquin");
comensal3.setApellido("Molinari");
comensal3.setEdad(8);
comensal3.setColegio("Jose Pedro Varela");
comensal3.setDieta("Ninguna");

listacomensal.add(comensal1);
listacomensal.add(comensal2);
listacomensal.add(comensal3);


let pedido1 = new Pedido();
let pedido2 = new Pedido();
let pedido3 = new Pedido();
let pedido4 = new Pedido();
let pedido5 = new Pedido();
let pedido6 = new Pedido();
let pedido7 = new Pedido();
let pedido8 = new Pedido();
let pedido9 = new Pedido();
let pedido10 = new Pedido();

pedido1.setDia("Lunes");
pedido1.setDetalle("Milanesa con pure");
pedido1.setFecha("15/05/2023");
pedido1.setComensal(comensal1);

pedido2.setDia("Lunes");
pedido2.setDetalle("Milanesa con pure");
pedido2.setFecha("22/05/2023");
pedido2.setComensal(comensal2);

pedido3.setDia("Martes");
pedido3.setDetalle("Tarta de zapallitos con ensalada");
pedido3.setFecha("16/05/2023");
pedido3.setComensal(comensal1);

pedido4.setDia("Martes");
pedido4.setDetalle("Tarta de zapallitos con ensalada");
pedido4.setFecha("15/05/2023");
pedido4.setComensal(comensal3);

pedido5.setDia("Miercoles");
pedido5.setDetalle("Ravioles con tuco de pollo");
pedido5.setFecha("17/05/2023");
pedido5.setComensal(comensal1);

pedido6.setDia("Miercoles");
pedido6.setDetalle("Tallarines con tuco de carne");
pedido6.setFecha("24/05/2023");
pedido6.setComensal(comensal1);

pedido7.setDia("Jueves");
pedido7.setDetalle("Canelones de espinaca y ricota");
pedido7.setFecha("18/05/2023");
pedido7.setComensal(comensal1);

pedido8.setDia("Jueves");
pedido8.setDetalle("Canelones de carne");
pedido8.setFecha("25/05/2023");
pedido8.setComensal(comensal1);

pedido9.setDia("Jueves");
pedido9.setDetalle("Canelones de carne");
pedido9.setFecha("25/05/2023");
pedido9.setComensal(comensal2);

pedido10.setDia("Viernes");
pedido10.setDetalle("Ensalada cesar");
pedido10.setFecha("19/05/2023");
pedido10.setComensal(comensal2);

listapedido.add(pedido1);
listapedido.add(pedido2);
listapedido.add(pedido3);
listapedido.add(pedido4);
listapedido.add(pedido5);
listapedido.add(pedido6);
listapedido.add(pedido7);
listapedido.add(pedido8);
listapedido.add(pedido9);
listapedido.add(pedido10);

document.addEventListener('DOMContentLoaded', function() {
    var btnAgregarComensal = document.getElementById('agregar-comensal');
    
    btnAgregarComensal.addEventListener('click', function() {
      window.location.href = 'comensales.html'; //Reemplaza 'comensales.html' con la URL de tu página si es diferente.
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var btnHistorialPedido = document.getElementById('historial-pedidos');
    
    btnHistorialPedido.addEventListener('click', function() {
      window.location.href = 'historial.html'; //Reemplaza 'historial.html' con la URL de tu página si es diferente.
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('#form-agregar-comensal');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var edad = document.getElementById('edad').value;
        var colegio = document.getElementById('colegio').value;
        var dietaEspecial = document.getElementById('dieta-especial').value;
        var nuevoComensal = new comensal(nombre, apellido, edad, colegio, dietaEspecial);
        listacomensal.add(nuevoComensal);
        form.reset();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let formMes = document.getElementById('mes');
    let formComensal = document.getElementById('comensal-option');
    

    formMes.addEventListener('change', function() {
        formComensal.innerHTML = '';
        let mesSeleccionado = formMes.selectedIndex + 1;
        let listaPed = getListaPedido();
        if (!listaPed || !listaPed.lista) {
            console.error('No listaPed or listaPed.lista found');
            return;
        }

        listaPed.lista.filter(pedido => {
            if (!pedido.fecha || !pedido.comensal) {
                console.error('Invalid pedido', pedido);
                return false;
            }

            let [day, month, year] = pedido.fecha.split("/");
            let pedidoFecha = new Date(year, month - 1, day);
            let pedidoMes = pedidoFecha.getMonth() + 1;
            return pedidoMes === mesSeleccionado;
        }).forEach(pedido => {
            let comensal = pedido.comensal;
            let option = document.createElement('option');
            option.text = `${comensal.nombre} ${comensal.apellido}`;
            option.value = `${comensal.nombre} ${comensal.apellido}`;
            formComensal.add(option);
        });
    });
});
