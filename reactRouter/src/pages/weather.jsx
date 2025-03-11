import { useState } from 'react';
import './weather.css';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const apiKey = "ef5fe98d523563daa00574a7901f5c0b";
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const checkWeather = async (cityName) => {
    if (!cityName.trim()) {
      setError(true);
      setWeatherData(null);
      return; 
    }
  
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(apiURL + cityName + `&appid=${apiKey}`);
      if (response.status === 404) {
        setError(true);
        setWeatherData(null);
      } else {
        const data = await response.json();
        setWeatherData(data);
      }
    } catch (error) {
      setError(true);
      setWeatherData(null);
    }
    setLoading(false);
  };

  return (
    <div className="card">
      <div className="search">
        <input
          type="text"
          placeholder="Nombre de Ciudad"
          spellCheck="false"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={() => checkWeather(city)}>Go</button>
      </div>

      {error && (
        <div className="error">
          <p>Ciudad Invalida</p>
        </div>
      )}

      {loading && (
        <div className="loading">
          <p>Cargando...</p>
        </div>
      )}

      {weatherData && !error && (
        <div className="weather" style={{ display: 'block' }}>
          <h1 className="temp">{Math.round(weatherData.main.temp)}°c</h1>
          <h2 className="city">{weatherData.name}</h2>
          <div className="details">
            <div className="col">
              <div>
                <p className="humidity">{weatherData.main.humidity}%</p>
                <p>Humedad</p>
              </div>
            </div>
            <div className="col">
              <div>
                <p className="wind">{weatherData.wind.speed} km/h</p>
                <p>Velocidad del viento</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
