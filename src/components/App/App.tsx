import React, { useState } from 'react';
import InputComponent from '../inputComponent/input';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState();

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
  let x = () => {
    try {
      FetchApiData<{ main: any }>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cd8d4cf4d94dc362d93ad2e1b9b9adde`
      ).then(({ main }) => {
        console.log(main.temp);
        setWeatherData(main.temp);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <InputComponent handleChange={onChange} city={city} fetching={x} />
      <p>{weatherData}</p>
    </div>
  );
}

export default App;
