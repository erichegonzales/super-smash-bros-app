import './App.css';

function App() {
  const fighters = ['Lucina', 'Yoshi', 'Kirby', 'Mewtwo', 'Roy', 'Mario', 'Ness', 'Zelda', 'Kirby', 'Luigi', 'Ike', 'Sora']
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        {
          fighters.map((element, index) => {
            return(
              <div>
                <img src={`https://www.smashbros.com/assets_v2/img/fighter/thumb_a/${element.toLowerCase()}.png`} alt="" />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
