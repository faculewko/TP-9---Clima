import { useClima } from './contextos/ContextoClima';
import { useTema } from './contextos/ContextoTema';
import BuscadorClima from './componentes/BuscadorClima';
import TarjetaClima from './componentes/TarjetaClima';
import SelectorUnidades from './componentes/SelectorUnidades';
import BotonTema from './componentes/BotonTema';
import './App.css';

function App() {
  const { climaActual, cargando, error } = useClima();
  const { temaOscuro } = useTema();

  return (
    <div className={`app ${temaOscuro ? 'tema-oscuro' : 'tema-claro'}`}>
      <header className="encabezado">
        <h1>Pronóstico del Clima</h1>
        <div className="controles">
          <SelectorUnidades />
          <BotonTema />
        </div>
      </header>

      <main className="contenido-principal">
        <BuscadorClima />
        
        {cargando && (
          <div className="estado-carga">
            <div className="spinner"></div>
            <p>Cargando información del clima...</p>
          </div>
        )}
        
        {error && (
          <div className="mensaje-error">
            <p>⚠️ {error}</p>
          </div>
        )}
        
        {climaActual && !cargando && (
          <TarjetaClima clima={climaActual} />
        )}
        
        {!climaActual && !cargando && !error && (
          <div className="mensaje-bienvenida">
            <h2>¡Bienvenido!</h2>
            <p>Busca una ciudad o usa tu ubicación para ver el clima actual.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
