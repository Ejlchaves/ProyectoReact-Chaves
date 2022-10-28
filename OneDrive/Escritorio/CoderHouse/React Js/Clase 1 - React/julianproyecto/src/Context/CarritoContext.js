import { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const carritoContext = createContext([])

export const CarritoContextProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [totalCompra, setTotalCompra] = useState(0)
  

    const agregarProducto = (productoAAgregar) => {
        if(!productoEnCarrito(productoAAgregar.id)){
          setCarrito([...carrito, productoAAgregar])
        } else {
          const carritoActualizado = carrito.map(prod => {
            if(prod.id === productoAAgregar.id) {
              const productoActualizado = {
                ...prod, cantidad: productoAAgregar.cantidad
              }
              return productoActualizado
            } else {
              return prod
            }
          })
          setCarrito(carritoActualizado)
        }
      }
    
      const productoEnCarrito = (id) => {
        return carrito.some(prod => prod.id === id)
      }
    
      const quitarProducto = (id) => {
        const producto = carrito.find(prod => prod.id === id)
        const carritoSinProducto = carrito.filter(prod => prod.id != id)
        setCarrito(carritoSinProducto)
        notificacionProductoEliminado(producto)
      }
      
      const notificacionProductoEliminado = (producto) => toast.warn(`Eliminaste ${producto?.name} del carrito`,
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


      const cantidadTotalCarrito = () => {
        let cantidadTotal = 0
        carrito.forEach(prod => {
            cantidadTotal += prod.cantidad
        })
        return cantidadTotal
      }

      const obtenerCantidadProducto = (id) => {
        const producto = carrito.find(prod =>
          prod.id === id)
          return producto?.cantidad
      }


      useEffect(() => {
        const cantidadTotal = cantidadTotalCarrito()
        setCantidadTotal(cantidadTotal)
      }, [carrito]);


      const getTotalCompra = () => {
        let accu = 0

        carrito.forEach(prod => {
            accu += prod.cantidad * prod.precio
        })

        return accu
    }

    useEffect(() => {
      const total = getTotalCompra()
      setTotalCompra(total)
    }, [carrito]);

    const vaciarCarrito = () => {
      setCarrito([])
      notificacionVaciarCarrito()
    }

    const notificacionVaciarCarrito = () => toast.warn(`Tu carrito fue vaciado`,
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

    return(
        <carritoContext.Provider value={{agregarProducto, quitarProducto, carrito, cantidadTotal, obtenerCantidadProducto, totalCompra, vaciarCarrito}}>
        {children}
        </carritoContext.Provider>
    )
}

export default CarritoContextProvider