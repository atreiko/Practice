import React, { useState, useEffect } from 'react'
import './App.css';
import Body from './components/Body';
import Header from './components/Header';

function App() {
  const [data, setData] = useState({
    title: 'Test Title',
    user: {
      name: 'Artem',
      age: 29,
      email: 'learn@gmail.com'
    },
  }) 

  useEffect(() => {
    const data1 = localStorage.getItem('data');
  
    if (data1) {
      setData(JSON.parse(data1));
    }
  }, [])

  useEffect(() => {
    const data1 = JSON.stringify(data);
  
    localStorage.setItem('data', data1)
  
  }, [data])

  const incrementAge = () => { 
    setData({...data, user: {...data.user, age: data.user.age + 1}})
  }

  const decrementAge = () => {
    setData({...data, user: {...data.user, age: data.user.age - 1}})
  }

  return (
    <div className="App">
      <Header user={data.user} />
      <Body 
        incrementAge={incrementAge} 
        decrementAge={decrementAge} 
      />
    </div>
  );
}

export default App;
