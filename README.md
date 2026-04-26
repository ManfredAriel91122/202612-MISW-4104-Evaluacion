# Evaluacion Practica Angular

![Angular](https://img.shields.io/badge/Angular-21.2.10-DD0031?logo=angular&logoColor=white)
![Angular CLI](https://img.shields.io/badge/Angular%20CLI-21.2.8-C3002F?logo=angular&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-24.14.1-339933?logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-11.11.0-CB3837?logo=npm&logoColor=white)
![Conventional Commits](https://img.shields.io/badge/commits-Conventional%20Commits-FE5196?logo=conventionalcommits&logoColor=white)

Aplicacion desarrollada con Angular para listar usuarios obtenidos desde una fuente remota. La interfaz muestra tarjetas de perfil, paginacion, etiquetas visuales por rol y efectos sutiles de interaccion.

## Tecnologias

- Angular 21.2.10
- Angular CLI 21.2.8
- Node.js 24.14.1
- npm 11.11.0
- TypeScript 5.9.3
- RxJS 7.8.2

## Requisitos

Antes de ejecutar el proyecto, verifica que tengas instalada la version compatible de Node.js:

```bash
node --version
```

La version usada en este proyecto es:

```bash
v24.14.1
```

## Instalacion

Instala las dependencias del proyecto:

```bash
npm install
```

## Servidor de desarrollo

Ejecuta la aplicacion en modo desarrollo:

```bash
npm start
```

Luego abre el navegador en:

```text
http://localhost:4200/
```

La aplicacion se recarga automaticamente cuando modificas archivos del proyecto.

## Compilacion

Para generar una version de produccion:

```bash
npm run build
```

Los archivos compilados se generan en la carpeta `dist/`.

## Pruebas

Para ejecutar las pruebas unitarias:

```bash
npm test
```

## Convencion de commits

Este proyecto usa **Conventional Commits** para mantener un historial claro y facil de leer.

Formato recomendado:

```text
type: descripcion breve del cambio
```

Tipos comunes:

- `feat`: agrega una nueva funcionalidad.
- `fix`: corrige un error.
- `style`: cambios visuales o de formato que no modifican la logica.
- `refactor`: mejora interna del codigo sin cambiar el comportamiento.
- `test`: agrega o ajusta pruebas.
- `docs`: cambios en documentacion.
- `chore`: tareas de mantenimiento.

Ejemplos:

```text
feat: agregar listado paginado de usuarios
style: mejorar visualmente las etiquetas de rol
fix: corregir navegacion entre paginas
docs: actualizar instrucciones del proyecto
```
