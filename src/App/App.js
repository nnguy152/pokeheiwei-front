import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import img from './name.png'

class App extends Component {
  constructor() {
    super()
    this.state = {
      height: '',
      weight: '',
      pokemon: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSubmitWeight = this.handleSubmitWeight.bind(this)
  }


  handleSubmit(e) {
    e.preventDefault()
    let feet = this.refs.feet.value * 12
    let inches = this.refs.inches.value * 1
    let meters = (feet + inches) * 0.254
    console.log(Math.round(meters))
    this.setState({ height: Math.round(meters) }, this.componentDidMount)
  }

  handleSubmitWeight(e) {
    e.preventDefault()
    let weight = this.refs.weight.value
    let total = Math.round(weight * 0.453592 * 10)
    console.log(total)
    this.setState({ weight: total }, this.componentDidMount)
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/`)
      .then(res => {
        let pokemon = []
        for (var i = 0; i < 750; i++) {
          if (this.state.height !== '') {
            if (res.data[i].height === parseInt(this.state.height)) {
              console.log(res.data[i].height)
              pokemon.push(res.data[i])
            } else {
              console.log('No Data')
            }
          } else if (this.state.weight !== '') {
            if (res.data[i].weight === parseInt(this.state.weight)) {
              pokemon.push(res.data[i])
            } else {
              console.log('No Data')
            }
          }
        }
        this.setState({ pokemon: pokemon })
      })
      .catch(err => console.log(err))
  }

  render() {
    let pokemon = this.state.pokemon.map((pokemon, i) => {
      console.log(pokemon)
      return (
        <div className="pokemon-list" key={i}>
          <p className="poke-name">{pokemon.name}</p>
          <p>Height: {pokemon.height}</p>
          <p className="weight">Weight: {pokemon.weight}</p>
          <img src={`${pokemon.img}`} alt="Pokemans" className="img" />
        </div>
      )
    })

    return (
      <div className="app">
        <h1 className="header">
          <img src={`${img}`} alt="Pokemans" className="head" />
        </h1>
        <div className="header">
          <form onSubmit={this.handleSubmit}>
            <label>Enter Your Height: </label>
            <input ref="feet" type="number" placeholder="Feet" />
            <input ref="inches" type="number" placeholder="Inches" />
            <input
              type="submit"
              value="Submit"
              onClick={this.handleSubmit} />
          </form>
          <br />
          <p>OR. (plz or)</p>
          <br />

          <form onSubmit={this.handleSubmitWeight} className="weight-form">
            <label>Enter Your Weight: </label>
            <input ref="weight" type="number" placeholder="lbs" />
            <input
              type="submit"
              value="Submit"
              onClick={this.handleSubmitWeight} />
          </form>
<div className="pokeball">
            <div className="red"/>
            <div className="element"/>
            <div className="white"/>
            </div>
          
          <div>{pokemon}</div>
        </div>
      </div>
    );
  }
}

export default App;
