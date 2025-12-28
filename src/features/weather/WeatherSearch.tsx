import type { WeatherSearchProps } from "../../types/WeatherSearchProps";

const WeatherSearch = ({ city, onCityChange }: WeatherSearchProps) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        placeholder="Enter city"
        style={{ padding: "0.5rem", borderRadius: "5px", width: "250px" }}
      />
    </div>
  );
};

export default WeatherSearch;
