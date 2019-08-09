import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  toggleImage = event => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    // console.log(this.props)
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" src={ this.state.clicked ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front} onClick={this.toggleImage}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {/* POKEMON HP HERE hp */}
              {this.props.pokemon.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
