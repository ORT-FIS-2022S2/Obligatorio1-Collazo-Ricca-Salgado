[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=10606028)

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

### Aplicar buenas practicas de versionado

Aplicar buenas prácticas de versionado en el desarrollo de software implica mantener un control sistemático y ordenado de los cambios realizados en el código fuente y en otros elementos del proyecto a lo largo del tiempo. Algunas implicaciones de esto son:

1. Control de cambios: Las buenas prácticas de versionado permiten realizar un seguimiento de los cambios que se realizan en el código fuente y otros elementos del proyecto. Esto ayuda a los desarrolladores a comprender los cambios realizados en el pasado y a mantener una visión general del estado actual del proyecto.

2. Colaboración: Las herramientas de control de versiones, como Git, permiten que múltiples desarrolladores trabajen en el mismo proyecto simultáneamente. El uso de buenas prácticas de versionado ayuda a evitar conflictos y a mantener la colaboración fluida y organizada.

3. Reversión: Las buenas prácticas de versionado permiten a los desarrolladores revertir los cambios realizados en el código fuente y otros elementos del proyecto en caso de que se produzca un error o un problema inesperado. Esto permite una recuperación rápida y eficiente del proyecto en caso de que algo salga mal.

4. Auditoría: Las buenas prácticas de versionado proporcionan un historial completo de los cambios realizados en el proyecto, lo que permite a los desarrolladores y otros interesados en el proyecto realizar una auditoría del código fuente y otros elementos. Esto ayuda a garantizar la calidad del código y a detectar cualquier problema potencial.

En resumen, aplicar buenas prácticas de versionado en el desarrollo de software ayuda a mantener un control ordenado y sistemático de los cambios realizados en el proyecto, fomenta la colaboración y permite la recuperación rápida y eficiente del proyecto en caso de problemas.

### Uso de ramas separadas de 'main'

### Resumen de commits y evolución del proyecto 


