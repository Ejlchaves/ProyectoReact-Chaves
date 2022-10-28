import './Counter.css'
import {useState} from 'react'

const Counter = ({onConfirm, stock=10, initial=1})=>{
    let [count, setCount] = useState(initial)

    const sumar = () => {
        if(count < stock) {
        setCount(count + 1)}
        
    }

    const restar = () => {
        if(count > 1) {
       setCount(count - 1)}
    }

    const reiniciar = () => {
        setCount(initial)
    }

    return (
        <div>
            <h1>Unidades: {count}</h1>
            <div className='btnContainer'>
            <button className='btnCard' onClick={restar}>-</button>
            <button className='btnCard' onClick={sumar}>+</button>
            <button className='btnCard' onClick={reiniciar}>Reiniciar</button>
            </div>
            <div>
                <button className='btnCardAgregar' onClick={() => onConfirm(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Counter 