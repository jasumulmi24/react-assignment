import Input from "../../components/Input";
import type { WeatherSearchProps } from "../../types/WeatherSearchProps";

const WeatherSearch = ({ city, onCityChange }: WeatherSearchProps) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
     

       <Input
        name="city"
        value={city}
        placeholder="Enter city"
        onChange={onCityChange}
        style={{ padding: "0.5rem", borderRadius: "5px", width: "250px" }}
      />
    </div>
  );
};

export default WeatherSearch;



