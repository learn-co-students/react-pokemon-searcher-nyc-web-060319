import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonCollection extends React.Component {

  state = {pokemon: []}
  componentDidMount = () => {
    this.props.setSearchHandler(this.handleSearchChange);
    this.props.setNewPokeHandler(this.newPoke);
    // this.props.setLoadingAndValue(this.resetLoading);
  }
  cards = (pokemon) => {
    // console.log(pokemon)
    return pokemon.map(poke => (poke.show ?
      <PokemonCard key={`pokemon-${poke.id}`} pokemon={poke}/>
      : null));
  }

  newPoke = (pokemon) => {
    this.setState({pokemon})
  }

  searchChangeTimeoutLoadingInternal = (searchChange) => {
    if (searchChange.value.length < 1) {
      // this.setState(INITIAL_STATE);
      this.props.setLoadingAndValue(false, '');
      const newPoke = this.state.pokemon.map(poke => {
        poke.show = true;
        return poke;
      })

      this.setState({pokemon: newPoke});
      return;
    }
    // https://react.semantic-ui.com/modules/search/#types-standard
    // semantic recommends using a regex.
    const re = new RegExp(_.escapeRegExp(searchChange.value), 'i')
    const isMatch = pokemon => re.test(pokemon.name)
    const newPoke = this.state.pokemon.map(poke => {
      if (isMatch(poke)) {
        poke.show = true;
        return poke;
      }
      poke.show = false;
      return poke;
    })

    this.setState({pokemon: newPoke});

    this.props.setLoadingAndValue(false, searchChange.value);
    // this.setState({
    //   isLoading: ,
    //   results: _.filter(this.state.pokemon, isMatch),
    // })

  }

  handleSearchChange = (event, searchChange) => {
    this.props.setLoadingAndValue(true, searchChange.value)
    console.log(searchChange.value);
    setTimeout(() => {this.searchChangeTimeoutLoadingInternal(searchChange)}, 100);

  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.cards(this.state.pokemon)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
