import React from 'react'
import Characters from '../components/Characters';

const FilmDetails = ({ film }) => {

    return (
        <div className='details'>
            <h4>Episode: {film.episodeId} </h4>
            <div>Opening Crawl: {film.openingCrawl}</div>
            <Characters film={film}/>
        </div>
    )

}

export default FilmDetails



