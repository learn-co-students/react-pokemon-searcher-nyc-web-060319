import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  state = {
    pokemon: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemon => {
      this.setState({pokemon})
    })
  }

  render() {
    const search = this.props.search
    const pokemonArray = this.state.pokemon.map((pokemon) => {
        if (pokemon.name.includes(search)) {
          return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        }
    })
    return (
      <div>
      <h1>Pokemon Collection</h1>
      <Card.Group itemsPerRow={6}>
        {pokemonArray}
      </Card.Group>
      </div>
    )
  }
}

export default PokemonCollection
