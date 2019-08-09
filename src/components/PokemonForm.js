import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  // ((e)=>this.togglePhotoOnClick(e, this.props.onePoke))
  handleSubmit(e){
    console.log("e.target in Form: ", e.target) // the whole form  
    console.log("e.target.VALUE in Form: ", e.target[0].value)  //   e.target.value is  Undefined    // e.target.value[0] = error!
    console.log("this in handleSubmit :", this)  // the whole form  
    console.log("this in handleSubmit  PROPS:", this.props)  // has  addNewPokemon

    this.setState({
      name: e.target[0].value,
      hp: e.target[1].value,
      frontUrl: e.target[2].value,
      backUrl: e.target[3].value
    })

    this.props.addNewPokemon(e, this)
    // this.addNewPokemon(e, this)  // ERROR -  this.addNewPokemon is not a function
    // addNewPokemon(e, this)   // ERROR - 'addNewPokemon' is not defined  no-undef

  }

  render() {
    console.log("Form Props", this.props) // pass down formSubmit which calls addNewPokemon
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        {/* Getting error on {(e)=>this.handleSubmit(e)}  -- handleSubmit not a function */}
        {/* Just  {this.handleSubmit} never reaches  addNewPokemon in Parent */}
        {/*       {()=>this.handleSubmit}   also never reaches addNewPokemon in Parent*/}
        {/* {()=>this.handleSubmit(e)}  --  get error - there is no "e" */}
        <Form onSubmit={(e)=>this.handleSubmit(e)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
