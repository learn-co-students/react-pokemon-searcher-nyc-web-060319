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
    // results: []
  };

  handleSearchChangeChild = () => {console.log("not yet defined at this point in program")}
  newPokeHandlerChild = () => {console.log("not yet defined at this point in program")}

  queryPoke = async () => {
    const response = await fetch(POKEMON_URL);
    const parsed = await response.json();
    return parsed;
  }

  componentDidMount = async () => {
    const pokemon = await this.queryPoke();
    const processedPokemon = pokemon.map( poke => Object.assign({}, {show: true}, poke));
    this.setState({pokemon: processedPokemon});
    this.newPokeHandlerChild(processedPokemon);
  }

  setSearchHandler = (searchHandler) => {
    this.handleSearchChangeChild = searchHandler;
  }

  setNewPokeHandler = (newPokeHandler) => {
    this.newPokeHandlerChild = newPokeHandler;
  }

  setLoadingAndValue = (loadingValue, searchChangeValue) => {
    this.setState({
      isLoading: loadingValue,
      value: searchChangeValue
    });
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search 
          // onSearchChange={_.debounce(this.handleSearchChangeChild, 100)}
          onSearchChange={this.handleSearchChangeChild}
          showNoResults={false}
          loading={this.state.isLoading}
          // results={this.state.results}
          // value={this.state.value} 
          />
        <br />
        <PokemonCollection 
        // pokemon={(this.state.results.length > 0) ?
        // this.state.results
        // : this.state.pokemon}
        pokemon={this.state.pokemon}
        setSearchHandler={this.setSearchHandler}
        setLoadingAndValue={this.setLoadingAndValue}
        setNewPokeHandler={this.setNewPokeHandler}
        />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
