# Ciu práctica 8
p5.js
## Autor 
**Doramas Báez Bernal** <br/>
Correo: doramas.baez101@alu.ulpgc.es

## Imagen
<div align="center">
  <img src="paint.png" alt="captura de la práctica 8">
  <p align="center">
    Figura 1: interfaz de la aplicacion
  </p>
</div>

## Índice
* [Introducción](#introducción)
* [Dependencias](#dependencias) 
* [Desarrollo](#desarrollo)
    * [Información general](#informaciónGeneral)
    * [Pincel](#pincel)
* [Referencias](#referencias)

## Introducción
El objetivo de esta práctica es realizar una aplicación similar al paint, es decir, el usuario debe poder pintar sobre un lienzo y como requisito mínimo se pide poder cambiar el color y el grosor del trazo. Además, la idea es familiarizarnos con la librearia de javaScript p5.js.


## Dependencias
Realmente no existen dependencias como tal, pero es necesario, poder utilizar el navegador o cualquier programa capaz de ejecutar html.
 

## Desarrollo

### Información general <a id="informaciónGeneral"></a>

Hemos implementado los dos requisitos, que son, poder cambiar el color y el grosor del trazo. Además, como añadido, se ha posibilitado el uso de una goma y de borrar o crear un nuevo lienzo. Para interactuar con la aplicación, solo debemos clicar en las acciones que queramos realizar. Como es obvio, para pintar debemos clickar sobre el lienzo y arrastrar el ratón.

### Pincel <a id="pincel"></a> 
El pincel es nuestra herramienta principal, y se podrá modificar su comportamiento.
 - Color: para permitir escoger el color que queremos utilizar, basicamente se ha utilizado createColorPicker. Para darle un atractivo mayor, se ha decidido bindear dicho color picker a un botón.
 - Grosor: disponemos de un botón que al clicar en el se aumentará el grosor. Llegados a un tamaño determinado en este caso 20, se reducirá a 1 dicho grosor.


## Referencias

* [Guion de prácticas](https://cv-aep.ulpgc.es/cv/ulpgctp20/pluginfile.php/126724/mod_resource/content/22/CIU_Pr_cticas.pdf)
* [editorP5JS](https://editor.p5js.org/)
