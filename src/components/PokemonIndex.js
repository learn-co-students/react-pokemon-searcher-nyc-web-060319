import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state={
    allPokemon: [],
    // searchMatchPokemon: [], // (2) Not best way to deal w filter, bc have two sources of data. 
    searchValue: "" 
  }

  componentDidMount(){
    fetch(`http://localhost:3000/pokemon`)
    .then( res => res.json() )
    .then( allData => {
      console.log(allData)
      this.setState({allPokemon: allData})  // no longer need:    {searchMatchPokemon: allData}
    })
  }

  // refreshAllPokemon(){
  //   fetch(`http://localhost:3000/pokemon`)
  //   .then( res => res.json() )
  //   .then( allData => {
  //     console.log(allData)
  //     this.setState({allPokemon: allData}) 
  //   })
  // }

  //


  // displayPokemonSearch(e){
  //       //this.refreshAllPokemon() // works, but wrong place... 
  //       //console.log("Search's this : ", this) //this w/o bind = onSearchChange event  w/bind = Pokemon Page. DONT NEED
  //   console.log("Search's e : ", e.target) // e=  Synthetic Event

  //   // this.SearchMatchPokemon(e.target.value)
  // }

  updateStateSearchTerm(e){
    console.log("e.target.value   updateStateSearchTerm  is: ", e.target.value)
    // console.log("this in uodateStateSearch : ", this)  // the whole pokemon page, is desired scope.

    // let matches = this.SearchMatchPokemon( e.target.value) // (3) works, refactored to make better
    // this.setState({searchValue: matches})
    this.setState(e.target.value)
  }


  SearchMatchPokemon(searchTerm = ""){
    console.log("this inside SearchMatchPoke : ", this) // is Pokemon Page, which DOES have state allPokemon + searchValue
    // this.setState({searchValue: searchTerm})  -- infinite loop, set State here triggers render, render triggers this func w set state. 
    console.log("searchTerm", searchTerm)   

    // if( typeof searchTerm === "object") {
    //   return searchTerm   // (3) before, updateStateSearchTerm   was returning array of matches. 
    // } else {              // (3) (do the below stuff).  Again, refactored to make better. 

      let allPokemonCopy = this.state.allPokemon
      let matches= allPokemonCopy.filter( poke => poke.name.includes(searchTerm))
      console.log("MATCHES : ", matches)
      // this.setState({searchMatchPokemon: matches})   // (2) instead of having 2nd array in state, 
      return matches  // (2) vera said- return matches filtered array, and render that (plus searchTerm="")
    
  }


  addNewPokemon(e, newPokemon){
    console.log("Add Pokemond event", e.target[0].value)   // e=  synthetic event      e.target[0].value = Jellie OKAY! 
    console.log("newPokemon arg2 :", newPokemon)  // UNDEFINED ! 
    console.log("this in addNewPokemon : ", this)  // the whole pokemon page. makes sense bc did arrow function callback
    let allPokemonCopy = this.state.allPokemon

    let newPokemonToAdd = {"name": e.target[0].value,
      "stats": [
        {
          "value": e.target[1].value,
          "name": "hp"
        }
      ],
      "abilities": [      // needed to add abilities or crashed bc rendered on card, undefined. 
        "None"
      ],
      "sprites": {
        "front": e.target[2].value,
        "back": e.target[3].value
      }
    };

    this.setState({allPokemon: [...this.state.allPokemon, newPokemonToAdd]})
  }


  render() {
    return (
      <div>
        <h1>Pokemon Searcher (By Name)</h1>
        <br />
        {/* onSearchChange={_.debounce(() => console.log('🤔'), 500)} */}
        {/* BELOW:   this.displayPokemonSearch(e)   DOES NOT WORK, NO E ! */}
        {/* <Search onSearchChange={((e)=>this.displayPokemonSearch(e))}  showNoResults={false} /> */}
        {/* <Search onSearchChange={((e)=>this.SearchMatchPokemon(e))}  showNoResults={false} /> */}
        <Search onSearchChange={((e)=>this.updateStateSearchTerm(e))}  showNoResults={false} />
        {/* <Search onSearchChange={((event) => this.setState({searchValue: event.target.value}))} showNoResults={false} /> */}
         {/* ^^ Harpreet's Solution */}
        
        <br />

        <PokemonCollection allPokemon={this.SearchMatchPokemon(this.state.searchValue)}/>
        <br />
        {/* Do want to bind this bc want to set current form to Form's scope, from Parent */}
        {/* {((e)=>this.addNewPokemon(e))} */}
        {/* this.addNewPokemon(e)  -- get error,   e  undefined. */}
        <PokemonForm addNewPokemon={((e)=>this.addNewPokemon(e))}/>
      </div>
    )
  }
}

export default PokemonPage
