import React, { useState } from 'react';

const Temp = () => {
 const [celsius, setCelsius] = useState('');
 const [fahrenheit, setFahrenheit] = useState('');
 const [kelvin, setKelvin] = useState('');

 const convertTemperature = () => {
    if (celsius !== '') {
      const celsiusNumber = parseFloat(celsius);
      const fahrenheitNumber = (celsiusNumber * 9) / 5 + 32;
      const kelvinNumber = celsiusNumber + 273.15;
      setFahrenheit(fahrenheitNumber.toFixed(2));
      setKelvin(kelvinNumber.toFixed(2));
    } else if (fahrenheit !== '') {
      const fahrenheitNumber = parseFloat(fahrenheit);
      const celsiusNumber = (fahrenheitNumber - 32) * 5 / 9;
      const kelvinNumber = celsiusNumber + 273.15;
      setCelsius(celsiusNumber.toFixed(2));
      setKelvin(kelvinNumber.toFixed(2));
    } else if (kelvin !== '') {
      const kelvinNumber = parseFloat(kelvin);
      const celsiusNumber = kelvinNumber - 273.15;
      const fahrenheitNumber = (celsiusNumber * 9) / 5 + 32;
      setCelsius(celsiusNumber.toFixed(2));
      setFahrenheit(fahrenheitNumber.toFixed(2));
    }
 };

 return (
    <div>
      <input
        type="text"
        placeholder="Celsius"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
      />
      <input
        type="text"
        placeholder="Fahrenheit"
        value={fahrenheit}
        onChange={(e) => setFahrenheit(e.target.value)}
      />
      <input
        type="text"
        placeholder="Kelvin"
        value={kelvin}
        onChange={(e) => setKelvin(e.target.value)}
      />
      <button onClick={convertTemperature}>Convert</button>
    </div>
 );
};

export default Temp;
