import { useUnidades } from '../contextos/ContextoUnidades';

const SelectorUnidades = () => {
  const { unidad, cambiarUnidad } = useUnidades();

  return (
    <div className="selector-unidades">
      <label className="etiqueta-selector">
        <input
          type="radio"
          name="unidad"
          value="celsius"
          checked={unidad === 'celsius'}
          onChange={(e) => cambiarUnidad(e.target.value)}
        />
        <span>Celsius (°C)</span>
      </label>
      
      <label className="etiqueta-selector">
        <input
          type="radio"
          name="unidad"
          value="fahrenheit"
          checked={unidad === 'fahrenheit'}
          onChange={(e) => cambiarUnidad(e.target.value)}
        />
        <span>Fahrenheit (°F)</span>
      </label>
    </div>
  );
};

export default SelectorUnidades;
