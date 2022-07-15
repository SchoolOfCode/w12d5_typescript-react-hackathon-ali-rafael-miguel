import React, { useState } from 'react';
import InputComponent from '../inputComponent/input';
import './App.css';

function App() {
<<<<<<< HEAD
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
 
  function onChange(e: React.ChangeEvent<HTMLInputElement>): void{
=======
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState();

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
>>>>>>> 87cc20650f5c56d1ee79702647390827922e2b33
    setCity(e.target.value);
    console.log(city);
  }

<<<<<<< HEAD
  async function Fetching<T>(city: string): Promise<T> {
    const response = await fetch(`url${city}`)
    const data = await response.json();
    setWeatherData(data);

=======
  async function FetchApiData<T>(request: RequestInfo): Promise<T> {
    // event.preventDefault();
    const response = await fetch(request);
    const data = await response.json();
    setWeatherData(data);
    return data;
>>>>>>> 87cc20650f5c56d1ee79702647390827922e2b33
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
<<<<<<< HEAD
      <InputComponent handleChange={onChange} city={city}/>
      {/* <DisplayData props={weatherData} /> */}
=======
      <InputComponent handleChange={onChange} city={city} fetching={x} />
      <p>{weatherData}</p>
>>>>>>> 87cc20650f5c56d1ee79702647390827922e2b33
    </div>
  );
}

export default App;
