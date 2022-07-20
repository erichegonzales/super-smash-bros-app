import './App.css';
import Fighter from './components/Fighter'

function App() {
  const fighters = [
    { name: 'Yoshi', color: '#89CC6A'}, 
    { name: 'Lucina', color: '#81A7CC'}, 
    { name: 'Kirby', color: '#FFD6E8'}, 
    { name: 'Mewtwo', color: '#957BC8'}, 
    { name: 'Pikachu', color: '#FFB916'}, 
    { name: 'Mario', color: '	#FF412D'}, 
    { name: 'Ness', color: '#E14041'}, 
    { name: 'Zelda', color: '	#FFEAAA'}, 
    { name: 'Pit', color: '#B1DAFF'}, 
    { name: 'Ike', color: '#B94E41'}, 
    { name: 'Luigi', color: '#62A446'}, 
    { name: 'Jigglypuff', color: '#F79BFA'}, 
  ]
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        {
          fighters.map((element, index) => {
            return (
              <Fighter fighter={element} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;