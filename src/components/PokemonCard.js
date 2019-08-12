import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

    state = {
      front: true,
      src: this.props.pokemon.sprites.front
    }

    changePicutre = () => {
        if (this.state.front === true) {
          this.setState({front:false, src: this.props.pokemon.sprites.back})
        }
        else {
          this.setState({front: true, src: this.props.pokemon.sprites.front})
        }
    }



  render() {
    const pokemon = this.props.pokemon
    const hp =
      pokemon.stats.filter((stat) => {
        if (stat.name === "hp") {
          return stat.value
        }
      })
    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={this.changePicutre} alt="oh no!" src={this.state.src} />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp[0].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
