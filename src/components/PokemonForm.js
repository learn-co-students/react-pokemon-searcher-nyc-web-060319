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

  handleChangeName=event=>{
    this.setState({
      name:event.target.value
    })
  }

  handleChangeHP=event=>{
    this.setState({
      hp:event.target.value
    })
  }
  handleChangeFront=event=>{
    this.setState({
      front:event.target.value
    })
  }
  handleChangeBack=event=>{
    this.setState({
      back:event.target.value
    })
  }

  handleSubmit=event=>{
    event.preventDefault()
    // console.log(this.state);
    
    const name = this.state.name
    const hp = this.state.hp
    const front = this.state.front
    const back = this.state.back

    fetch('http://localhost:3000/pokemon',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body:JSON.stringify({
        name:name,
        stats:[{
          "value": 100,
          "name": "speed"
        },
        {
          "value": 100,
          "name": "special-defense"
        },
        {
          "value": 100,
          "name": "special-attack"
        },{
          value:parseInt(hp),
          name:'hp'
        }],
        sprites:{
          front:front,
          back:back
        }
      })
    })
    .then(resp => resp.json())
    .then(pokemon => this.props.addPokemon(pokemon))
    // .then(console.log)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChangeName}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChangeHP}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChangeFront}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChangeBack}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
