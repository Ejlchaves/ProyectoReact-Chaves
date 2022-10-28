import {useState, useEffect} from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/Firebase'


const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()


    useEffect(() => {
        setLoading(true)

        const collectionRef= categoriaId 
                ? query(collection(db, 'productos'), where('genero', '==', categoriaId)) 
                :collection(db, 'productos')

        getDocs(collectionRef).then(response =>{  
            const productosAdaptados = response.docs.map(doc => {
                const data = doc.data();
                return ({id:doc.id, ...data})
            })
            setProductos(productosAdaptados)
        })
        .catch(error => {
            <h1>No se pudieron cargar los producotos</h1>
        })
        .finally(
            setLoading(false)
        )

    }, [categoriaId]) 

    if(loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <div>
            { <ItemList productos={productos}/>}
            </div>
        </div>
    )
}

export default ItemListContainer