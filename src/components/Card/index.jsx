//** === Card ===  */
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import PropTypes from 'prop-types'
import { FaPlus } from 'react-icons/fa'
import './style/card.css'

export function Card({ data }) {
  const context = useContext(ShoppingCartContext)
  // == Show Products ==
  const showProducts = (productDetail) => {
    context.openProductDetails()
    context.setProductToShow(productDetail)
  }
  // == Add Products To Cart ==
  const addProductCart = (event, productData) => {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProduct([...context.cartProducts, productData])
    console.log('Add Product Cart: ', context.cartProducts)
    context.openShop()
    // context.closeShop()
  }
  // == Show Add Cart ==
  /* const showAddShopCart = (shopProduct) => {
    context.openShop()
    context.setCheckoutSideShopOpen(shopProduct)
    context.setPayCheckoutShop(shopProduct)
  } */
  /* const showAddCart = (productPayShop) => {
    context.setPayCheckoutShop(productPayShop)
  }
 */
  return (
    <div
      key={data.id}
      onClick={() => showProducts(data)}
      className="bg-white p-2  cursor-pointer w-full h-70 rounded-lg  card-hover "
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs font-semibold m-2 p-1">
          {data.title}
        </span>
        <img
          src={data.images[0]}
          alt={data.title}
          className="w-full h-full object-cover bg-center bg-cover  bg-no-repeat rounded-lg "
        />
        <div>
          <button
            className="absolute top-[10px] right-[10px] flex justify-center items-center bg-white w-6 h-6 rounded-full   active:scale-90 "
            onClick={(event) => {
              addProductCart(event, data)
              /*  showAddShopCart(data) */
              /*  showAddCart(data) */
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
