import type { WeatherCardProps } from "../../types/WeatherCardProps";
import { memo } from "react";

const WeatherCard = memo(({ data }: WeatherCardProps) => {
  return (
    <div className="weather-card">
      <h2>{data.city}, {data.country}</h2>

      <div className="weather-main">
        <img
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt={data.description}
        />
        <span className="temp">{Math.round(data.temperature)}°C</span>
      </div>

      <p className="desc">{data.description}</p>

      <div className="weather-info">
        <span>💧 Humidity: {data.humidity}%</span>
        <span>🌬️ Wind: {data.windSpeed} km/h</span>
      </div>
    </div>
  );
});

export default WeatherCard;
