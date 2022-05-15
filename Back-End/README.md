# API Oceanautas 

## Requerimientos:

Crear una API como solución tecnologica para incluir la tecnologia en los problemas de los oceanos.

## Propuesta:

Este repositorio es la implementacón de una API para llevar el control de reportes de contaminantes en los oceanos generados por organizaciones. Esto atraves de un modelo que contempla 3 tipos de usuario:

```mermaid
graph LR
    Usuario --> B(Usuario que puede postularse para ser voluntario para ayudar a recuperar)
    Organizacion --> C(Usuario que reporta los problemas encontrados en el oceano)
        Administrador --> D(Usuario que administra la comunidad)
``` 

Los usuarios interactuan de tal forma que un usuario puede crear algun reporte de contaminacion y este se almacenara en la DB, mientras que algun otro usuario puede apoyar para erradicar el problema realizando una donación o siendo voluntario. 

El diagrama entidad relacion del modelo entidad relacion propuesto que permita cumplir el requerimiento de interacción es el siguiente:

```mermaid
erDiagram
          REPORTES ||--o{ VOLUNTARIADO : tiene
          USUARIOS ||--o{ REPORTES : genera
          USUARIOS ||--o{ DONACIONES : hace
          USUARIOS ||--o{ VOLUNTARIADO : postula
          REPORTES ||--o{ DONACIONES : tiene
          
```

Mientras que el diagrama de la estructura de la API se muestra a continuación:

![Back-End](../images/5370c6214d2dafdc75084dcc1f83c62ae954516ea57eb098bb13a7193690403d.png)  

# Estructura del proyecto

```
LaunchX_Hackaton
├─ .gitignore                   /*Archivos a ser ignorados por git*/
├─ Back-End
│  ├─ .eslintrc.js              /*Archivos a ser ignorados*/
│  ├─ README.md
│  ├─ docs
│  │  └─ LaunchXHackaton.postman_collection.json  /*Colección de peticiones POSTMAN*/
│  ├─ lib                                          
│  │  ├─ app.js                 /*Servidor Express que contiene los endpoints*/
│  │  ├─ models                 /*Modelos para la conexion de la base de datos*/
│  │  │  ├─ donation.js
│  │  │  ├─ report.js
│  │  │  ├─ roles.js
│  │  │  ├─ user.js
│  │  │  └─ volunteer.js
│  │  ├─ modelsService          /*Controladores para comunicarse el servidor con la DB*/
│  │  │  ├─ donation.js
│  │  │  ├─ report.js
│  │  │  ├─ user.js
│  │  │  └─ volunteer.js
│  │  ├─ relations.js           /*Servicios para comunicarse con la base de datos*/
│  │  ├─ setup.js               /*Script para instalar la base de datos*/
│  │  └─ utils
│  │     ├─ config.js           /*Credenciales de la base de datos*/
│  │     └─ db.js               /*Instancia de la base de datos*/
│  ├─ package-lock.json
│  ├─ package.json
│  └─ test                      /*Carpeta de pruebas*/
│     ├─ app.test.js            /*Pruebas de enpoints*/
│     ├─ lib
│     │  └─ controllers
│     │     └─ user.test.js     /*Pruebas los controladores para la api*/
│     └─ utils
│        └─ configTest.js
```


# Como utilizar

* Clonar el repositorio
* Ingresar en Back-End Folder
* Instalar las dependencias NPM con el comando **npm init**
* Para instalar la base de datos se debe crear un archivo llamado **.env** en la raiz de la carpeta de BACK-END con la siguiente estructura

```
DB=[Nombre de la base de datos]
USDB=[Nombre del usuario de base de datos]
PSDB=[Contraseña de la base de datos]
HTDB=[Host de la base de datos]
PORTDB=[Puerto de la base de datos]
STDB=true
SECRET=[contraseña para generar tokens de acceso]
```
* Correr el archivo setup dentro de la carpeta de lib con el comando **node lib/setup.js** que instará la base de datos

![picture 4](../images/267cd4002e77b53ab4efe93964ac917efbe32439cb28b997b9d0d63c8f601e66.gif)  


* Una vez ejecutado el script de setup se puede iniciar el servidor express con el comando **npm run start** y se podra utilzar el servicio. En la parte inferior esta descrito con mas detalle el funcionamiento de los endpoints

![picture 5](../images/e471eeb929d56363f75326dba936f9ef09f1e393dc35a2da57955935227d3dcd.gif)  


# Pruebas

* Para ejecutar las pruebas se debe crear un archivo llamado **.env** en /test/ con la siguiente estructura

