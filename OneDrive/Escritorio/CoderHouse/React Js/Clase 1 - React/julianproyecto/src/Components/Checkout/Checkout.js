import './Checkout.css'
import {useState, useContext} from 'react'
import { carritoContext } from '../../Context/CarritoContext'
import {addDoc, collection, getDocs, where, query, documentId, writeBatch} from 'firebase/firestore'
import {db} from '../../services/Firebase/index'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const {carrito, totalCompra, vaciarCarrito} = useContext(carritoContext)
    

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [dni, setDni] = useState('')
    const [email1, setEmail1] = useState('')
    const [email2, setEmail2] = useState('')

    const ordenDeCompraGenerada = (orden) => toast.success(`Hemos generado correctamente tu Orden de Compra bajo el codigo ${orden.id}`,
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

    const falloOrdenDeCompra = () => toast.error(`Tenes productos sin stock en tu carrito`,
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

    const datosErroneos = () => toast.warn(`Los campos del formulario no se completaron correctamente`,
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

     const generarOrden = async (e) => {
        e.preventDefault()
         setLoading(true) 
        
        if(email1 === email2 && nombre !== '' && apellido !== '' && dni !== '' && email1 !== '') {

        try {
            const objetoOrden = {
                buyer:{
                    nombre:`${nombre}`,
                    apellido: `${apellido}`,
                    dni:`${dni}`,
                    email:`${email1}`
                },
                items: carrito,
                totalCompra
            }
    
            console.log(objetoOrden)
    
            const idsProductosCarrito = carrito.map(prod => prod.id)
            const productosRef = collection(db, 'productos')
    
            const productosDelCarritoDesdeFirestore = await getDocs(query(productosRef, where(documentId(),'in', idsProductosCarrito)))
            const { docs } = productosDelCarritoDesdeFirestore 
    
            const batch = writeBatch(db)
            const fueraDeStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.cantidad
    
                const productoAgregadoEnCarrito = carrito.find(prod => prod.id === doc.id)
                const cantidadProductoAgregadoEnCarrito = productoAgregadoEnCarrito.cantidad
    
                if (stockDb >= cantidadProductoAgregadoEnCarrito) {
                    batch.update(doc.ref, {cantidad: stockDb - cantidadProductoAgregadoEnCarrito})
                } else {
                    fueraDeStock.push({id: doc.id, ...dataDoc})
                }
            })
    
            if (fueraDeStock.length === 0) {
                await batch.commit()

                const ordenRef = collection(db, 'ordenes')
                const ordenAgregada = await addDoc(ordenRef, objetoOrden)

                ordenDeCompraGenerada(ordenAgregada)
                vaciarCarrito()
            } else {
                falloOrdenDeCompra()
            }
    } catch(error) {
        console.log(error)
    } finally {
        setLoading(false)
    }
} else{
    datosErroneos()
    setLoading(false)
}
}

if(loading) {
    return <h1>Estamos generando su orden de compra!</h1>
}

return (
    <>
    <div className='formContainer'>
        <form className='form'>
        <h1>Checkout</h1>
        <p>Completando el siguiente formulario, se generara la orden de pago para su compra.</p>
        <h2>Ingrese sus Datos </h2>
            <label>Nombre: </label>
            <input 
            name='nombre'
            className='formInput' 
            value={nombre} 
            placeholder='Nombre' 
            required="required"
            onChange={(e) => setNombre(e.target.value)} />
            <br />
            <label>Apellido: </label>
            <input 
            name='apellido'
            className='formInput' 
            value={apellido}  
            placeholder='Apellido' 
            required="required"
            onChange={(e) => setApellido(e.target.value)}/>
            <br />
            <label>Correo Electronico: </label>
            <input
            name='email1' 
            className='formInput' 
            value={email1} 
            placeholder='Email' 
            type='email'
            required="required"
            onChange={(e) => setEmail1(e.target.value)}/>
            <br />
            <label>Repetir Correo Electronico: </label>
            <input
            name='email2' 
            className='formInput' 
            value={email2} 
            placeholder='Email' 
            type='email'
            required="required"
            onChange={(e) => setEmail2(e.target.value)}/>
            <br />
            <label>DNI: </label>
            <input
            name='dni'
            className='formInput' 
            min='0' 
            max='99999999' 
            value={dni} 
            placeholder='DNI' 
            required="required"
            type='number'onChange={(e) => setDni(e.target.value)}/>
            <br />
            <button  onClick={generarOrden}  className='buttonOrder'>Generar Orden</button>
        </form>
    </div>
    </>
)
}
 export default Checkout