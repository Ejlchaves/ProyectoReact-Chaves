import "../Item/Item.css"
import { Link } from "react-router-dom"


const Item = ({id, name, img, precio}) => {
    return (
        <div className='cardProducto'>
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <h4>Descripcion</h4>
        <h3>Precio: {precio}</h3>
         <Link to={`/detail/${id}`} >
          <button className="btnCard">Detalle de producto</button>
        </Link>
        </div>
    )
}

export default Item