```
DB=[Nombre de la base de datos]
USDB=[Nombre del usuario de base de datos]
PSDB=[Contraseña de la base de datos]
HTDB=[Host de la base de datos]
PORTDB=[Puerto de la base de datos]
STDB=true
SECRET=[contraseña para generar tokens de acceso]
```

* La informacion puesta aqui sobreescribira la base de datos por lo que es recomendable probar con una base de datos de prueba.
* Para ejecutar las pruebas se ejecutará el comando **npm run test** que ejecutara un set de pruebas en jets


![picture 3](../images/8c9f5a23a31ab8d9e6bdf173a425b9ef33d6ef57c80bb5daab4feb232dda1116.gif)  


## Dependencias utilizadas
- **bcryptjs - V2.4.3**
- **dotenv - V16.0.1**
- **express - V4.18.1**
- **express -asyncify- V1.0.1**
- **jsonwebtoken - V8.5.1**
- **pg - V8.7.3**
- **pg-hstore- V2.3.4**
- **sequelize - V6.19.0**


## Dependencias de desarrollo utilizadas
- **eslint - V8.15.0**
- **jest - V28.1.0**
- **supertest - V6.2.**

## End-Points Implementados

Para probar los endpoints implementados es necesario reemplazar **{{url}}** por el host correspondiente o crear una variable de entorno en postman para poder ejecutar de forma correcta

![EndPoints](../images/c01028468160fe7dcaa183dd7789b450e03e17f813f8c2ba43031ad0b13f71e0.jpg)  

[Descarga colección de Postman](./docs/LaunchXHackaton.postman_collection.json)  

## End-point: **Main API**

Endpoint para probar que el servicio funcionara de forma correcta

### Method: **GET**
>```
>/api/
>```

![picture 6](../images/6b9b454c65c517f794718487021d426ffb927879585d961aee3ec4f6fcb1c199.png)  

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: **Registrar nuevo usuario**

EndPoint para Registrar un nuevo usuario al servicio

### Method: **POST**
>```
>/api/register
>```
### Body (**raw**)

```json
{
    "name": "Oceanauta22",
    "username": "Oceanauta22",
    "email": "test22@oceanauta.com",
    "password": "prueba",
    "role": ["admin"]
}
```
![picture 7](../images/6dcb6321f4cb80482b2ad42c4b8c2c684ae3729c928b664af40281b840eac0ab.png)  


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: **Iniciar Sesión**
### Method: **POST**

EndPoint para iniciar sesion en el servicio

>```
>/api/login
>```
### Body (**raw**)

```json
{
    "email": "test22@oceanauta.com",
    "password": "prueba"
}
```

![picture 8](../images/7fc2727fd980858e11541ea658ce0998ba9fbece1d7b3931fc1c3a4303b7c92e.png)  


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: **Obtener Usuarios**
### Method: **GET**
EndPoint para obtener una lista de todos los usuarios registrados

>```
>/api/usuarios
>```

![picture 9](../images/d3f81a3c02218edc4f62404a8d19e285574611c2aa3689a7579ace4843ac16a3.png)  


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: **Obtener lista de Organizaciones**
### Method: **GET**
EndPoint para obtener una lista de las organizaciones registradas
>```
>/api/organizaciones/
>```

![picture 10](../images/e2db992f6fbf341617aa8ef730f32f76c1aa3e59a93fbe61ce4f564c2f76c3d8.png)  


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: **Obtener Usuario**
### Method: **GET**
EndPoint para obtener la informacion de un usuario a partir de su ID asi como de las donaciones que ha realizado o si es voluntario en algun reporte
>```
>/api/usuarios/2beef41e-d2d5-42ce-bbc3-d6fc1c4a8932
>```

![picture 11](../images/599b8d8caa349c6b892c78907ba97c0cc6c374a038d3ee508ad68b08e82015eb.png)  


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: **Crear Reporte**
### Method: **POST**
EndPoint para crear un reporte con un nombre del problema, una descripción, la ubicación, el tipo de reporte que es y el usuario que crea el reporte. Permitiendo tener un control de quienes crean los reportes.
>```
>/api/reportes
>```
### Body (**raw**)

```json
{
   "name":"Derrame Pacifico",
   "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
   "lat":"50.5",
   "lon":"50.5",
   "type":"Derrame",
   "userId":"91da19f5-ae96-4bb7-9f0e-61b79e92fff6"
}
```
![picture 12](../images/bd88cdd8d59b91de29391ec32d4e2803bcfa991832e8d767502e0a0663c2887e.png)  


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: **Obtener Reportes**
### Method: **GET**
EndPoint para obtener todos los reportes registrados en el sistema
>```
>/api/reportes
>```

