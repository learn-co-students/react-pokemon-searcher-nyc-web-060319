import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    curPokemon: []
  }


  submitHandler = (event, stateOfForm) => {
    const pokeObj = {
      name: stateOfForm.name,
      hp: stateOfForm.hp,
      sprites: {
        front: stateOfForm.frontUrl,
        back: stateOfForm.backUrl
      },
      stats: [{
        value: 60,
        name: "hp"
      }]
    }

    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pokeObj)
    }

    fetch("http://localhost:3000/pokemon", options).then(
      resp => resp.json()
    ).then(
      poke => this.setState({
        pokemon: [...this.state.pokemon, poke],
        curPokemon: [...this.state.curPokemon, poke]
      })
    )


  }

  componentDidMount() {

    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(pokemon => this.setState({ pokemon, curPokemon: pokemon }))

  }

  filterPoke(string) {
    const newPoke = this.state.pokemon.filter(
      poke => poke.name.startsWith(string)
    )
    this.setState({ curPokemon: newPoke })
  }


  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={event => this.filterPoke(event.target.value)} showNoResults={false} />
        <br />
        <PokemonCollection pokemonArray={this.state.curPokemon} />
        <br />
        <PokemonForm submitHandler={this.submitHandler} />
      </div>
    )
  }
}

export default PokemonPage
