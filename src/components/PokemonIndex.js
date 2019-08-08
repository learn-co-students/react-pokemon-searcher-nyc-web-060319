import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state={
    pokemonCollection:[],
    searchInput:""
  }

  // handleClick = () => {
  //   const index = this.state.pokemonCollection
  //   console.log(index);
    
  // }
  onSearchChange= event=>{ 
    
    this.setState(
      {searchInput: event.target.value }, 
    () => console.log(this.state.searchInput)) 
  
  }

  addPokemon = pokemon => {
    this.setState({ pokemonCollection: [...this.state.pokemonCollection, pokemon] })
  }


  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(pokemonCollection => this.setState({pokemonCollection}))
  }
  render() {
    const targetPokemon = this.state.pokemonCollection.filter(pokemon => pokemon.name.includes(this.state.searchInput))
    console.log(targetPokemon)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.onSearchChange} showNoResults={false} />
        <br />
        <PokemonCollection pokemonCollection = {targetPokemon} />
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
