//**=== Context Global ===  */
import { createContext, useState } from 'react'
import PropTypes from 'prop-types'
//**! => Call Context */
export const ShoppingCartContext = createContext() // => Export
//**! === Shopping Cart ===  */
export function ShoppingCartProvider({ children }) {
  const [count, setCount] = useState(0)
  const [isProductOpen, setStateProductOpen] = useState(false)
  //  = Card - Open or Close Detail Products  =
  const openProductDetails = () => setStateProductOpen(true)
  const closeProductDetails = () => setStateProductOpen(false)
  // = Product Detail - Show Product =
  const [productToShow, setProductToShow] = useState({
    title: '',
    price: '',
    description: '',
    images: [],
  })
  // = Add Products  => Cart Shop =
  const [cartProducts, setCartProduct] = useState([])

  // == Shop Pay Open or Close ==
  const [isCheckoutSideShopOpen, setCheckoutSideShopOpen] = useState(false)
  const openShop = () => setCheckoutSideShopOpen(true)
  const closeShop = () => setCheckoutSideShopOpen(false)

  const [payCheckoutShop, setPayCheckoutShop] = useState({})

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetails,
        closeProductDetails,
        isProductOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProduct,
        isCheckoutSideShopOpen,
        setCheckoutSideShopOpen,
        openShop,
        closeShop,
        payCheckoutShop,
        setPayCheckoutShop,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

//**? == */
ShoppingCartProvider.propTypes = {
  children: PropTypes.object.isRequired,
}
