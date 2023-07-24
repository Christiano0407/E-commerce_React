//** ==== Checkout Side Menu ===  */
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import { OrderCard } from '../OrderCard'
import {
  FaCircleXmark,
  FaAngleLeft,
  FaRegHeart,
  FaShareNodes,
} from 'react-icons/fa6'
import { totalPrice } from '../../utils/index'
//import { HiShoppingBag } from 'react-icons/hi'
import './style/styleCheckout.css'

//**! == Checkout Shop */
export function CheckoutSideMenu() {
  // = Context & State =
  const context = useContext(ShoppingCartContext)
  // = Delete Shop & Cart =
  const handleDelete = (id) => {
    const filterProduct = context.cartProducts.filter(
      (product) => product.id != id
    )
    context.setCartProduct(filterProduct)

    context.setCount(context.count - 1)
  }
  // = Orders Checkout =
  const handleOrderCheckout = () => {
    const orderToAdd = {
      data: '20.07.23',
      product: context.cartProducts,
      totalProducts: context.cartProducts.length,
      total: totalPrice(context.cartProducts),
    }
    context.setOrders([...context.order, orderToAdd])
    context.setCartProduct([])
    context.setCount(0)
    //context.setCheckoutSideShopOpen()
  }

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
            <h2 className="font-bold text-xl">My Order </h2>
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
      <div className="p-[10px] my-[20px ]  overflow-y-scroll flex-1 ">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            imageUrl={product.images[0]}
            price={product.price}
            id={product.id}
            handleDelete={handleDelete} // Function
          />
        ))}
      </div>
      <section className="p-[10px] w-[90%] my-[20px ] mx-auto">
        <div className="border rounded-lg w-full h-[5px] bg-[#333] my-2 "></div>
        <p className="p-[10px] my-[10px] mx-auto flex items-center justify-between w-[90%]">
          <span className="font-medium text-base  text-black/60">Total:</span>
          <span className="text-black font-bold text-xl">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <div className="border rounded-lg w-full h-[5px] bg-[#333] my-2 "></div>
        <Link to="/my-orders/last" relative="path">
          <button
            className="w-full  border rounded-lg bg-[#111] text-[#f2f2f2] p-3 font-bold mt-3  active:scale-90 "
            onClick={() => handleOrderCheckout}
          >
            Go To Payment
          </button>
        </Link>
      </section>
    </aside>
  )
}
