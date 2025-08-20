import { createContext, useContext, useState } from 'react';

const ContextoClima = createContext();

export const useClima = () => {
  const contexto = useContext(ContextoClima);
  if (!contexto) {
    throw new Error('useClima debe usarse dentro de ProveedorClima');
  }
  return contexto;
};

export const ProveedorClima = ({ children }) => {
  const [climaActual, setClimaActual] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const guardarClima = (datosClima) => {
    setClimaActual(datosClima);
  };

  const limpiarError = () => {
    setError(null);
  };

  return (
    <ContextoClima.Provider value={{
      climaActual,
      cargando,
      error,
      guardarClima,
      setCargando,
      setError,
      limpiarError
    }}>
      {children}
    </ContextoClima.Provider>
  );
};
