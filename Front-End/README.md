# Front-End Oceanautas

Este proyecto consiste en el frontend de Oceanautas el cual está construido en VueJS y con estilos en CSS


## Wireframe del proyecto

# Homepage

![image](https://user-images.githubusercontent.com/99231889/168508622-56c4c87c-a03e-489c-b695-eb866ac68bfb.png)

# About us
![image](https://user-images.githubusercontent.com/99231889/168508674-0008eaa0-06ca-4146-8463-5f801e809eaf.png)

# Log In 
![image](https://user-images.githubusercontent.com/99231889/168508753-e2ba6da6-dbbb-4cd3-a702-85f452ec50a0.png)
# Administrator
![image](https://user-images.githubusercontent.com/99231889/168509878-acc59b2c-2dc9-4694-8046-123768645456.png)

# Volunteer
![image](https://user-images.githubusercontent.com/99231889/168509911-e3fef5f7-8a78-40a5-9c43-d4ec153edcb1.png)

# User
![image](https://user-images.githubusercontent.com/99231889/168510006-994b1cd2-ded7-4561-8daf-bfef7e2dccd1.png)






## Correr el proyecto

- Entorno de desarrollo

`npm run dev`

- Para producción

`npm run build`

## Estructura del proyecto

```
├─ .gitignore                   /*Archivos a ser ignorados por git*/
├─ Front-End
   ├─ .eslintrc.js              /*Archivos a ser ignorados*
   ├─ .prettierrc
   ├─ volunteerdashboard.html
   ├─ admindashboard.html
   ├─ index.html
   ├─ loginadmin.html
   ├─ package-lock.json
   ├─ package.json
   ├─ vite.config
   ├─ src
      ├─ assets
         ├─ admin.css
         ├─ base.css
         ├─ login.css
         ├─ volunteer.css
      ├─ components
         ├─ IncidentItem.vue
         ├─ MapComponent.vue
      ├─ App.vue
      ├─ main.js
   ├─ public
      ├─ favicon.ico
   ├─ node_modules             /*Archivos a ser ignorados*
```

## Dependencias utilizadas

- **leaflet - 1.8.0**
- **vuejs - 3.2.33**
