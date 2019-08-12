import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    search: ""
  }


  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={(event) => {
              this.setState({search: event.target.value})
            }}
            showNoResults={false} />
        <br />
        <PokemonForm />
        <br />
        <PokemonCollection search={this.state.search}/>
      </div>
    )
  }
}

export default PokemonPage
