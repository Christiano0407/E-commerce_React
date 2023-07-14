//**=== Context Global ===  */
import { createContext, useState } from 'react'
import PropTypes from 'prop-types'
//**! => Call Context */
export const ShoppingCartContext = createContext() // => Export

export function ShoppingCartProvider({ children }) {
  const [count, setCount] = useState(0)

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
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
