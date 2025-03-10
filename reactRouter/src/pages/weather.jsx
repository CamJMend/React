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
          placeholder="Enter city name"
          spellCheck="false"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={() => checkWeather(city)}>
          <img src="../assets/images/search.png" alt="Search" />
        </button>
      </div>

      {/* Mostrar mensaje de error si el nombre de la ciudad no es válido */}
      {error && (
        <div className="error">
          <p>Invalid city name</p>
        </div>
      )}

      {/* Mostrar mensaje de carga */}
      {loading && (
        <div className="loading">
          <p>Loading...</p>
        </div>
      )}

      {/* Mostrar datos del clima si se obtiene correctamente */}
      {weatherData && !error && (
        <div className="weather" style={{ display: 'block' }}>
          <img
            src={`images/${weatherData.weather[0].main.toLowerCase()}.png`}
            className="weather-icon"
            alt={weatherData.weather[0].main}
          />
          <h1 className="temp">{Math.round(weatherData.main.temp)}°c</h1>
          <h2 className="city">{weatherData.name}</h2>
          <div className="details">
            <div className="col">
              <img src="images/humidity.png" alt="Humidity" />
              <div>
                <p className="humidity">{weatherData.main.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img src="images/wind.png" alt="Wind Speed" />
              <div>
                <p className="wind">{weatherData.wind.speed} km/h</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
