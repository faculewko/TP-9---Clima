import { createContext, useContext, useState, useEffect } from 'react';

const ContextoTema = createContext();

export const useTema = () => {
  const contexto = useContext(ContextoTema);
  if (!contexto) {
    throw new Error('useTema debe usarse dentro de ProveedorTema');
  }
  return contexto;
};

export const ProveedorTema = ({ children }) => {
  const [temaOscuro, setTemaOscuro] = useState(() => {
    const temaGuardado = localStorage.getItem('temaOscuro');
    return temaGuardado ? JSON.parse(temaGuardado) : false;
  });

  useEffect(() => {
    localStorage.setItem('temaOscuro', JSON.stringify(temaOscuro));
  }, [temaOscuro]);

  const alternarTema = () => {
    setTemaOscuro(!temaOscuro);
  };

  return (
    <ContextoTema.Provider value={{ temaOscuro, alternarTema }}>
      {children}
    </ContextoTema.Provider>
  );
};
