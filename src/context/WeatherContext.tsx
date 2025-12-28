import { createContext, useState, useContext, type ReactNode } from "react";

type WeatherData = {
  city: string;
  country: string;
  temperature: number;
  description: string;
  icon: string;
  humidity: number;
  windSpeed: number;
} | null;

type WeatherContextType = {
  city: string;
  setCity: (city: string) => void;
  weather: WeatherData;
  setWeather: (data: WeatherData) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string;
  setError: (error: string) => void;
};

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) throw new Error("useWeather must be used within a WeatherProvider");
  return context;
};

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <WeatherContext.Provider value={{ city, setCity, weather, setWeather, loading, setLoading, error, setError }}>
      {children}
    </WeatherContext.Provider>
  );
};
