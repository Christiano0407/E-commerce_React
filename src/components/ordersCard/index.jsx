//** === Orders Cards m===  */
//import { useContext } from 'react'
//import { ShoppingCartContext } from '../../context'
import PropTypes from 'prop-types'
//import { FaCircleXmark } from 'react-icons/fa6'
//import './style/orderCard.css'

//**! ===== Orders Card Two Plus ======= */
export function OrdersCard({ totalProducts, totalPrice }) {
  return (
    <div className="flex justify-between items-center p-3 mb-3  border border-black ">
      <p className="p[10px] flex flex-col items-center">
        <span>Date: 07.24.23</span>
        <span>Products: {totalProducts}</span>
        <span>Price: {totalPrice}</span>
      </p>
    </div>
  )
}
//**?  ===  === === */
OrdersCard.propTypes = {
  totalProducts: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
}
