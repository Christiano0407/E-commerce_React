//**=== Context Global ===  */
import { createContext, useState } from 'react'
import PropTypes from 'prop-types'
//**! => Call Context */
export const ShoppingCartContext = createContext() // => Export

export function ShoppingCartProvider({ children }) {
  const [count, setCount] = useState(0)
  const [isProductOpen, setStateProductOpen] = useState(false)
  //  = Card - Open or Close Detail Products  =
  const openProductDetails = () => setStateProductOpen(true)
  const closeProductDetails = () => setStateProductOpen(false)

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetails,
        closeProductDetails,
        isProductOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

//**? == */
ShoppingCartProvider.propTypes = {
  children: PropTypes.array.isRequired,
}
