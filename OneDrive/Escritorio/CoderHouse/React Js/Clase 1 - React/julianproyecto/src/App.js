/* import React, {useState} from 'react'; */
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
/* import Counter from './Components/Counter/Counter' */
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        { <Navbar /> }
        <div className='productContainers'>
        <Routes>
        <Route path='/' element = {<ItemListContainer greeting = 'Bienvenidos'/>} />
        <Route path='/category/:categoriaId' element = {<ItemListContainer greeting = 'Bienvenidos'/>} />
        <Route path='/detail/:productoId' element = { <ItemDetailContainer /> }/> 
      </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
