import { Component } from 'react'
import axios from 'axios'
import Loader from './components/Loader';
import Film from './components/Film'
import './App.css';

class App extends Component {
  state = {
    films: [],
    isLoading: true
  }

  componentDidMount() {
    axios.get('https://ajax.test-danit.com/api/swapi/films')
      .then(res => this.setState({ films: res.data, isLoading: false }))
  }

  render() {
    const { films, isLoading } = this.state

    if(isLoading) {
      return <Loader />
    }

    const filmItems = films.map(film => <Film key={film.id} film={film} />)

    return (
      <div className='wrapper'>
        <ol>
          {filmItems}
        </ol>
      </div>
    )
  }
}

export default App;
