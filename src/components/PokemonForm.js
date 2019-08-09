import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  changeHandler = event => {
    let inputName = event.target.name
    this.setState({
      [inputName]: event.target.value
    })
  }

  handleSubmit = event => {

    const name = this.state.name
    const hp = this.state.hp
    const frontUrl = this.state.frontUrl
    const backUrl = this.state.backUrl

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
          front: frontUrl,
          back: backUrl
        }
      })
    })
    .then(resp => resp.json())
    // .then(pokemon => console.log(pokemon))
    .then(pokemon => this.props.addPokemon(pokemon))
    // .then(console.log)
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.changeHandler}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.changeHandler}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.changeHandler}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.changeHandler}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
