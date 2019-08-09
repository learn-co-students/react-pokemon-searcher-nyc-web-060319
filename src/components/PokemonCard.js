import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    "displayFrontImg": true
  }
  
  pName = this.props.onePoke.name[0].toUpperCase + this.props.onePoke.name.slice(1)
  
loadPhoto(){
    if(this.state.displayFrontImg === true){
      return this.props.onePoke.sprites.front
    } else {
      return this.props.onePoke.sprites.back
    }
  }

  togglePhotoOnClick(e, pokeObj){
    // console.log("In toggle photo on CLICK: ", this)   //now = the PokemonCard
    // console.log("pokeObj ", pokeObj)   // 
    // console.log("this. STATE ", this.state)   // displayFrontImg = true!  // pokeObj.state = undefined
    // console.log("e.tar - ", e.target) // get e.target of: <img  src={this.togglePhoto("a")} alt="oh no!" />

    // let theImg = console.log("PARENT: ", e.target.parentElement)   // Dont need parent element
  
    if(this.state.displayFrontImg === true){
      // console.log(this.props.onePoke.sprites.front)  -- DONT DO THIS WAY, WHOLE POINT OF REACT IS I DONT
      // e.target.src= this.props.onePoke.sprites.back  -- ..DIRECTLY TOUCH DOM !!! 
      // this.state.displayFrontImg =false              -- THIS NEVER ACTUALLY CHANGED STATE! 
      this.setState({displayFrontImg: false})           // TRIGGERS RE-RENDER SO NEW IMAGE WILL LOAD
    } else {                                            // ..AND LISTENER *IS* ON WHOLE CARD, I DON'T NEED TO 
      this.setState({displayFrontImg: true})            // ..TRAVERSE TO GET TO IMG NODE TO CHANGE SOURCE! 
    }
  }


  render() {
    console.log('blah', this.state)  // displayFrontImg: false   OKAY
    // console.log("this in render: ", this)  // is a Pokemon card. OK

    return(
      <Card onClick={ ((e)=>this.togglePhotoOnClick(e, this.props.onePoke)) }>
        {/* Need callback so you can pass props + event to callback! */}
        <div >
          <div className="image">
            <img  src={this.loadPhoto()} alt="oh no!" />
            {/* Must immediate invoke load photo! */}
          </div>

          <div className="content">
            <div className="header">{this.props.onePoke.name}</div>
          </div>

          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              HP: 
              {this.props.onePoke.abilities.join(", ")}
            </span>
          </div>

        </div>
      </Card>
    )
  }
}

export default PokemonCard
