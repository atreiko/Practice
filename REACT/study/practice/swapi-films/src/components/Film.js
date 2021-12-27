import React, { PureComponent } from 'react'
import FilmDetails from '../dist/FilmDetails'

export default class Film extends PureComponent {
    state = {
        expanded: false
    }

    expandFilm = () => {
        this.setState({ expanded: true })
    }


    render() {
        const { film } = this.props
        const { expanded } = this.state

        return (
            <li>
                <div>
                    <h3>{film.name}</h3>
                    { !expanded && <button onClick={this.expandFilm}>Show Details</button> }
                </div>
                { expanded && <FilmDetails film={film} /> }
            </li>
        )
    }
}
