/* import logo from './logo.svg'; */
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header /* className="App-header" */>
        { <Navbar /> }
      </header>
      <main>
      { <ItemListContainer greeting = 'Bienvenidos'/> }
      </main>
    </div>
  );
}

export default App;
