import './ItemDetailContainer.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  ItemDetail from '../ItemDetail/ItemDetail'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/Firebase'

const ItemDetailContainer = ({setCart}) => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const { productoId } = useParams()
    
    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, 'productos', productoId)
        
        getDoc(docRef).then(doc => {
            const data = doc.data()
            const productoAdaptado = {id:doc.id, ...data}

            setProducto(productoAdaptado)
        })
        .catch(error => console.log(error))
        .finally(
            setLoading(false)
        )
    }, [productoId])

    if(loading) {
        return (
        <h1>Cargando...</h1>
        )
    }

    return (
        <div className='itemDetailContainer'>
            <h1>Detalle de Producto</h1>
            <ItemDetail {...producto } setCart={setCart} />
        </div>
    )
}

export default ItemDetailContainer