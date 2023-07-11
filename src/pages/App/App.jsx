//** ==== Modules Imports  ====  */
import { Home } from '../Home'
import { MyAccount } from '../MyAccount/index'
import { MyOrder } from '../MyOrder/index'
import { MyOrders } from '../MyOrders/index'
import { SignIn } from '../SignIn/index'

//import { useState } from 'react'
import '../App/App.css'

//** === APP === */
function App() {
  return (
    <main className="">
      <Home />
      <MyAccount />
      <MyOrder />
      <MyOrders />
      <SignIn />
    </main>
  )
}

export default App
