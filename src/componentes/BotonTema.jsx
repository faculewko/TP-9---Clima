import { useTema } from '../contextos/ContextoTema';

const BotonTema = () => {
  const { temaOscuro, alternarTema } = useTema();

  return (
    <button 
      onClick={alternarTema} 
      className={`boton-tema ${temaOscuro ? 'oscuro' : 'claro'}`}
      aria-label={`Cambiar a tema ${temaOscuro ? 'claro' : 'oscuro'}`}
    >
      {temaOscuro ? '🌞' : '🌙'}
      <span className="texto-boton">
        {temaOscuro ? 'Modo Claro' : 'Modo Oscuro'}
      </span>
    </button>
  );
};

export default BotonTema;
