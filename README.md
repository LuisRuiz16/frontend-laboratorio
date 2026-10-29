# Frontend del laboratorio

Interfaz HTML, CSS y JavaScript que consulta `GET /api/mensaje`.

## Prueba local

Ejecutar el backend en el puerto 3000 y servir esta carpeta con un servidor estático. `config.js` apunta a `http://localhost:3000` y la página identifica explícitamente la prueba local.

## Despliegue en Vercel

1. Importar este repositorio desde GitHub.
2. Framework Preset: Other.
3. Agregar API_BASE_URL con la URL HTTPS real de Render, sin `/api/mensaje` al final.
4. Build Command: `node build.js`.
5. Output Directory: `dist`.
6. Desplegar y pulsar Consultar backend en la URL pública.

La variable API_BASE_URL solo contiene una dirección pública. El build la escribe en config.js para que el navegador pueda usarla; no colocar claves ni secretos. Esta pequeña compilación permite cumplir el objetivo de configurar una variable de entorno. No instala frameworks ni dependencias adicionales.

El estado HTTP y el tiempo de respuesta solo se muestran después de una consulta real. Render Free puede suspender el servicio por inactividad y tardar al responder de nuevo.
