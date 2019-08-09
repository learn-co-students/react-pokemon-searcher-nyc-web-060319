import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchValue: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemonData => this.setState({pokemons: pokemonData}))
  }

  filterSearch = event => {
    this.setState({searchValue: event.target.value})
    // console.log(this.state)
  }

  addPokemon = pokemon => {
    this.setState({ pokemons: [...this.state.pokemons, pokemon] })
  }

  render() {
    let targetPokemon = this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.searchValue))
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onSearchChange={this.filterSearch} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={targetPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
