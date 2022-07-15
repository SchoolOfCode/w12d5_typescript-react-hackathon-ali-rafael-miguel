import React, { useState } from 'react';
import InputComponent from '../inputComponent/input';
import './App.css';

function App() {
  const [city, setCity] = useState("")

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void{
    setCity(e.target.value);
    console.log(city)
  }

  function Fetching(){
    // Checks if the city string exists
    // If it does, send a fetch request

  }

  return (
    <div className="App">
      <InputComponent handleChange={onChange} city={city}/>
    </div>
  );
}

export default App;
