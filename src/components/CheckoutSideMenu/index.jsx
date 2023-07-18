//** ==== Checkout Side Menu ===  */
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import {
  FaCircleXmark,
  FaAngleLeft,
  FaRegHeart,
  FaShareNodes,
} from 'react-icons/fa6'
//import { HiShoppingBag } from 'react-icons/hi'
import './style/styleCheckout.css'

//**! == Checkout Shop */
export function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext)

  return (
    <aside
      className={`${
        context.isCheckoutSideShopOpen ? 'flex' : 'hidden'
      }  flex-col right-0 p-[20px]  bg-[#f8f8f8]  checkoutShop-menu  `}
    >
      <div className=" p-1">
        <ul className=" p-1 flex justify-between items-center">
          <li>
            <FaAngleLeft />
          </li>
          <li>
            <h2 className="font-medium text-xl">Cart Shop</h2>
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
              onClick={() => {
                context.closeShop()
              }}
            >
              <FaCircleXmark />
            </button>
          </li>
        </ul>
      </div>
      <figure className="my-4 mx-auto h-[60%]">
        <img
          className="w-full h-full rounded-lg object-cover bg-center bg-cover  bg-no-repeat"
          src=""
          alt=""
        />
      </figure>
      <section className="my-4 mx-auto  p-2 flex flex-col ">
        <p className="my-2 text-black font-bold  text-lg"></p>
        <p className="my-2 text-black/50 font-normal text-base"></p>
        <span className="text-black font-extrabold text-lg "></span>
      </section>
    </aside>
  )
}
