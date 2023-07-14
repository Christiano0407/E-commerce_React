//** === === Home Page === === */
import { useState, useEffect } from 'react'
import { Layout } from '../../components/Layout/index'
import { Card } from '../../components/Card'
import { ProductsDefault } from '../../components/ProductsDefault'

export function Home() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])

  return (
    <Layout className="">
      <h1>Home</h1>
      <div className="grid gap-4  w-full max-w-screen-xl mob:grid-cols-1  sm:grid-cols-2  md:grid-cols-4 ">
        {data?.slice(0, 20).map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductsDefault />
    </Layout>
  )
}
//** > "()" == return < */
