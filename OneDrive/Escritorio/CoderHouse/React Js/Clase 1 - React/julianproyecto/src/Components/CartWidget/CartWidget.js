import './CartWidget.css'
import cart from './assets/cart.png'

const CartWidget = () => {
    return (
        <div>
            <img class='cart' src={cart} alt='cart'/>
            0
        </div>
    )
}

export default CartWidget