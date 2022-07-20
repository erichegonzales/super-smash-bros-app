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
                <img className="fighter-image" src={`https://www.smashbros.com/assets_v2/img/fighter/thumb_a/${element.toLowerCase()}.png`} alt="" />
                <h5 className="fighter-name"> {element}</h5>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
