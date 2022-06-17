# acronex-backend

Aplicación server backend con node.js, Express y base de datos Mongo

## Requerimientos para su uso

*  docker
*  docker-compose

## Para uso local del proyecto

Por consola, ejecutar los siguientes comandos: 
```bash
# build de proyecto
$ docker-compose build

# levantar proyecto
$ docker-compose up #Si desea ejecutarlo en modo detach agregar la bandera "-d" al final del comando
```

## Observaciones

*  Se utilizo una base de datos nosql como mongo porque me pareció más conveniente para analisis de datos de gran tamaño como son los estados (que se cargan constantemente) de las máquinas
*  Por falta de tiempo faltaron las siguientes mejoras:
- Carga masiva de datos para pruebas
- Documentación de código
- Uso de validaciones (Se puede utilizar [joi](https://dev.to/itnext/joi-awesome-code-validation-for-node-js-and-express-35pk))
- Tratamiento de errores
- No se desplego la aplicacion en un host
- No se cambio las URLs, se utlizan con http://localhost:PUERTO/

## Archivo insomnia

Por falta de tiempo no pude hacer una carga masiva de datos para pruebas pero se agrego archivo Insomnia para agilizar la carga.


