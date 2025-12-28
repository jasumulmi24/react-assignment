export type WeatherCardProps = {
  data: {
    city: string;
    country: string;
    temperature: number;
    description: string;
    icon: string;
    humidity: number;
    windSpeed: number;
  };
};