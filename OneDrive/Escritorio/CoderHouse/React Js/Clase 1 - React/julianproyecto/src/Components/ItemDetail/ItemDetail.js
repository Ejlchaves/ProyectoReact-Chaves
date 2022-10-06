import './ItemDetail.css'
import { Item } from '../Item/Item'

const ItemDetail = ({productos}) => {

    return (
      <div className='listContainer'>
          {productos.map(prod => 
          <Item key={prod.id} prod={prod} />
          )}
      </div>)}

export default ItemDetail