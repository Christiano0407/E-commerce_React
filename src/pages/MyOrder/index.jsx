//** ============ Page: My Order 01 ============ */
/* eslint-disable react/jsx-no-undef */
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import { Link } from 'react-router-dom'
import { Layout } from '../../components/Layout/index'
import { OrderCard } from '../../components/OrderCard/index'
import { FaAngleLeft } from 'react-icons/fa6'

export function MyOrder() {
  const context = useContext(ShoppingCartContext)
  //console.log(context.order?.slice(-1)[0])
  //const latestOrderProducts = context.order?.at(-1)[0]?.products || []
  //context.order?.slice(-1)[0].products
  const latestOrderProducts = context.order?.slice(-1)?.[0]?.products || []
  return (
    <Layout>
      <div className="flex w-[150px] items-center  justify-between p-[10px] ">
        <Link to={`/my-orders`}>
          <button
            className=" border p-[5px]  rounded-lg bg-[#111] text-[#f2f2f2]  font-bold  active:scale-90"
            onClick={() => console.log('Orders 02')}
          >
            <FaAngleLeft />
          </button>
        </Link>
        <h1>My Order 01</h1>
      </div>
      <div className="p-[10px] my-[20px ] flex flex-col w-80 ">
        {latestOrderProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  )
}
/**
 * La palabra clave ?. se llama operador de desempaquetado seguro. El operador de desempaquetado seguro solo accederá a la propiedad order si no es nula. Si order es nula, el operador de desempaquetado seguro no hará nada.
 */
