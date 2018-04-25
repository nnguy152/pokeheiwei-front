import React, { Component } from 'react';
import './Begin.css'
import dex from './dex.jpg'

class Begin extends Component {
   render() {
      return (
         <div className='begin'>
            <div className='text-container'>
               <div className='start-text'>Hello! Welcome to PokeHeiWei!</div>
               <div className='arrow-down'></div>
            </div>
            <div className='pokedex-container'>
               <div className='pokedex-top'>
                  <div className='circle-top'></div>
               </div>
               <div className='pokedex-middle'>
                  <div className='circle'></div>
               </div>
               <div className='pokedex-bottom'>
                  <div className='circle-bottom'></div>
               </div>
            </div>
         </div>
      );
   }
}

export default Begin;