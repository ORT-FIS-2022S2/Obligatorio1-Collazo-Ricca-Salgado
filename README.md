# FUNDAMENTOS DE INGENIERIA DE SOFTWARE - OBLIGATORIO 1

**Estudiantes:**
* Laura Collazo - 252803
* Mario Ricca - 212393
* Gaston Salgado - 212387


## REPOSITORIOS GIT

### Creación de repositorios locales y remotos

Se creo un repositorio en GitHub y luego cada integrante del equipo lo clono, utilizando el comando `git clone` y la url. Asi cada uno trabajar sobre el repositorio local, y luego se suben los cambios al repositorio remoto con el comando `git push`. Siempre antes de comentzar a trabajar en el repositorio local, se debe hacer un `git pull` para traer los cambios que se hayan hecho en el repositorio remoto.

### Comandos Git ejecutados desde el terminal y desde el IDE

* **git clone [URL del repo de GitHub]**


&nbsp;
  Inicializa un directorio existente como un repositorio Git local.

* **git status**


&nbsp;
  Muestra el estado del árbol de trabajo.

* **git add [nombre del archivo] o git add .**

&nbsp;
  Agrega el/los archivo/s al área de staging para el siguiente commit.

* **git commit -m "mensaje"**

&nbsp;
  Registra los cambios que se encuentran en el área de stagging.

* **git pull**

&nbsp;
  Incorpora los cambios remotos al repositorio local.

* **git push**

&nbsp;
  Envia los cambios locales al repositorio remoto.

* **git branch**

&nbsp;
  Lista las ramas existentes en el repositorio.  

* **git branch [nombre de la rama]**

&nbsp;
  Crea una nueva rama con el nombre indicado.

* **git checkout [nombre de la rama]**

&nbsp;
  Cambia de rama, a la indicada, y actualiza el directorio de trabajo.

* **git merge [nombre de la rama]**

&nbsp;
  Mergea la rama indicada con la rama actual.

* **git log**

&nbsp;
  Muestra el historial de commits.

* **git fetch**

&nbsp;
  Descarga todas las ramas del repositorio remoto al repositorio local.

## VERSIONADO

### Aplicar buenas prácticas de versionado

Aplicar buenas prácticas de versionado en el desarrollo de software implica mantener un control sistemático y ordenado de los cambios realizados en el código fuente y en otros elementos del proyecto a lo largo del tiempo. Algunas implicaciones de esto son:

1. Control de cambios: Las buenas prácticas de versionado permiten realizar un seguimiento de los cambios que se realizan en el código fuente y otros elementos del proyecto. Esto ayuda a los desarrolladores a comprender los cambios realizados en el pasado y a mantener una visión general del estado actual del proyecto.

2. Colaboración: Las herramientas de control de versiones, como Git, permiten que múltiples desarrolladores trabajen en el mismo proyecto simultáneamente. El uso de buenas prácticas de versionado ayuda a evitar conflictos y a mantener la colaboración fluida y organizada.

3. Reversión: Las buenas prácticas de versionado permiten a los desarrolladores revertir los cambios realizados en el código fuente y otros elementos del proyecto en caso de que se produzca un error o un problema inesperado. Esto permite una recuperación rápida y eficiente del proyecto en caso de que algo salga mal.

4. Auditoría: Las buenas prácticas de versionado proporcionan un historial completo de los cambios realizados en el proyecto, lo que permite a los desarrolladores y otros interesados en el proyecto realizar una auditoría del código fuente y otros elementos. Esto ayuda a garantizar la calidad del código y a detectar cualquier problema potencial.

En resumen, aplicar buenas prácticas de versionado en el desarrollo de software ayuda a mantener un control ordenado y sistemático de los cambios realizados en el proyecto, fomenta la colaboración y permite la recuperación rápida y eficiente del proyecto en caso de problemas.

### Uso de ramas separadas de 'main'

Utilizamos dos ramas principales, develop y main. La rama main se utiliza unicamente para pasar a producción, y la rama develop se utiliza para el desarrollo del proyecto. Cada vez que se finaliza una funcionalidad, que el equipo aprueba, se hace un merge de la rama develop a la rama main, y se sube a producción.

