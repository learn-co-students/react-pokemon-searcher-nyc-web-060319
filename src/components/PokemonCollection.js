import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    // console.log(this.props.pokemonCollection);
    
    let pokemonArray = this.props.pokemonCollection.map(pokemon=>(
      <PokemonCard 
      key={pokemon.id}
      pokemon={pokemon}
      // handleClick={this.props.handleClick}
      />
    ))
    // console.log("array", pokemonArray);
    
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {pokemonArray}
      </Card.Group>
    )
  }
}

export default PokemonCollection
