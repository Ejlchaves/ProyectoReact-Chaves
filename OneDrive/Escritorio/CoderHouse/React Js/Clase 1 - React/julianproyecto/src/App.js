import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {CarritoContextProvider} from './Context/CarritoContext'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'
import Footer from './Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <CarritoContextProvider>
        <BrowserRouter>
          { <Navbar /> }
          <div className='productContainers'>
            <Routes>
              <Route path='/' element = {<ItemListContainer greeting = 'Bienvenidos a Urban Store'/>} />
              <Route path='/category/:categoriaId' element = {<ItemListContainer greeting = 'Bienvenidos a Urban Store'/>} />
              <Route path='/detail/:productoId' element = { <ItemDetailContainer /> }/>
              <Route path='/cart' element = { <Cart /> } />
              <Route path='/checkout' element = { <Checkout /> } />
            </Routes>
          </div>
          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </CarritoContextProvider>
    </div>
  );
}

export default App;
