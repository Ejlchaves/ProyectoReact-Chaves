import './Counter.css'
import {useState} from 'react'

const Counter = ()=>{
    const initial = 1
    let [count, setCount] = useState(initial)
    const stock = 10

    const sumar = () => {
        if(count < stock) {
        setCount(count + 1)}
        
    }

    const restar = () => {
        if(count > 0) {
       setCount(count - 1)}
    }

    const reiniciar = () => {
        setCount(initial)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={restar}>-</button>
            <button onClick={sumar}>+</button>
            <button onClick={reiniciar}>Reiniciar</button>
            <div>
                <button>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Counter 