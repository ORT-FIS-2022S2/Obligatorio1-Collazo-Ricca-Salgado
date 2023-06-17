import { Comensal } from "../dominio/comensal.js";
import { ListaComensal } from "../dominio/listacomensal.js";
import { Pedido } from "../dominio/pedido.js";
import { ListaPedido } from "../dominio/listapedido.js";


document.addEventListener('DOMContentLoaded', () => { //DOMContentLoaded es un evento que se dispara cuando el documento HTML ha sido completamente cargado y parseado, sin esperar hojas de estilo, imágenes y subtramas para finalizar la carga.

const listacomensal = new ListaComensal();
const listapedido = new ListaPedido();

if (localStorage.getItem('listacomensal')) {
    const comensalesFromStorage = JSON.parse(localStorage.getItem('listacomensal'));
    comensalesFromStorage.forEach((comensal) => {
      const loadedComensal = new Comensal(comensal.nombre, comensal.apellido, comensal.edad, comensal.colegio, comensal.dieta);
      listacomensal.addComensal(loadedComensal);
    });
  }

let comensal1 = new Comensal("Santiago", "Molinari", 14, "Jose Pedro Varela", "Ninguna");
let comensal2 = new Comensal("Agustina", "Molinari", 12, "Jose Pedro Varela", "Ninguna");
let comensal3 = new Comensal("Joaquin", "Molinari", 8, "Jose Pedro Varela", "Ninguna");
listacomensal.addComensal(comensal1);
listacomensal.addComensal(comensal2);
listacomensal.addComensal(comensal3);

let pedido1 = new Pedido("Lunes", "Milanesa con pure", "15/05/2023", comensal1);
let pedido2 = new Pedido("Lunes", "Milanesa con pure", "22/05/2023", comensal2);
let pedido3 = new Pedido("Martes", "Tarta de zapallitos con ensalada", "16/05/2023", comensal1);
let pedido4 = new Pedido("Martes", "Tarta de zapallitos con ensalada", "16/05/2023", comensal3);
let pedido5 = new Pedido("Miercoles", "Ravioles con tuco de pollo", "17/05/2023", comensal1);
let pedido6 = new Pedido("Miercoles", "Tallarines con tuco de carne", "24/05/2023", comensal1);
let pedido7 = new Pedido("Jueves", "Canelones de espinaca y ricota", "18/05/2023", comensal1);
let pedido8 = new Pedido("Jueves", "Canelones de espinaca y ricota", "25/05/2023", comensal1);
let pedido9 = new Pedido("Jueves", "Canelones de espinaca y ricota", "25/05/2023", comensal2);
let pedido10 = new Pedido("Viernes", "Ensalada cesar", "19/05/2023", comensal2);
listapedido.addPedido(pedido1);
listapedido.addPedido(pedido2);
listapedido.addPedido(pedido3);
listapedido.addPedido(pedido4);
listapedido.addPedido(pedido5);
listapedido.addPedido(pedido6);
listapedido.addPedido(pedido7);
listapedido.addPedido(pedido8);
listapedido.addPedido(pedido9);
listapedido.addPedido(pedido10);

    if (document.querySelector('#agregar-comensal')) { //se agrega funcionalidad al boton agregar comensal
        document.querySelector('#agregar-comensal').addEventListener('click', () => {
          window.location.href = './comensales.html';
        });
      }

    if (document.querySelector('#historial-pedidos')) { //se agrega funcionalidad al boton historial pedido
        document.querySelector('#historial-pedidos').addEventListener('click', () => {
          window.location.href = './historial.html';
        });
      }

    if (document.querySelector('#form-agregar-comensal')) {
        document.querySelector('#form-agregar-comensal').addEventListener('submit', (event) => {
          event.preventDefault();
          const nombre = document.querySelector('#nombre').value;
          const apellido = document.querySelector('#apellido').value;
          const edad = document.querySelector('#edad').value;
          const colegio = document.querySelector('#colegio').value;
          const dieta = document.querySelector('#dieta-especial').value;
          const nuevoComensal = new Comensal(nombre, apellido, edad, colegio, dieta);
          console.log(nuevoComensal);
          listacomensal.addComensal(nuevoComensal);
          localStorage.setItem('listacomensal', JSON.stringify(listacomensal.getListaComensal()));
          event.target.reset();
        });
      }
    
    // let formMes = document.getElementById('mes');
    // let formComensal = document.getElementById('comensal-option');
    // formMes.addEventListener('change', function() {
    //     formComensal.innerHTML = '';
    //     let mesSeleccionado = formMes.selectedIndex + 1;
    //     let listaPed = getListaPedido();
    //     if (!listaPed || !listaPed.lista) {
    //         console.error('No listaPed or listaPed.lista found');
    //         return;
    //     }

    //     listaPed.lista.filter(pedido => {
    //         if (!pedido.fecha || !pedido.comensal) {
    //             console.error('Invalid pedido', pedido);
    //             return false;
    //         }

    //         let [day, month, year] = pedido.fecha.split("/");
    //         let pedidoFecha = new Date(year, month - 1, day);
    //         let pedidoMes = pedidoFecha.getMonth() + 1;
    //         return pedidoMes === mesSeleccionado;
    //     }).forEach(pedido => {
    //         let comensal = pedido.comensal;
    //         let option = document.createElement('option');
    //         option.text = comensal.toString();//`${comensal.nombre} ${comensal.apellido}`;
    //         option.value =  comensal.toString();//`${comensal.nombre} ${comensal.apellido}`;
    //         formComensal.add(option);
    //     });
    // });

});