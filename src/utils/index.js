//**! === ===  Function Specific  > Price === ===*/
//*? Products == Call API  */
/**
 * This Function calculate total price of a new order
 * @param {Array} products cartProduct (Context-useState) : Array of Object
 * @returns {Number} Total price
 */
export const totalPrice = (products) => {
  let sum = 0
  products.forEach((product) => (sum += product.price))
  return sum
}
