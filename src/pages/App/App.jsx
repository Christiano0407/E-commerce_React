//** ==== Router DOM  Import ====  */
import { useRoutes, BrowserRouter } from 'react-router-dom'
//**! === Context Global Provider === */
import { ShoppingCartProvider } from '../../context'
//** ==== Modules Imports & Components  ====  */
import { Home } from '../Home'
import { MyAccount } from '../MyAccount/index'
import { MyOrder } from '../MyOrder/index'
import { MyOrders } from '../MyOrders/index'
import { NotFound } from '../NotFound/index'
import { SignIn } from '../SignIn/index'
import { NavBar } from '../../components/navBar/index'
import { CheckoutSideMenu } from '../../components/CheckoutSideMenu'
//import { useState } from 'react'
import '../App/App.css'

//** === Routes ===  */
const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/*', element: <NotFound /> },
    { path: '/sign-in', element: <SignIn /> },
  ])
  return routes
}

//** === APP === */
function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
