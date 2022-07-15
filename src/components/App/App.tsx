import React, { useState } from 'react';
import InputComponent from '../inputComponent/input';
import './App.css';

interface main {
  temp: number;
};

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(0);
  const [exists, setExists] = useState(false);
  const [icon, setIcon] = useState('');
  const [description, setDecription] = useState('');

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setCity(e.target.value);
    console.log(city);
  }

  async function FetchApiData<T>(request: RequestInfo): Promise<T> {
    // event.preventDefault();
    const response = await fetch(request);
    const data = await response.json();
    console.log(data)
    setIcon(data.weather[0].icon);
    setDecription(data.weather[0].description);
    return data;
  }

  let apiWeatherTemp = () => {
    try {
      FetchApiData<{ main: main }>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=cd8d4cf4d94dc362d93ad2e1b9b9adde`
      ).then(({ main }) => {
        console.log(main.temp);
        setWeatherData(main.temp);
        console.log(main)
        console.log(weatherData);
        setExists(true)
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <InputComponent handleChange={onChange} city={city} fetching={apiWeatherTemp} />
     {exists && <Display temp={weatherData} icon={icon} description={description}/>}
    </div>
  );
}

export default App;
