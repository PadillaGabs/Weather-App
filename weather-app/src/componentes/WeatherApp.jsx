import { useState } from "react";
import { getWeather } from "../functions/getWeather";
import { WeatherForm } from "./WeatherForm";
import { CardItem } from "./CardItem";

export const WeatherApp = () => {
  const [weather, setWeather] = useState({
    country: "",
    temperature: "",
    weatherState: "",
    humidity: "",
    windSpeed: "",
    pressure: "",
    seaLevel: ""
  });

    const handleSearch = async (country) => {
      const data = await getWeather(country);
      setWeather(data);
    };

  return (
    <>
      <h1>App Climática</h1>

      <section className="app-content">
        <WeatherForm onSearch={handleSearch}/>

        <CardItem weather={weather} />
      </section>
    </>
  );
};
