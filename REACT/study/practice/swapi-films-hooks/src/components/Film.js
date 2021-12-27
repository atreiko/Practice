import React, { useState } from 'react'
import FilmDetails from '../dist/FilmDetails'

const Film = ({ film }) => {
    const [expanded, setExpanded] = useState(false)

    const expandFilm = () => {
        setExpanded(true)
    }

    return (
        <li>
            <div>
                <h3>{film.name}</h3>
                { !expanded && <button onClick={expandFilm}>Show Details</button> }
            </div>
            { expanded && <FilmDetails film={film} /> }
        </li>
    )

}

export default Film