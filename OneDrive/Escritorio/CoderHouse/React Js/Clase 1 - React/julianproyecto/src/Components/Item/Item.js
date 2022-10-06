import "../Item/Item.css"
import { Link } from "react-router-dom"
import Counter from "../Counter/Counter"


export const Item = ({prod}) => {
    return (
        <div className='cardProducto'>
        <img src={prod.img} alt={prod.name} />
        <h2>{prod.name}</h2>
        <h4>Descripcion</h4>
        <h3>Precio: {prod.precio}</h3>
         <Link to={`/detail/${prod.id}`} className='btnCard'>
          <button className="btnCard">Detalle de producto</button>
        </Link>
        </div>
    )
}

export const ItemVistaPrevia = ({producto}) => {
    return(
        <div className="vistaPreviaContainer">
            <div>
                <img className="imgVistaPrevia" src={producto.img} alt={producto.name} />
            </div>
            <div className="detalleVistaPrevia">
                <h2>{producto.name}</h2>
                <p>Descripcion de producto..
                </p>
                <h3>Precio: ${producto.precio}</h3>
                <Counter />
            </div> 
         </div>
    )
}