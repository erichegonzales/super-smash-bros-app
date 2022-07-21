import React, { useState } from 'react'
import './App.css';
import Fighter from './components/Fighter'
import FighterScreen from './components/FighterScreen'

function App() {
  const fighters = [
    { name: 'Yoshi', color: '#89CC6A'}, 
    { name: 'Lucina', color: '#81A7CC'}, 
    { name: 'Kirby', color: '#FFD6E8'}, 
    { name: 'Pikachu', color: '#FFB916'}, 
    { name: 'Ness', color: '#E14041'}, 
    { name: 'Zelda', color: '	#FFEAAA'}, 
    { name: 'Mewtwo', color: '#957BC8'}, 
    { name: 'Mario', color: '	#FF412D'}, 
    { name: 'Pit', color: '#B1DAFF'}, 
    { name: 'Jigglypuff', color: '#F79BFA'}, 
    { name: 'Ike', color: '#B94E41'}, 
    { name: 'Luigi', color: '#62A446'}, 
  ]

  const [selectedFighter, setSelectedFighter] = useState()

  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        {
          fighters.map((element, index) => {
            return (
              <Fighter fighter={element} setSelectedFighter={setSelectedFighter}/>
            )
          })
        }
      </div>
      {
        // Conditional render (based on ternary)
        selectedFighter ?
        <FighterScreen />
        : null
      }
    </div>
  );
}

export default App;