### Resumen de commits y evolución del proyecto 
Puesta en comun

## ELICITACION

### Evidencias de actividades de investigación
#### Entrevistas 
Se realizaron dos entrevistas:


&nbsp;
Entrevista 1: se realizo a una madre de tres niños, de los cuales solo uno sigue siendo estudiante de primaria.


&nbsp;
Entrevista 2: padre de dos niños, ambos niños practican el judaísmo y uno tiene celiaquía.


&nbsp;
Ambos padres envían a sus hijos a escuelas públicas de turno completo donde reciben un almuerzo.


&nbsp;
La primera conclusión a la que se llego es que el sistema de comedores en escuelas públicas funciona bien en su objetivo de alimentar a los niños. De la primera entrevista se vio que en la escuela pública muchas veces el menú semanal no es comunicado con antelación lo cual genera cierta dificultad al preparar las compras en la casa para evitar que sus hijos comieran en sus casas de noche lo mismo que en la escuela.


&nbsp;
Por otro lado, se aprendio que la Dirección General de Educación Inicial y Primeria (DGEIP) no puede, por un tema de escala y costos, garantizar opciones para todas las restricciones dietarías, en particular condiciones de carácter filosófico sean religiosas o éticas. En estos casos se le brinda al niño alimentos adecuados dentro de lo posible y se les pide a los padres en esos casos que complementen la alimentación ya sea llevando sus propias viandas a la escuela para cubrir total o parcialmente el almuerzo dependiendo del caso.


&nbsp;
Ambos padres encontraron difícil la comunicación con los centros escolares, ya que, a pesar de elaborarse la comida en los centros educativos, la planificación es llevada a cabo para todas las escuelas por un equipo de nutricionistas contratado por la DGEIP

#### Observaciones
MArio

#### Lluvia de ideas 
MArio

### Referencias a fuentes de información
Mario
### Caracteriazción de usuarios: User Personas
Mario
### Modelo conceptual del problema
Mario

## ESPECIFICACION

### Definición de requerimientos funcionales y no funcionales

#### Actores
* Padre/Madre
* Encargado del comedor

#### Requerimientos Funcionales

*  **RF1: Registro de comensales**


&nbsp;
**Actores:** Padre


&nbsp;
**Descripción:** El sistema debe permitir a los padres registrar los comensales (hijos) que quiere gestionar con la aplicación.


&nbsp;
**Prioridad:** Alta

* **RF2: Administrar comensales**


&nbsp;
**Actores:** Padre


&nbsp;
**Descripción:** El sistema debe permitir a los padres ademas de registrar los comensales, eliminar los que ya no quiera gestionar con la aplicación.


&nbsp;
**Prioridad:** Alta

* **RF3: Ver el Menú Semanal**


&nbsp;
**Actores:** Padre, Encargado del Comedor


&nbsp;
**Descripción:** El sistema debe permitir a los padres y encargado del comedor ver los platos del menú para toda la semana con el detalle de que incluye cada uno.


&nbsp;
**Prioridad:** Alta

* **RF4: Ingresar una orden por comensal**


&nbsp;
**Actores:** Padre


&nbsp;
**Descripción:** El sistema debe permitir a los padres cargar una orden en la cual pueden elegir para cada comensal, que dias de la semana quieren pedir el menú.


&nbsp;
**Prioridad:** Alta

* **RF5: Confirmación de pedido**


&nbsp;
**Actores:** Padre


&nbsp;
**Descripción:** El sistema debe permitir al padre ver en una pantalla el la orden que ingreso y confirmar la misma de ser correcta. De no ser correcta puede volver para atrás e ingresar la orden nuevamente.


&nbsp;
**Prioridad:** Alta

* **RF6: Historial de pedido**


&nbsp;
**Actores:** Padre


&nbsp;
**Descripción:** El sistema debe permitir al padre ver para un comensal y mes indicado, todos los pedidos realizados.


&nbsp;
**Prioridad:** Alta

* **RF7: Formulario de contacto**


&nbsp;
**Actor:** Padre


