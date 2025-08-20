import { useState } from 'react';
import { useClima } from '../contextos/ContextoClima';
import { obtenerClimaPorCiudad } from '../servicios/servicioClima';

const BuscadorClima = () => {
  const [ciudad, setCiudad] = useState('');
  const { guardarClima, setCargando, setError, limpiarError } = useClima();

  const manejarBusqueda = async (e) => {
    e.preventDefault();
    if (!ciudad.trim()) return;

    setCargando(true);
    setError(null);

    try {
      const datosClima = await obtenerClimaPorCiudad(ciudad);
      guardarClima(datosClima);
      setCiudad('');
    } catch (error) {
      setError(error.message);
      guardarClima(null);
    } finally {
      setCargando(false);
    }
  };

  const manejarUbicacion = () => {
    if (!navigator.geolocation) {
      setError('La geolocalización no está disponible en tu navegador');
      return;
    }

    setCargando(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (posicion) => {
        try {
          const { latitude, longitude } = posicion.coords;
          const datosClima = await obtenerClimaPorCoordenadas(latitude, longitude);
          guardarClima(datosClima);
        } catch (error) {
          setError('Error al obtener el clima de tu ubicación');
          guardarClima(null);
        } finally {
          setCargando(false);
        }
      },
      (error) => {
        setError('No se pudo obtener tu ubicación');
        setCargando(false);
      }
    );
  };

  return (
    <div className="buscador-clima">
      <form onSubmit={manejarBusqueda} className="formulario-busqueda">
        <input
          type="text"
          value={ciudad}
          onChange={(e) => {
            setCiudad(e.target.value);
            limpiarError();
          }}
          placeholder="Buscar ciudad..."
          className="input-busqueda"
        />
        <button type="submit" className="boton-buscar">
          Buscar
        </button>
      </form>
      <button onClick={manejarUbicacion} className="boton-ubicacion">
        Usar mi ubicación
      </button>
    </div>
  );
};

export default BuscadorClima;
