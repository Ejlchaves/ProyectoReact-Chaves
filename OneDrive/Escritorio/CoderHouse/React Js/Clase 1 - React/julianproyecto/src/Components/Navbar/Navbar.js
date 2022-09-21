import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
    return (
        <nav className='navContainer'>
            <div className='logoContainer'>
                <h1 className='logo'>Urban Store</h1>
            </div>
            <div className='btnContainer'>
                <button onClick={()=> console.log('Hombre')}>Hombre</button>
                <button onClick={()=> console.log('Mujer')}>Mujer</button>
                <button onClick={()=> console.log('Outfit')}>Outfit</button>
                <button onClick={()=> console.log('Accesorios')}>Accesorios</button>
            </div>
            <div>
                {<CartWidget />}
            </div>
        </nav>
    )
}

export default Navbar