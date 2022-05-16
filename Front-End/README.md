# Front-End Oceanautas

Este proyecto consiste en el frontend de Oceanautas el cual está construido en VueJS y con estilos en CSS

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
