# Burger Queen.
# PanD'monium.:fork_and_knife:
  
## Link de Presentación

[Segundo Sprint - Super Squad](https://docs.google.com/presentation/d/16P9f-oEIehRiQct_e6OcknuabbNu9bI1EbAjycLLmLM/edit#slide=id.g6395215ffb_0_25)

## Definición del producto.

 
Imaginen que existe un lugar llamado Pan D'monium en donde pueden comer delicioso, sin maltrato, ni sacrificio animal; que también en este lugar pueden encontrar variedad de alimentos saludables y no solo simples ensaladas. Ahora imaginen que existe un SuperSquad que tiene un superpoder llamado React que ayuda a cuidar el planeta, uniendo fuerzas con Pan D'monium ¡Pues no lo imaginen, porque es real!En el SuperSquad creamos un sistema para que el equipo de Pan D'monium pueda dar seguimiento y tener el control de sus órdenes de inicio a fin dando un mejor servicio a sus comensales.

También una de nuestras prioridades es evitar la generación de basura, evitando el uso de papel y así cuidando el planeta. Todo esto de forma rápida y eficiente. Además; por si fuera poco, con esto la/s administradora/s del lugar tendrán toda la data a su alcance para generar nuevas y mejores estrategias de marketing o en lo que ella la quiera la quiera utilizar.

![Alt](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

  

## Historias de Usuario.


#### [Historia de usuario 1] Mesero/a debe poder entrar a la aplicación.

Yo como mesero debo de poder entrar a la aplicación con un código personalizado, para poder tomar órdenes.  

##### Criterios de aceptación:

- Debe de contar con un código válido para ingresar a la aplicación.

##### Definición de terminado:

- Debe de haber recibido un código para ingresar a la aplicación y debe ser redireccionado a su área de trabajo.

  

#### [Historia de usuario 2] Mesero/a debo poder seleccionar o deseleccionar mesa o lugar de la barra donde él se encuentra el comensal.

Yo como mesero debe de seleccionar la mesa o lugar de barra donde se encuentra el comensal para poder tener control de las órdenes y a donde entregarlas.

##### Criterios de aceptación:

- Debe de contar con la distribución del área de trabajo y que sea entendible.

- Debe de contar con la distribución de mesas y lugares de barra actualizados.

- Podrá seleccionar el número de mesa o el número de lugar de la barra.

- En caso de que el comensal se cambie de lugar, el mesero podrá volver a seleccionar el lugar a donde el comensal se cambió.

- Podrá ingresar el nombre del comensal al cual se registrará la mesa.

- Podrá ingresar el número de comensales.

##### Definición de terminado:

- El mesero puede modificar la mesa o el lugar de barra donde el comensal/les se encuentran, puede ingresar el nombre del comensal al cual quedara registrada la cuenta y podra ingresar el número de comesales por orden de alimentos.

  

#### [Historia de usuario 3] Mesero/a debe poder tomar pedido de cliente.

Yo como mesero/a quiero tomar el pedido de un cliente para no depender de mi mala memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y que se puedan ir preparando en orden.

##### Criterios de aceptación

- Anotar nombre de cliente.

- Agregar productos al pedido.

- Eliminar productos.

- Ver resumen y el total de la compra.

- Enviar pedido a cocina (guardar en alguna base de datos).

- Se ve y funciona bien en una _tablet_

##### Definición de terminado

- Debes haber recibido _code review_ de al menos una compañera.

- Haces _test_ unitarios y, además, has testeado tu producto manualmente.

- Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.

- Desplegaste tu aplicación y has etiquetado tu versión (git tag).

  

## Sobre el diseño

  

El restaurante Pan D'Monium tiene el objetivo de estandarizar la forma de tomar pedidos y que eso se refleje en el tiempo de entrega tanto en sucursal para posteriormente implementarlo en el resto de la cadena, así también facilitar la cobranza e impactar el trabajo en cocina.

## Prototipado.

Para más detalles sobre el prototipo se adjunta el link en [Marvel] del proyecto (https://marvelapp.com/cdg1d4a/screen/61098993).

1. El usuario ingresa un código, para acceder a la aplicación.


![Proto1](https://github.com/MercedesDavila/Pandmonium/blob/branch-Mercedes/img/proto_1.JPG?raw=true)

 
3. Si el login fue correcto el mesero visualizará la pantalla para elección de barra o mesa, podrá ingresar el número de comensales y el nombre al cual se registrará la mesa o lugar en la barra según sea el caso.

![Proto2](https://github.com/MercedesDavila/Pandmonium/blob/branch-Mercedes/img/proto_2.JPG?raw=true)

3. En el menú se resaltara el icono que fue seleccionado y aparecerá la lista de alimentos que corresponde a cada icono, se podrán agregar comentarios respecto a la preparación de los alimentos.

![Proto3](https://github.com/MercedesDavila/Pandmonium/blob/master/img/proto_3.JPG?raw=true)

4. Se podrá visualizar la fecha, el concepto y el precio de los productos anteriormente seleccionados, se podrá eliminar y/o editar un producto y se generará el importe a pagar.

![Proto4](https://github.com/MercedesDavila/Pandmonium/blob/master/img/proto_4.JPG?raw=true)

 
5. El mesero podrá visualizar las mesas ocupadas y al dar click en cada sección se visualizará la información de pedidos en cada mesa.

![Proto5](https://github.com/MercedesDavila/Pandmonium/blob/master/img/proto_5.JPG?raw=true)

![Proto6](https://github.com/MercedesDavila/Pandmonium/blob/master/img/proto_6.JPG?raw=true)

  
  

## Plan de Acción.:bookmark_tabs:

Para este proyecto se siguió el siguiente plan de acción:

### Inicializar el proyecto.:computer:

- [x] Forkear y clonar repositorio de [Proyecto-Padmonium](https://github.com/MercedesDavila/Pandmonium).
- [x] Instalar el framework que se utilizara (React).
- [x] Crear proyecto en Firebase.
- [x] Dar permisos a los integrantes del equipo en la consola de Firebase.
- [x] Habilitar Firestore(Base de Datos).
- [x] Instalar línea de comando de Firebase.
- [x] Desplegar: `firebase deploy`

### Diseño de la Aplicación.

- [x] Entender el prototipo elaborado por las compañeras de UX.
- [x] Entender el flujo del proyecto.
- [x] Crear las historias de usuario que respondan a las necesidades encontradas y soluciones propuestas.

### Primeros Pasos.

- [x] Organización del proyecto.
- [x] Leer documentación de React.
- [x] Instalar React.
- [x] Instalar Firebase y crear Base de Datos.
- [x] Instalar react-router-dom.
- [x] Entender Boilerplate del proyecto.
- [x] Crear primer "Hola Mundo".

### Comenzar a programar.

- [x] Dividir tareas.
- [x] Entender componentes/estados.
- [x] SPA.
- [x] Verificar que `Firebase deploy`funciona.
- [x] Tenemos todo listo para empezar a Programar.

# Desarrollo. :computer:

Herramientas utilizadas para el desarrollo de este proyecto:
- JavaScript.
- React.
- CSS.
- App Icon.

Construido con:

- Visual Studio Code, editor de código fuente.

## Otros recursos.:file_folder:

#### Frameworks / libraries.

- Documentación de [React](https://reactjs.org/), también se encuentra la versión de [React en español]
- [App Icon](https://appicon.co/#app-icon) Crear un ícono para poder agregar la pantalla al home de la tablet.

#### Herramientas.

- [npm-scripts](https://docs.npmjs.com/misc/scripts)
- [Babel](https://babeljs.io/)
- [webpack](https://webpack.js.org/)

#### PWA.

- [Tu primera Progressive Web App - Google developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
- [Progressive Web Apps - codigofacilito.com](https://codigofacilito.com/articulos/progressive-apps)
- [offlinefirst.org](http://offlinefirst.org/)
- [Usando Service Workers - MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Cómo habilitar datos sin conexión - Firebase Docs](https://firebase.google.com/docs/firestore/manage-data/enable-offline?hl=es-419)
  
#### Serverless.

- [Qué es eso de serverless? - @PamRucinque en Medium](https://medium.com/@PamRucinque/qu%C3%A9-es-eso-de-serverless-f4f6c8949b87)
- [Qué es Serverless? | FooBar - YouTube](https://www.youtube.com/watch?v=_SYHUpLi-2U)
- [Firebase](https://firebase.google.com/)
- [Serverless Architectures - Martin Fowler](https://www.martinfowler.com/articles/serverless.html)

#### Cloud functions.

- [Cloud functions - Firebase Docs](https://firebase.google.com/docs/functions/?hl=es-419)
  

## Autores. :pencil2:

Este proyecto fue desarrollado e implementado por:

- **Mercedes Dávila Vázquez** [Github](https://github.com/MercedesDavila)
- **Gabriela Bárcena Villanueva**[Github](https://github.com/gbarcenav)
- **Berenice Ramos** [Github](https://github.com/Bere333)
- **Ivon Garduño Crespo** [Github](https://github.com/BLANK-TECH)
- **Tania Juarez** [Github](https://github.com/TaniaEJuarez)

  
##  ¿Cómo ejecutar este proyecto?

Solo necesitas un navegador y dar click en el siguiente link:

[Pan D'monium](https://mercedesdavila.github.io/Pandmonium/).



## Checklist:ballot_box_with_check:

### General

* [x] Producto final sigue los lineamientos del diseño.

### `README.md`

* [x] Documenta proceso de diseño.
* [ ] Incluye info para developers (deps, instalación, uso, despliegue, testing,...).


### Lighthouse (opcional)
  
* [x] 80% o más en sección _Performance_.
* [x] 80% o más en sección _Progressive Web App_.
* [x] 80% o más en sección _Accessibility_.
* [x] 80% o más en sección _Best Practices_.
  
### Tests
 
* [ ] 70% o más en cobertura de _statements_.
* [ ] 70% o más en cobertura de _functions_.
* [ ] 70% o más en cobertura de _lines_.
* [ ] 70% o más en cobertura de _branches_.
  
### UX

* [x] Se _ve_ bien y _funciona_ bien en los dispositivos acordados.
* [ ] Se puede _agregar a la pantalla de inicio_ como web app (tiene manifest, íconos, ...) en iOS y Android.
* [x] Uso fácil en pantallas táctiles (touch screens).
* [ ] Estado actual del pedido siempre visible mientras tomamos un pedido.
