import React, { useState } from 'react';
import logo from './logo.svg';
import InputComponent from '../inputComponent/input';
import './App.css';

function App() {
  const [city, setCity] = useState("")

  return (
    <div className="App">
      <InputComponent props={city, setCity}/>
    </div>
  );
}

export default App;
