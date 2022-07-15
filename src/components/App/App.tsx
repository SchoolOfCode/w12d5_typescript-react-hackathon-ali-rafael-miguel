import React, { useState } from 'react';
import InputComponent from '../inputComponent/input';
import './App.css';

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
 
  function onChange(e: React.ChangeEvent<HTMLInputElement>): void{
    setCity(e.target.value);
    console.log(city)
  }

  async function Fetching<T>(city: string): Promise<T> {
    const response = await fetch(`url${city}`)
    const data = await response.json();
    setWeatherData(data);

  }

  return (
    <div className="App">
      <InputComponent handleChange={onChange} city={city}/>
      {/* <DisplayData props={weatherData} /> */}
    </div>
  );
}

export default App;
