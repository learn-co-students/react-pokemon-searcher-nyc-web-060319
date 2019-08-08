import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  cards = (pokemon) => {
    return pokemon.map(poke => <PokemonCard key={`pokemon-${poke.id}`} pokemon={poke}/>);
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.cards(this.props.pokemon)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
