import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {


  render() {
    // console.log('this is state', this.state.pokemons)
    let pokeArray = this.props.pokemons.map( pokeObj => <PokemonCard key={pokeObj.id} pokemon={pokeObj} />)

    return (
      <Card.Group itemsPerRow={6}>
        {pokeArray}
      </Card.Group>
    )
  }
}

export default PokemonCollection
