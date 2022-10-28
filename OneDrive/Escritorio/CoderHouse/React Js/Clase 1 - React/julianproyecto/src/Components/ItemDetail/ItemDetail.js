import './ItemDetail.css'
import { useState, useContext } from 'react'
import Counter from '../Counter/Counter'
import { Link } from 'react-router-dom'
import { carritoContext } from '../../Context/CarritoContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemDetail = ({id, name, img, precio, stock}) => {

    const [cantidadAgregar, setCantidadAgregar] = useState(0)
    const {agregarProducto, obtenerCantidadProducto} = useContext(carritoContext)


    const handleOnAdd = (cantidad) => {
        setCantidadAgregar(cantidad)

        const productoAgregado = {
            id, name, precio, cantidad, img
        }

        agregarProducto(productoAgregado)
        notificacionProductoAgregado(productoAgregado)
    }

    const notificacionProductoAgregado = (producto) => toast.success(`Tenes ${producto?.cantidad} U. de ${producto?.name} en el carrito`,
    {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        }
    );

    const cantidadExistente = obtenerCantidadProducto(id)

    return(
        <div className="vistaPreviaContainer">
            <div>
                <img className="imgVistaPrevia" src={img} alt={name} />
            </div>
            <div className="detalleVistaPrevia">
                <h2>{name}</h2>
                <p>Descripcion de producto..</p>
                <h3>Precio: ${precio}</h3>
                {
                  cantidadAgregar === 0 ? (
                    <Counter onConfirm={handleOnAdd} stock={stock} initial={cantidadExistente}/>
                ) : (
                    <Link to='/cart' className="btnCard" >Finalizar compra</Link>
                )  
                }
                <Link className="btnCard" to='/'>Volver</Link>
                <ToastContainer />
            </div> 
         </div>
    )
}

export default ItemDetail