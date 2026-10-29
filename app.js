const config = window.LAB_CONFIG;
const API_URL = `${config.apiBaseUrl.replace(/\/$/, '')}/api/mensaje`;
const boton = document.getElementById('consultar');
const resultado = document.getElementById('resultado');
const estado = document.getElementById('estado');
const detalle = document.getElementById('detalle');
document.getElementById('endpoint').textContent = API_URL;
document.getElementById('entorno').textContent = config.environment === 'local'
  ? 'Prueba local · publicación en la nube pendiente'
  : 'Frontend publicado · API configurada en Render';

boton.addEventListener('click', async () => {
  boton.disabled = true;
  resultado.textContent = 'Consultando...';
  estado.textContent = 'En curso';
  detalle.textContent = 'Esperando la respuesta del backend.';
  const inicio = performance.now();
  try {
    const respuesta = await fetch(API_URL, { cache: 'no-store', signal: AbortSignal.timeout(90000) });
    if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
    const datos = await respuesta.json();
    resultado.textContent = JSON.stringify(datos, null, 2);
    estado.textContent = `HTTP ${respuesta.status}`;
    detalle.textContent = `GET completado en ${Math.round(performance.now() - inicio)} ms · ${new Date().toLocaleString('es-GT')}`;
  } catch (error) {
    estado.textContent = 'Error de conexión';
    resultado.textContent = 'No se pudo consultar la API: ' + error.message;
    detalle.textContent = 'Compruebe la URL y el estado del backend. Un servicio gratuito en reposo puede tardar en iniciar.';
  } finally {
    boton.disabled = false;
  }
});
