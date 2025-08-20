import { createContext, useContext, useState, useEffect } from 'react';

const ContextoUnidades = createContext();

export const useUnidades = () => {
  const contexto = useContext(ContextoUnidades);
  if (!contexto) {
    throw new Error('useUnidades debe usarse dentro de ProveedorUnidades');
  }
  return contexto;
};

export const ProveedorUnidades = ({ children }) => {
  const [unidad, setUnidad] = useState(() => {
    const unidadGuardada = localStorage.getItem('unidadTemperatura');
    return unidadGuardada || 'celsius';
  });

  useEffect(() => {
    localStorage.setItem('unidadTemperatura', unidad);
  }, [unidad]);

  const cambiarUnidad = (nuevaUnidad) => {
    setUnidad(nuevaUnidad);
  };

  const convertirTemperatura = (tempCelsius) => {
    if (unidad === 'fahrenheit') {
      return Math.round((tempCelsius * 9/5) + 32);
    }
    return Math.round(tempCelsius);
  };

  const obtenerSimbolo = () => {
    return unidad === 'celsius' ? '°C' : '°F';
  };

  return (
    <ContextoUnidades.Provider value={{ 
      unidad, 
      cambiarUnidad, 
      convertirTemperatura, 
      obtenerSimbolo 
    }}>
      {children}
    </ContextoUnidades.Provider>
  );
};
