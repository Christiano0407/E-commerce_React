//**=== Context Global ===  */
import { createContext } from 'react'
import PropTypes from 'prop-types'
//**! => Call Context */
const ShoppingCartContext = createContext()

export function ShoppingCartProvider({ children }) {
  return <ShoppingCartContext.Provider>{children}</ShoppingCartContext.Provider>
}

//**? == */
ShoppingCartProvider.propTypes = {
  children: PropTypes.array.isRequired,
}
