//** === Products Default === */
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import {
  FaCircleXmark,
  FaAngleLeft,
  FaRegHeart,
  FaShareNodes,
} from 'react-icons/fa6'
//import { HiShoppingBag } from 'react-icons/hi'
import './style/productDefault.css'

export function ProductsDefault() {
  const context = useContext(ShoppingCartContext)
  // console.log('State: ProductToShow', context.productToShow)

  return (
    <aside
      className={`${
        context.isProductOpen ? `flex ` : `hidden`
      } productDefault flex-col right-0 p-3  bg-[#f2f2f2] `}
    >
      <div className=" p-1">
        <ul className=" p-1 flex justify-between items-center">
          <li>
            <FaAngleLeft />
          </li>
          <li>
            <h2 className="font-medium text-xl">Details</h2>
          </li>
          <li>
            <FaRegHeart />
          </li>
          <li>
            <FaShareNodes />
          </li>
          <li>
            <button
              className="p-[5px] active:scale-90"
              onClick={() => context.closeProductDetails()}
            >
              <FaCircleXmark />
            </button>
          </li>
        </ul>
      </div>
      <figure>
        <img
          className="w-full h-full rounded-lg object-cover bg-center bg-cover  bg-no-repeat"
          src={context.productToShow.images}
          alt={context.productToShow.title}
        />
      </figure>
      <p>
        <span>${context.productToShow.title}</span>
        <span>${context.productToShow.price}</span>
        <span>${context.productToShow.description}</span>
      </p>
    </aside>
  )
}
