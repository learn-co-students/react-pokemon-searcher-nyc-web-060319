import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    const pokeCards = this.props.pokemonArray.map(
      poke => <PokemonCard key={poke.id} pokemon={poke} />
    )
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {pokeCards}
      </Card.Group>
    )
  }
}

export default PokemonCollection
