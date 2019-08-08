import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
const POKEMON_URL = 'http://localhost:3000/pokemon';

const INITIAL_STATE = { isLoading: false, results: [], value: '' }

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    value: '',
    isLoading: false,
    results: []
  };

  queryPoke = async () => {
    const response = await fetch(POKEMON_URL);
    // console.log(response);
    const parsed = await response.json();
    // console.log(parsed);
    return parsed;
  }

  componentDidMount = async () => {
    const pokemon = await this.queryPoke();
    this.setState({pokemon});

  }

  // setSearchHandler = 

  handleSearchChange = (event, searchChange) => {
    
    this.setState({
      isLoading: true,
      value: searchChange.value
    })
    console.log(searchChange.value);

    setTimeout(() => {
      if (this.state.value.length < 1) {
        this.setState(INITIAL_STATE);
        return;
      }
      // https://react.semantic-ui.com/modules/search/#types-standard
      // semantic recommends using a regex.
      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = pokemon => re.test(pokemon.name)
  
      this.setState({
        isLoading: false,
        results: _.filter(this.state.pokemon, isMatch),
      })  
    }, 500);
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search 
          onSearchChange={_.debounce(this.handleSearchChange, 1000)}
          showNoResults={false}
          loading={this.state.isLoading}
          // results={this.state.results}
          // value={this.state.value} 
          />
        <br />
        <PokemonCollection pokemon={(this.state.results.length > 0) ? this.state.results : this.state.pokemon}/>
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
