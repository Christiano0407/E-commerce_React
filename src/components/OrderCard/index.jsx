//** === Order Cards === Pay === */
//import { useContext } from 'react'
//import { ShoppingCartContext } from '../../context'
import PropTypes from 'prop-types'
import { FaCircleXmark } from 'react-icons/fa6'

import './style/orderCard.css'
//**! ===== Order Card ======= */
export function OrderCard({ id, title, imageUrl, price, handleDelete }) {
  //const { id, title, imageUrl, price, handleDelete } = props
  //const context = useContext(ShoppingCartContext)

  return (
    <div key={id} className="flex justify-between items-center p-3 mb-3 ">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <div className="flex-col">
          <p className="text-sm font-light text-black">{title}</p>
          <p className="text-black text-lg font-bold ">${price}</p>
        </div>
      </div>
      <div className="">
        <button className="p-[10px]" onClick={() => handleDelete(id)}>
          <FaCircleXmark />
        </button>
      </div>
    </div>
  )
}
//**?  ===  === === */
OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
}
