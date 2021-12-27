import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from './Loader';

const Characters = ({ film }) => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    axios.all(film.characters.map(c => axios(c)))
      .then((res) => {
        setCharacters(res.map(i => i.data))
        setIsLoading(false)
      })
  }, [])
            // { isLoading: false, characters: res.map(i => i.data) }
  if (isLoading) {
      return <Loader />
  }

  const characterNames = characters.map(c => c.name).join(', ');

  return characterNames;

}

export default Characters
