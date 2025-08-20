const API_KEY = '464afa6a006ec7a9fc8fafbea316e58c'; // Reemplazada con tu API key de OpenWeatherMap
const URL_BASE = 'https://api.openweathermap.org/data/2.5';

export const obtenerClimaPorCiudad = async (ciudad) => {
  try {
    const respuesta = await fetch(
      `${URL_BASE}/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`
    );
    
    if (!respuesta.ok) {
      if (respuesta.status === 404) {
        throw new Error('Ciudad no encontrada');
      }
      throw new Error('Error al obtener el clima');
    }
    
    const datos = await respuesta.json();
    return transformarDatosClima(datos);
  } catch (error) {
    throw error;
  }
};

export const obtenerClimaPorCoordenadas = async (lat, lon) => {
  try {
    const respuesta = await fetch(
      `${URL_BASE}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`
    );
    
    if (!respuesta.ok) {
      throw new Error('Error al obtener el clima por ubicación');
    }
    
    const datos = await respuesta.json();
    return transformarDatosClima(datos);
  } catch (error) {
    throw error;
  }
};

const transformarDatosClima = (datos) => {
  return {
    ciudad: datos.name,
    pais: datos.sys.country,
    temperatura: datos.main.temp,
    sensacion: datos.main.feels_like,
    humedad: datos.main.humidity,
    presion: datos.main.pressure,
    viento: datos.wind.speed,
    descripcion: datos.weather[0].description,
    icono: datos.weather[0].icon,
    coordenadas: {
      lat: datos.coord.lat,
      lon: datos.coord.lon
    },
    amanecer: new Date(datos.sys.sunrise * 1000),
    atardecer: new Date(datos.sys.sunset * 1000),
    zonaHoraria: datos.timezone
  };
};
