
export const getWeather = async(country) => {
    
    const apiKey = "e95e2009de8c9b0c2a32866448ea6fa2";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${country}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    console.log(data)

    return {
        country: data.city.name,
        temperature: data.list[0].main.temp,
        timeState: data.list[0].dt_txt,
        weatherState: data.list[0].weather[0].main,
        humidity: data.list[0].main.humidity,
        windSpeed: data.list[0].wind.speed,
        pressure: data.list[0].main.pressure,
        seaLevel: data.list[0].main.sea_level
    }
}