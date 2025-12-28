import { useEffect } from "react";
import WeatherCard from "../features/weather/WeatherCard";
import WeatherSearch from "../features/weather/WeatherSearch";
import { useWeather } from "../context/WeatherContext";
import { useSearchParams } from "react-router-dom";

const Weather = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = import.meta.env.VITE_OPENWEATHER_BASE_URL;

  const { city, setCity, weather, setWeather, loading, setLoading, error, setError } = useWeather();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const cityFromUrl = searchParams.get("city") || "";
    if (cityFromUrl) setCity(cityFromUrl);
  }, []);

  const fetchWeather = async (cityName: string, controller: AbortController) => {
    if (!cityName) return;

    try {
      setLoading(true);
      const res = await fetch(
        `${BASE_URL}/weather?q=${cityName}&appid=${API_KEY}&units=metric`,
        { signal: controller.signal }
      );
      if (!res.ok) throw new Error("City not found");

      const data = await res.json();
      setWeather({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
      });
      setError("");
    } catch (err: any) {
      if (err.name === "AbortError") return;
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    if (city.trim() === "") {
      setWeather(null);
      setError("");
      searchParams.delete("city");
      setSearchParams(searchParams);
      return;
    }

    setSearchParams({ city });

    const timeout = setTimeout(() => {
      fetchWeather(city, controller);
    }, 500);

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [city]);

  const handleCityChange = (value: string) => {
    setCity(value);
    setError("");
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Weather App</h2>
      <WeatherSearch city={city} onCityChange={handleCityChange} />
      {loading && <p>Loading...</p>}
      {!loading && error && <p style={{ color: "red" }}>{error}</p>}
      {weather && !loading && <WeatherCard data={weather} />}
    </div>
  );
};

export default Weather;
