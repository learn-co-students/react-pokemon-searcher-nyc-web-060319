import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    front: true
  }

  stat = (statName) => {
    const foundStat = this.props.pokemon.stats.find(stat => stat.name === statName);
    return foundStat.value;
  }

  src = () => {
    if (this.state.front) {
      // console.log(this.props.pokemon);
      return this.props.pokemon.sprites.front;
    }
    return this.props.pokemon.sprites.back;
  }


  clickCard = (event) => {
    console.log(event);
    this.setState({front: (!this.state.front)})
  }

  render() {
    return (
      <Card onClick={this.clickCard}>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.src()}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.stat('hp')}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
