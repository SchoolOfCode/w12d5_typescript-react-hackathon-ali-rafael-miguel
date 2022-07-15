import { mainModule } from 'process';
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

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setCity(e.target.value);
    console.log(city);
  }

  async function FetchApiData<T>(request: RequestInfo): Promise<T> {
    // event.preventDefault();
    const response = await fetch(request);
    const data = await response.json();
    setWeatherData(data);
    return data;
  }

  let apiWeatherTemp = () => {
    try {
      FetchApiData<{ main: main }>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=cd8d4cf4d94dc362d93ad2e1b9b9adde`
      ).then(({ main }) => {
        console.log(main.temp);
        setWeatherData(main.temp);
        console.log(weatherData);
        setExists(true)
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <InputComponent handleChange={onChange} city={city} fetching={x} />
     {exists && <p>{weatherData}</p>}
    </div>
  );
}

export default App;
