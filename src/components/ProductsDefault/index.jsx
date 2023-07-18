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
      } productDefault-menu flex-col right-0 p-[20px]  bg-[#f2f2f2] `}
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
              className="p-[5px] active:scale-90 cursor-pointer"
              onClick={() => context.closeProductDetails()}
            >
              <FaCircleXmark />
            </button>
          </li>
        </ul>
      </div>
      <figure className="my-4 mx-auto h-[60%]">
        <img
          className="w-full h-full rounded-lg object-cover bg-center bg-cover  bg-no-repeat"
          src={context.productToShow.images[0]}
          alt={context.productToShow.title}
        />
      </figure>
      <section className="my-4 mx-auto  p-2 flex flex-col ">
        <p className="my-2 text-black font-bold  text-lg">
          ${context.productToShow.title}
        </p>
        <p className="my-2 text-black/50 font-normal text-base">
          ${context.productToShow.description}
        </p>
        <div className=" w-full flex justify-evenly items-center my-2 mx-auto p-1">
          <span className="text-black font-extrabold text-lg ">
            ${context.productToShow.price}
          </span>
          <button className="bg-black text-white  p-[10px] text-base rounded-lg border-none ">
            Buy Now
          </button>
          <button>Hello</button>
        </div>
      </section>
    </aside>
  )
}
