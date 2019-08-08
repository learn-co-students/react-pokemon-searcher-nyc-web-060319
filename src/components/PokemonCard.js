import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    front:true
  }
  handleClick=()=>{
    this.setState({front: !this.state.front})
  }

  render() {
    let imgSrc=""
    if (this.state.front){
      imgSrc=this.props.pokemon.sprites.front
    }else{
      imgSrc=this.props.pokemon.sprites.back
    }
    
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img src={imgSrc} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[3].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
