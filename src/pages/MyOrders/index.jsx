//** =========== Page: My Orders 02 (All Products) ===========  */
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import { Link } from 'react-router-dom'
import { Layout } from '../../components/Layout/index'
import { OrdersCard } from '../../components/ordersCard/index'
import PropTypes from 'prop-types'
//import { FaAngleLeft } from 'react-icons/fa6'

export function MyOrders() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className="flex w-[150px] items-center  justify-between p-[10px]  mb-3 ">
        <h1>My Orders 02</h1>
      </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${order.id}`}>
          <OrdersCard
            totalPrice={order.price}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  )
}

MyOrders.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired,
}
