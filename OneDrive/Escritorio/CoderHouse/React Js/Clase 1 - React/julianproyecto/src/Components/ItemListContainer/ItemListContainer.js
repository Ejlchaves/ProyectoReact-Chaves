import {useState, useEffect} from 'react'
import './ItemListContainer.css'
import { getProducts, GetProductsByCategory } from '../ProductosAsync/AsyncProducto'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()


    useEffect(() => {
        if(!categoriaId) {
            getProducts().then(resp => {
                setProductos(resp)
                setLoading(false)
            }).catch(error => {
                console.log(error)
            })
        } else {
            GetProductsByCategory(categoriaId).then(resp => {
                setProductos(resp)
                setLoading(false)
            }).catch(error => {
                console.log(error)
            })
        }
    }, [categoriaId]) /*Utilizamos las llaves para que solo se aplique despues del montaje de los componentes*/   

    if(loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <div>
            { <ItemDetail productos={productos}/>}
            </div>
        </div>
    )
}

export default ItemListContainer