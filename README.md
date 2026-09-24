# La Huerta de Barrio

Web de presentación para una pequeña tienda de frutas y verduras de temporada. El proyecto pone en valor el producto local y a las personas que lo cultivan.

## Qué incluye

- **Inicio:** presentación de la huerta y acceso a la selección de productos.
- **Productos:** catálogo visual de productos de temporada con un carrusel.
- **El proyecto:** información sobre la forma de trabajar de la tienda.
- Diseño adaptable, navegación móvil y selector de tema claro/oscuro.

La web está construida con Laravel y vistas Blade. Los productos y sus imágenes están definidos actualmente en las vistas; no hay catálogo dinámico ni proceso de compra.

## Tecnologías

- PHP 8.3 o superior
- Laravel 13
- Node.js y npm
- Vite y Tailwind CSS 4
- SQLite como base de datos predeterminada

## Requisitos previos

Instala PHP (con las extensiones requeridas por Laravel), [Composer](https://getcomposer.org/), [Node.js](https://nodejs.org/) y npm. La configuración inicial usa SQLite y no requiere un servidor de base de datos aparte.

## Instalación

Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone <URL_DEL_REPOSITORIO>
cd huertadebarrio
```

Instala las dependencias y configura la aplicación:

```bash
composer run setup
```

Este comando instala las dependencias de PHP y JavaScript, crea `.env` a partir de `.env.example`, genera la clave de Laravel, ejecuta las migraciones y compila los recursos del frontend.

## Desarrollo

Inicia el servidor y Vite con:

```bash
composer run dev
```

Abre la dirección local que muestra Laravel (normalmente `http://localhost:8000`). El comando también inicia el proceso de escucha de la cola configurado por el proyecto.

Para compilar los recursos para producción:

```bash
npm run build
```

## Rutas

| Ruta | Página |
| --- | --- |
| `/` | Inicio |
| `/products` | Productos de temporada |
| `/project` | El proyecto |

## Pruebas

Ejecuta la suite de pruebas con:

```bash
composer run test
```

## Estructura del proyecto

- `app/Http/Controllers/PageController.php`: controladores de las páginas.
- `routes/web.php`: rutas web.
- `resources/views/`: plantillas Blade y componentes de página.
- `resources/css/` y `resources/js/`: estilos y comportamiento del frontend.
- `public/img/`: imágenes del sitio.
