import { comensal } from "../dominio/comensal.js";
import { listacomensal } from "../dominio/listacomensal.js";
import { pedido } from "../dominio/pedido.js";
import { listapedido } from "../dominio/listapedido.js";

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

pedido1.setDia("Lunes");
pedido1.setDetalle("Milanesa con pure");
pedido1.setFecha("15/05/2023");
pedido1.setComensal("Santiago Molinari");

pedido2.setDia("Lunes");
pedido2.setDetalle("Milanesa con pure");
pedido2.setFecha("22/05/2023");
pedido2.setComensal("Agustina Molinari");

pedido3.setDia("Martes");
pedido3.setDetalle("Tarta de zapallitos con ensalada");
pedido3.setFecha("16/05/2023");
pedido3.setComensal("Santiago Molinari");

pedido4.setDia("Martes");
pedido4.setDetalle("Tarta de zapallitos con ensalada");
pedido4.setFecha("15/05/2023");
pedido4.setComensal("Joaquin Molinari");

pedido5.setDia("Miercoles");
pedido5.setDetalle("Ravioles con tuco de pollo");
pedido5.setFecha("17/05/2023");
pedido5.setComensal("Santiago Molinari");

pedido6.setDia("Miercoles");
pedido6.setDetalle("Tallarines con tuco de carne");
pedido6.setFecha("24/05/2023");
pedido6.setComensal("Santiago Molinari");

pedido7.setDia("Jueves");
pedido7.setDetalle("Canelones de espinaca y ricota");
pedido7.setFecha("18/05/2023");
pedido7.setComensal("Santiago Molinari");

pedido8.setDia("Jueves");
pedido8.setDetalle("Canelones de carne");
pedido8.setFecha("25/05/2023");
pedido8.setComensal("Santiago Molinari");

pedido9.setDia("Jueves");
pedido9.setDetalle("Canelones de carne");
pedido9.setFecha("25/05/2023");
pedido9.setComensal("Agustina Molinari");

pedido10.setDia("Viernes");
pedido10.setDetalle("Ensalada cesar");
pedido10.setFecha("19/05/2023");
pedido10.setComensal("Agustina Molinari");

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


//const btnAgregarComensal = document.getElementById('agregar-comensal');
//const btnHistorialPedido = document.getElementById('historial-pedidos');

document.addEventListener('DOMContentLoaded', function() {
    var btnAgregarComensal = document.getElementById('agregar-comensal');
    
    boton.addEventListener('click', function() {
      window.location.href = 'comensales.html'; //Reemplaza 'comensales.html' con la URL de tu página si es diferente.
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var btnHistorialPedido = document.getElementById('historial-pedidos');
    
    boton.addEventListener('click', function() {
      window.location.href = 'historial.html'; //Reemplaza 'historial.html' con la URL de tu página si es diferente.
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('#form-agregar-comensal');
    
    form.addEventListener('submit', function(event) {
        // Prevenir el comportamiento por defecto del formulario
        event.preventDefault();
        // Seleccionar los campos del formulario y obtener sus valores
        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var edad = document.getElementById('edad').value;
        var colegio = document.getElementById('colegio').value;
        var dietaEspecial = document.getElementById('dieta-especial').value;
        // Crear un nuevo comensal con esos valores
        var nuevoComensal = new comensal(nombre, apellido, edad, colegio, dietaEspecial);
        // Aquí puedes agregar el nuevo comensal a la lista de comensales
        listacomensal.add(nuevoComensal);
        // Limpia el formulario para un nuevo ingreso
        form.reset();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var listaComensalesElemento = document.getElementById('comensal');

    // Suponiendo que listacomensal es un array de objetos comensal
    listacomensal.forEach(function(comensal) {
        var comensalElemento = document.createElement('li');
        comensalElemento.textContent = comensal.nombre + ' ' + comensal.apellido + ', ' + comensal.edad + ' años, ' + comensal.colegio + ', Dieta: ' + comensal.dietaEspecial;
        listaComensalesElemento.appendChild(comensalElemento);
    });
});
