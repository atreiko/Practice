import React, { useState } from 'react';
import './App.css';
import Button from './Button';
import Numbers from './Numbers';

function App() {
  const [numbers, setNumbers] = useState([])

  const LIMIT = 5

  const generateNumber = () => {
    let randomNumber;

    do {
      randomNumber = Math.floor(Math.random() * LIMIT)
      // console.log('Random number -> ', randomNumber);
    } while (numbers.includes(randomNumber));

    setNumbers([...numbers, randomNumber])
  }

  const deleteNumber = (num) => {
    const filtered = numbers.filter(number => number !== num)
    setNumbers(filtered) 
  }

  return (
    <div className="App">
      <Button title={'Generate'} clickHandler={generateNumber} disabled={numbers.length >= LIMIT} />
      <Numbers numbers={numbers} deleteNumber={deleteNumber} />
    </div>
  );
}

export default App;