&nbsp;
**Descripción:** El sistema debe permitir que los usuarios tipo Padre se comuniquen con el responsable del menu escolar por parte del colegio mediante un formulario donde deben llenar casillas marcando nombre y apellido del niño, correo electrónico y el mensaje.


&nbsp;
**Prioridad:** Alta


&nbsp;

#### Requerimientos no funcionales

* **RNF1: Aplicación responsive**
  

&nbsp;
**Descripción:** El sistema debe ser accesible y adaptable a dispositivos móviles, tablets y computadoras.


&nbsp;
**Prioridad:** Alta

* **RNF2: Persistencia**
  

&nbsp;
**Descripción:** El sistema debe poder persistir la información de usuario, comensales y pedidos ingresados.


&nbsp;
**Prioridad:** Alta

* **RNF3: Tipografía**
  

&nbsp;
**Descripción:** El sistema debe utilizar la tipografía Gothic A1.


&nbsp;
**Prioridad:** Alta

* **RNF4: Paleta de colores**


&nbsp;
**Descripción:** El sistema debe respetar, en lineas generales, la paleta de colores seleccionada: #E13A3A, #FFFFFF, #000000, #868686 y #029408.


&nbsp;
**Prioridad:** Media

* **RNF5: Google Style Guide**


&nbsp;
**Descripción:** El sistema debe cumplir con las buenas practicas de etilos indicada por Google Style Guide para sus diferentes tecnologías.


&nbsp;
**Prioridad:** Media


&nbsp;
### User stories/ Use cases detallados


&nbsp;
#### User Stories 1


&nbsp;
**Título:** Consulta


&nbsp;
**Descripción:** Como padre/madre/tutor quiero poder consultar sobre mis dudas con el menú o con alguna receta en particular para poder tomar una decisión con seguridad.


&nbsp;
**Criterios de aceptación:** El padre/madre/tutor deberá llenar un formulario con los campos:


&nbsp;
-Nombre


&nbsp;
-Apellido


&nbsp;
-Correo electrónico


&nbsp;
-Mensaje


&nbsp;
#### User stories 2


&nbsp;
**Título:** Agregar comensales


&nbsp;
**Descripción:** Como padre/madre/tutor quiero poder registrar a mis hijos para poder gestionarlos en la aplicación y agregarles órdenes.


&nbsp;
**Criterios de aceptación:** El padre/madre/tutor deberá llenar un formulario con estos campos:


&nbsp;
-Nombre


&nbsp;
-Apellido


&nbsp;
-Edad


&nbsp;
-Colegio


&nbsp;
-Dieta especial


&nbsp;
#### User stories 3


&nbsp;
**Título:** Ingresar orden


&nbsp;
**Descripción:** Como padre/madre/tutor quiero poder ingresar órdenes a mis hijos para ya confirmar lo que van a comer en los días que no lleven comida de casa.


&nbsp;
**Criterios de aceptación:** El padre/madre/tutor debe tener algún comensal agregado y elegir los días que quiere pedir el menú.


&nbsp;
#### User stories 4


&nbsp;
**Título:** Ver menú


&nbsp;
**Descripción:** Como padre/madre/tutor quiero poder entrar a la aplicación a ver el menú para decidir qué días voy a pedirlo.


&nbsp;
**Criterios de aceptación:** El padre/madre/tutor tiene que entrar a la pestaña ver menú.


&nbsp;
### Bocetos de IU
![U1_1](https://github.com/ORT-FIS-2022S2/proyecto-LCMCR/blob/main/UI_1.png)
![U1_2](https://github.com/ORT-FIS-2022S2/proyecto-LCMCR/blob/main/UI_2.png)
![U1_3](https://github.com/ORT-FIS-2022S2/proyecto-LCMCR/blob/main/UI_3.png)


## VALIDACION Y VERIFICACION

### Verificar la especificación
Gaston

### Validar la solución con personas no involucradas en el proyecto
Gaston

## REFLEXION

### Detalle del trabajo individual
Puesta en comun

### Técnicas aplicadas y aprendizajes
Puesta en comun





