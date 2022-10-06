import './ItemDetailContainer.css'
import { getProduct  } from '../ProductosAsync/AsyncProducto'
import { useEffect, useState } from 'react'
/* import ItemDetail from '../Item/ItemDetail' */
import { useParams } from 'react-router-dom'
import { ItemVistaPrevia } from '../Item/Item'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const { productoId } = useParams()
    
    useEffect(() => {
        getProduct(productoId).then(resuelto => {
            setProducto(resuelto)
            console.log(resuelto)
            setLoading(false)
        })
    }, [productoId])

    if(loading) {
        return (
        <h1>Cargando...</h1>
        )
    }

    return (
        <div className='itemDetailContainer'>
            <h1>Detalle de Producto</h1>
            <ItemVistaPrevia producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer