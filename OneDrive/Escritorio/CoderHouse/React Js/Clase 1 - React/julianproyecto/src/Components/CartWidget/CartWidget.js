import './CartWidget.css'
import cart from './assets/cart.png'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { carritoContext } from '../../Context/CarritoContext'

const CartWidget = () => {

    const {cantidadTotal} = useContext(carritoContext)
    return (
        <Link to="/cart">
            <img className='cart' src={cart} alt='cart'/>
            {cantidadTotal}
        </Link>
    )
}

export default CartWidget