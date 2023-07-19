//** ==== Checkout Side Menu ===  */
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import { OrderCard } from '../OrderCard'
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
            <h2 className="font-bold text-xl">Cart Shop</h2>
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
      <div className="p-[10px] my-[20px ] ">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            imageUrl={product.images[0]}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>
    </aside>
  )
}