![picture 13](../images/09995be5c0f9630149be60d9db656d108b36aba591109366ec0f1f141acda72f.png)  


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: **Obtener Reporte**
### Method: **GET**
EndPoint para obtener un reporte a partir de su ID
>```
>/api/reportes/8fa50cd4-1784-407f-a1ed-d2b52232a936
>```
![picture 14](../images/a424b32bdd8c256c0158f2e97ce7e7be782298253b0f72feec61f3a7abf361e3.png)  


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: **Crear Donativo**
### Method: **POST**
EndPoint para que un usuario pueda crear una nueva donacion a algun reporte.
>```
>/api/donaciones
>```
### Body (**raw**)

```json
{
   "quantity":500,
   "reportId":"8fa50cd4-1784-407f-a1ed-d2b52232a936",
   "userId":"91da19f5-ae96-4bb7-9f0e-61b79e92fff6"
}
```

![picture 15](../images/10170f5ee2c6a71ef68a19064369dacd3afe85c88c82a1302017cf105793fd83.png)  


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: **Obtener Donativos**
### Method: **GET**
EndPoint para obtener todos los donativos registrados en el sistema
>```
>/api/donaciones
>```
![picture 16](../images/c18ec23691fc530f447de3e76138682f03e0264f11345b0e9a6c78d3247b61b4.png)  


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: **Obtener Donativo con id**
### Method: **GET**
EndPoint para obtener la informacion de un donativo especifico a partir de su id
>```
>/api/donaciones/e8533c89-913e-4b98-908c-7b58092d93f0
>```

![picture 17](../images/4e2b39841c76a0ed698f0ec3957805e93bdeb52e4c4e98b81f2891a8d42ce81f.png)  


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: **Obtener lista de Donativos de un Reporte**
### Method: **GET**
Enpoint para obtener todos los donativos realizado a un reporte por medio de su id
>```
>/api/donaciones/reporte/2024d3a2-5863-4427-bd67-5afde347b3ee
>```
![picture 18](../images/1ad7f6f2522d336f6c37a496e281e01e16c58f983a6dd1ad33c1211118c7db7e.png)  


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: **Obtener Lista de donativos de un Usuario**
### Method: **GET**
EndPoint para obtener todos los donativos realizados por un usuario
>```
>/api/usuarios/donaciones/522d43a7-8379-42de-aef1-b65c79008e03
>```
![picture 19](../images/6ba2c2d161a8268bced82dde11367a5cc918a3a60e1c07a1cf67f5c89befe192.png)  


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: **Crear Voluntariado**
### Method: **POST**
EndPoint para registrarse como voluntario a algun reporte
>```
>/api/voluntarios
>```
### Body (**raw**)

```json
{
   "userId":"b47383b9-b456-432f-b714-5bb7ce0e040e",
   "reportId":"d5152bd3-cf3a-4b0d-86da-1b5f80e9800b"
}
```
![picture 20](../images/6b468dd23d8a9943bb2eb988834347b5244832d79ca0fc21d0f927c4ccd5dbfe.png)  


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: **Obtener Voluntarios**
### Method: **GET**
EndPoint para obtener todos los voluntarios regresando a que reporte corresponden y el usuario correspondiente
>```
>/api/voluntarios
>```
![picture 21](../images/ae349cd9e58642336d280dd78cc5b4b270245c2f3ed6a92ecf70de29d34aff40.png)  



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: **Obtener Lista de voluntariado de un reporte**
### Method: **GET**
EndPoint para obtener todos los voluntarios de un reporte en especifico
>```
>/api/usuarios/voluntario/a6305b13-8bf0-444b-a8a9-387da1160d60
>```

![picture 22](../images/b491ee032e1eab3dbd0a8c524308501b73841f4fadd6acf8b06c34cd64514690.png)  

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: **Obtener Lista de voluntariado de un Usuario**
### Method: **GET**
EndPoint para obtener la lista de los reportes a los que un usuario esta registrado como voluntario
>```
>/api/usuarios/voluntarios/581e0c78-9f8a-485b-b8de-2c32b383db42
>```
![picture 23](../images/9355ffd0b1d12b0b289c0c6fcb2c088d194d38a64957c8b75f732ddd80871060.png)  


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________


# Funciones por implementar y escalar
* Autenticación de las rutas
* Creación de enpoints para analizis de la información
* Servidor de sockets para enviar los reportes en tiempo real asi como las cantidades donadas y de voluntarios de cada reporte