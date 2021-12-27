import React, { PureComponent } from 'react'
import Characters from '../components/Characters';

export default class FilmDetails extends PureComponent {
    render() {
        const { film } = this.props
        console.log(film);

        return (
            <div className='details'>
                <h4>Episode: {film.episodeId} </h4>
                <div>Opening Crawl: {film.openingCrawl}</div>
                <Characters film={film}/>
            </div>
        )
    }
}



