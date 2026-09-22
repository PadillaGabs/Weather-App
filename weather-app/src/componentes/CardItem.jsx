export const CardItem = ({ weather }) => {
  return (
    <section>
      <h2 className="card-title">Clima de {weather.country}</h2>

      <div className="card">
        <div className="main-content">
          <p className="grid-item">
            <span className="span-bold">Temperatura: </span>
            {weather.temperature}°C
          </p>
          <p className="grid-item">
            <span className="span-bold">Estado del tiempo: </span>
            {weather.timeState}
          </p>
          <p className="grid-item">
            <span className="span-bold">Estado del clima: </span>
            {weather.weatherState}
          </p>
        </div>

        <div className="secondary-content">
          <p className="grid-item">
            <span className="span-bold">Humedad:</span> {weather.humidity}%
          </p>
          <p className="grid-item">
            <span className="span-bold">Velocidad del viento: </span>
            {weather.windSpeed} m/s
          </p>
          <p className="grid-item">
            <span className="span-bold">Presión atmosférica: </span>
            {weather.pressure} hPa
          </p>
          <p className="grid-item">
            <span className="span-bold">Nivel del mar: </span>
            {weather.seaLevel} mbar
          </p>
        </div>
      </div>
    </section>
  );
};
