# TESTING OBLIGATIORIO - Caggianese-Ripoll-Rodríguez

## MISIONES DE PRUEBA:
1. **Misión de prueba 1:** Ver receta de un menu. 
2. **Misión de prueba 2:** Contacto con el comedor
3. **Misión de prueba 3:** Ver el menu semanal
4. **Misión de prueba 4:** Ver historial de menus


## CASOS DE PRUEBA GENERADOS

| **ID test** | **Item testeado** | **Descripción** | **Procedimiento** | **Result. esperado** | **Result. obtenido** | **Resultado** |
| :---------: | :---------------: | :-------------: | :---------------: | :------------------: | :------------------: | :-----------: |
| TC_1001 | Boton "Ver Menú" | Acceder página menú al hacer click en el boton "Ver Menú" | 1. Ingresar a la página de inicio. <br> 2. Ingresar a la sección de "Ver menú". | Debe redirigir a la pagina menú. | Redirige a la pagina menú. | PASSED |
| TC_1002 | Boton "Menú" | Acceder página menú al hacer click en el boton "Menú" del navbar | 1. Ingresar a la sección de "Menú". | Debe redirigir a la pagina menú. | Redirige a la pagina menú. | PASSED |
| TC_1003 | Botón "Inicio" | Volver a la página de inicio. | 3. Hacer click en botón "Inicio" del navbar. | Debe redirigir a la página de inicio. | Redirige a la página de inicio. | PASSED |
| TC_1004 | Menú | Ver receta | 1. Ingresar a la página de inicio. <br> 2. Ingresar a la sección "Menú". <br> 3. Seleccionar una receta. | Se debe mostrar la receta seleccionada. | Se muestra la receta seleccionada. | PASSED |
| TC_1005 | Boton "Próximos eventos" | Acceder página Eventos al hacer click en el boton "Póximos eventos" | 1. Ingresar a la página de inicio. <br> 2. Ingresar a la sección de "Próximos eventos". | Debe redirigir a la pagina Eventos. | Redirige a la pagina Eventos. | PASSED |
| TC_1006 | Boton "Eventos" | Acceder página Eventos al hacer click en el boton "Eventos" del navbar | 1. Ingresar a la sección de "Eventos". | Debe redirigir a la pagina Eventos. | Redirige a la pagina Eventos. | PASSED |
| TC_1007 | Boton "Pedidos de mis hijos" | Acceder página Pedidos al hacer click en el boton "Pedidos de mis hijos" | 1. Ingresar a la página de inicio. <br> 2. Ingresar a la sección de "Pedidos de mis hijos". | Debe redirigir a la pagina Pedidos. | Redirige a la pagina Pedidos. | PASSED |
| TC_1009 | Boton "Contacto" | Acceder página Contacto al hacer click en el boton "Contacto" del navbar | 1. Ingresar a la página de inicio. <br> 2. Ingresar a la sección de "Contacto". | Debe redirigir a la pagina Contacto. | Redirige a la pagina Contacto. | PASSED |
| TC_1010 | Boton "(Perfil)" | Acceder página Perfil al hacer click en el boton "(Perfil)" del navbar | 1. Ingresar a la página de inicio. <br> 2. Ingresar a la sección de "(Perfil)". | Debe redirigir a la pagina Perfil. | No hace nada. | NOT PASSED |

## SUMARIO DE ISSUES REPORTADOS POR TIPO Y SEVERIDAD
* **Bloqueante (B):** Un estado de severidad bloqueante es aquel donde no hay funcionalidad de las reglas del negocio y/o la aplicación, presenta bloqueos para continuar con el flujo normal de la funcionalidad o con las pruebas.
* **Funcional/Mayor (F):** Son problemas graves que afectan las reglas de negocio. 
* **Menor (M):** El defecto no afecta ninguna regla de negocio es probablemente un problema cosmético.

| **ID test** | **Severidad** |
| :---------: | :-----------: |
| TC_1010 | B |

# SESIONES DE PRUEBA EXPLORATORIA

| **Fecha** | **Tester** | **Misión** | **Duración** | **Notas** |
| :-------: | :--------: | :--------: | :----------: | :-------: |
| 20/06/2023 | Collazo | Corroborar el correcto funcionamiento de la página. | 30 min | Se encontró un defecto bloqueante. |

## EVALUACIÓN GLOBAL DE LA CALIDAD
No se encontro especificación por parte del equipo respecto a las guias de estilo y diseño, por lo que nos basamos en las reglas de Google Style Guide para la evaluación de la calidad del código.


&nbsp;
### JavaScript
1. Los nombres de los archivos deberian ser todos en minuscula y separados por guiones bajos. Se encuentran definidos con PascalCase.
2. 


&nbsp;
### HTML


