import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {


  state = {
    picFront: true
  }

  render() {
    const pokemon = this.props.pokemon
    return (
      <Card onClick={_ => this.setState({ picFront: !this.state.picFront })}>
        <div>
          <div className="image">
            <img src={this.state.picFront ? pokemon.sprites.front : pokemon.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.stats[pokemon.stats.length - 1].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
