//** === Card ===  */
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import PropTypes from 'prop-types'
import { FaPlus } from 'react-icons/fa'

export function Card({ data }) {
  const context = useContext(ShoppingCartContext)

  return (
    <div
      className="bg-white p-2  cursor-pointer w-full h-60 border-solid border-black  border-[3px] rounded-lg "
      onClick={() => context.openProductDetails()}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs font-semibold m-2 p-1">
          {data.category.name}
        </span>
        <img
          src={data.category.image}
          alt={data.category.name}
          className="w-full h-full object-cover bg-center bg-cover  bg-no-repeat rounded-lg "
        />
        <div>
          <button
            className="absolute top-[10px] right-[10px] flex justify-center items-center bg-white w-6 h-6 rounded-full p-2   active:scale-90 "
            onClick={() => {
              context.setCount(context.count + 1)
            }}
          >
            <FaPlus />
          </button>
        </div>
      </figure>
      <p className="flex justify-evenly items-center w-[90%] my-0 mx-auto">
        <span className="font-light text-sm ">{data.title}</span>
        <span className="text-md font-bold">${data.price}</span>
      </p>
    </div>
  )
}
//** === > > Props Types < < ===  */
Card.prototype = {
  data: PropTypes.object.isRequired,
}
