import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import Inbox from './pages/Inbox/Inbox'
import Loader from './components/Loader/Loader'
import Favorites from './pages/Favorites/Favorites'
import Sent from './pages/Sent/Sent'
// import OneEmail from './pages/OneEmail/OneEmail'
import Email from './components/Email/Email'
import Page404 from './pages/Page404/Page404'
import axios from 'axios'

function App() {
  const [user, setUser] = useState({
    name: 'Artem',
    age: 29,
    email: 'learn@gmail.com' 
  })
  const [emails, setEmails] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getEmails()
  }, [])

  const getEmails = () => {
    axios.get('/api/emails')
      .then((res) => {
        setEmails(res.data)
        setIsLoading(false)
      })
  }

  if(isLoading) {
    return <Loader />
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout user={user} emails={emails} />}>
          
          <Route index element={<Home />} />
          <Route path='inbox'element={<Inbox emails={emails} />} />
          <Route path='inbox/:emailId' element={<Email />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='sent' element={<Sent />} />
          <Route path='*' element={ <Page404 />} />
          
        </Route>
      </Routes> 
    </div> 
  );
}

export default App;

{/* <Route path='emails/:emailId' element={<OneEmail />} /> */}