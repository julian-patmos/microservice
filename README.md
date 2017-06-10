# Microservicio para el codigo fasecolda

<br/>

## Mongo DB

#### Se realiza la instalacion de mongoDB

[Instalacion de mongo](https://docs.mongodb.com/manual/installation/)

#### Acceder al shell de mongoDB y crear a la bases de datos

* /usr/bin/mongo
* use microservice

<br/>

## CSV to JSON

#### Instalar el CSVtojson

npm i -g csvtojson

<blockquote>Esto nos ayudara a convertir el CSV que se importa a JSON para poder manejar mejor los datos contenidos en este</blockquote>

## Sails JS

Instalar [Sails](http://sailsjs.org)

#### Instalamos el driver para la conexión a mongoDB

npm install sails-mongo

#### Iniciamos sails

sails lift

<br/>

## URL's de la API

<br/>

#### URL para actualizar la base de datos

(base URL)/fasecoldafile

#### Desde aqui nos mostrara una vista de lo que se puede consultar y esta realizada con AngularJS

(base URL)/findcodigo


<br/>


#### URL que presta el servicio 

(base URL)/fasecolda/findby

<br/>

##### Parametros de busqueda

| Nombre        | Funcion                                                             | Tipo     |
| ------------- |---------------------------------------------------------------------| --------:|
| option        | Texto a buscar en los campos de cod_fasecolda o referencia_vehiculo | String   |
| limit         | limite de coincidencia encontradas                                  | Integer  |

<br/>

Ejemplo

Buscar el carro ` Renault logan expression 1.6 cc ` con codigo fasecolda `8001100` la se puede realizar de las siguientes formas:
***

* Buscar por referencia con un limite de 10 registros encontrados

```javascript
{
    option : "Renault%expression%1.6 cc",
    limit : 10
}
```

* Buscar por el codigo directamente

```javascript
{
    option : "8001100",
    limit : 15
}
```
