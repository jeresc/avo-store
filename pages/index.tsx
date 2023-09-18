import { useEffect, useState } from 'react'

function Home() {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((res) => res.json())
      .then(({ data }) => {
        setProductList(data)
      })
  }, [])

  return (
    <main>
      <h2>Hey there! </h2>
      {Boolean(productList?.length) &&
        productList.map((product) => (
          <div key={product.id}>
            {product.name} - {product.id}
          </div>
        ))}
    </main>
  )
}

export default Home
