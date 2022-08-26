# Lazyload

Es un método propio de React, que hay que importar. 
  *import { lazy } from 'react';*

En nuestro componente de routas donde queremos cargar nuestro lazy componente se cargará el método con la ruta del componente. Para poder importar el componente éste tiene que estar exportado por defecto. 

## Etiqueta <suspense>
Permite mostar un mensaje / loading mientras se cargan los lazy componentes. Cuando termina de cargar, muestra la ruta correspondiente. 
<suspense></suspense> engloba al <BrowserRouter>

Como propiedad hay que añadirle un fallback={} que contendrá el componente que queramos mostrar mientras se carga o se puede poenr dentro una etiqueta. por ejemplo *fallback={<span>Loading...</span>}*

## Cambiar el nombre del chunk
En el método lazy donde se importa el componente hay que poner el siguiente comentario: 
  /* webpackChunkName:"Nombre que se le quiera poner al chunk" */ 