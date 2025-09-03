import { useUnidades } from '../contextos/ContextoUnidades';

const TarjetaClima = ({ clima }) => {
  const { convertirTemperatura, obtenerSimbolo } = useUnidades();

  const obtenerIconoUrl = (icono) => {
    return `https://openweathermap.org/img/wn/${icono}@2x.png`;
  };

  const formatearHora = (fecha) => {
    return fecha.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="tarjeta-clima">
      <div className="info-principal">
        <h2 className="ciudad">{clima.ciudad}, {clima.pais}</h2>
        <img 
          src={obtenerIconoUrl(clima.icono)} 
          alt={clima.descripcion}
          className="icono-clima"
        />
        <p className="temperatura">
          {convertirTemperatura(clima.temperatura)}{obtenerSimbolo()}
        </p>
        <p className="descripcion">{clima.descripcion}</p>
      </div>

      <div className="detalles-clima">
        <div className="detalle">
          <span className="etiqueta">Sensación térmica:</span>
          <span className="valor">
            {convertirTemperatura(clima.sensacion)}{obtenerSimbolo()}
          </span>
        </div>
        
        <div className="detalle">
          <span className="etiqueta">Humedad:</span>
          <span className="valor">{clima.humedad}%</span>
        </div>
        
        <div className="detalle">
          <span className="etiqueta">Presión:</span>
          <span className="valor">{clima.presion} hPa</span>
        </div>
        
        <div className="detalle">
          <span className="etiqueta">Viento:</span>
          <span className="valor">{clima.viento} m/s</span>
        </div>
        
        <div className="detalle">
          <span className="etiqueta">Amanecer:</span>
          <span className="valor">{formatearHora(clima.amanecer)}</span>
        </div>
        
        <div className="detalle">
          <span className="etiqueta">Atardecer:</span>
          <span className="valor">{formatearHora(clima.atardecer)}</span>
        </div>
      </div>
    </div>
  );
};

export default TarjetaClima;
