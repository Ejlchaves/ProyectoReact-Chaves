import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navContainer">
            <div className="logoContainer">
                <Link className='logo' to='/'>
                <h1 className="logo">Urban Store</h1>
                </Link>
            </div>
            <div className="btnContainer">
                <Link className='btn' to='/category/hombre'>Hombre</Link>
                <Link className='btn' to='/category/mujer'>Mujer</Link>
                <Link className='btn' to='/category/unisex'>Outfits</Link>
                <Link className='btn' to='/category/accesorios'>Accesorios</Link>
            </div>
            <div>
                {<CartWidget />}
            </div>
        </nav>
    )
}

export default Navbar