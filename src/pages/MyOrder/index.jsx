/* eslint-disable react/jsx-no-undef */
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import { Layout } from '../../components/Layout/index'
import { OrderCard } from '../../components/OrderCard/index'

export function MyOrder() {
  const context = useContext(ShoppingCartContext)
  //console.log(context.order?.slice(-1)[0])
  //const latestOrderProducts = context.order?.at(-1)[0]?.products || []
  //context.order?.slice(-1)[0].products
  const latestOrderProducts = context.order?.slice(-1)?.[0]?.products || []
  return (
    <Layout>
      <h1>My Order</h1>
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
