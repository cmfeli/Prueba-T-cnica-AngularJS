# Prueba técnica - Angular JS

_Pequeño y simple proyecto para recuperar mediante promesas, información sobre películas._
_Posibilidad de loguearse para almacenar las películas deseadas en favoritos._

* AngularJS
* Promesas
* Bootstrap
* Gestión de localStorage y sessionStorage


## Requisitos e instalación

_Para ejecutar esta prueba es necesario descargarse y guardar en una misma carpeta los siguientes archivos._

```
index.html
js.js
css.css
```

_No requiere de la descarga de librerías externas debido a que todos están siendo llamadas en el head de index.html._


## Ejecución de pruebas

_Las pruebas a realiza consiste en la búsqueda de películas y añadir las mismas a favoritos. Es importante comprobar el funcionamiento estando logueado y no logueado. La diferencia radica en que si no estamos logueados, no podremos gestionar favoritos._

_Nota: para facilitar estas pruebas el login sólo especifica un nombre de usuario el cual además no es comparado con ningún valor._


## Decisiones de diseño

* El proyecto engloba el uso constante de AngularJS para su funcionamiento.
* Para la realización del login se usa la sessionStorage.
* Para la recuperación de datos se utilizan una promesa, con la ayuda de $http de AngularJS.
* Para los favoritos se usa la localStorage.

_Nota: sessionStorage y localStorage son usadas para la simulación de conexión con un hipotético servidor._


## Librerías externas usadas

```
Jquery v3.3.1
Angularjs v1.6.9
Angularjs cookies v1.6.9 (opcinal, explicado en Alternatiavas estudiadas)
Bootstrap v4.1.3
Fontawesome v5.6.3
```

### Alternativas estudiadas

_1. Posibilidad de cambiar el uso de sessionStorage por las cookies de AngularJS, modificando para ello la declaración del módulo y del controlador. Además esta posibilidad permite mantener la sesion durante un tiempo indicado._

_2. Posibilidad de en lugar permitir al usuario escribir el nombre de la película, realizar peticiones mediante un array de un grupo de películas dadas y mostrarlas haciendo uso de ng-repeat con filtros y ordenaciones._
