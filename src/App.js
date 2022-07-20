import './App.css';
import Fighter from './components/Fighter'

function App() {
  const fighters = ['Lucina', 'Yoshi', 'Kirby', 'Mewtwo', 'Roy', 'Mario', 'Ness', 'Zelda', 'Kirby', 'Luigi', 'Ike', 'Sora']
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