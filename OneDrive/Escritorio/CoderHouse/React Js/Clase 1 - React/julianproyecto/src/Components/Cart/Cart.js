import './Cart.css'
import { useContext } from "react"
import { carritoContext } from "../../Context/CarritoContext"
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {

    const {carrito, quitarProducto, totalCompra, vaciarCarrito} = useContext(carritoContext)

    const eliminarProducto = (id) =>{
        quitarProducto(id) 
    }


    if(carrito.length === 0) {
        return (
            <div className='cartSinProductos'>
                <h1 className='cartSinProductos'>Lo sentimos. En este momento no tienes productos en tu carrito.</h1>
            </div>
        )
    }

    return (
        <>
        <div className='cartContainer'>
            <h1>Carrito de Compras</h1>
                {carrito.map(prod=>
                <div key={prod.id} className='cartProductContainer'>
                <img src={prod.img} alt={prod.name} className='cartImg'/>
                <h3>Producto: {prod.name} </h3>
                <h3>Cantidad: {prod.cantidad} Unidades </h3>
                <h3>Precio: ${prod.precio}</h3>
                <h3>Subtotal: {prod.precio*prod.cantidad}</h3>
                <button className='botonEliminar' onClick={() => {eliminarProducto(prod.id)}}>Eliminar</button>
                </div> )}
            <h2 className='montoTotal'>Total:${totalCompra}</h2>
            <div className='btnContainerCart'>
                <button className='btnVaciarCart' onClick={() => {vaciarCarrito()}}>Vaciar Carrito</button>
                <Link className='btnCheckout'  to='/Checkout'><span>Checkout</span></Link>
            </div>
            <ToastContainer />
        </div>
        </>
      
    )
  }

  export default Cart