import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function ProductItem() {
  const { productId } = useRouter().query
  const [product, setProduct] = useState<TProduct>()

  useEffect(() => {
    if (typeof productId !== 'string') return
    window
      .fetch(`/api/avo/${productId}`)
      .then(async (res) => await res.json())
      .then(setProduct)
      .catch(console.error)
  }, [productId])

  return <div>{product?.name}</div>
}

export default ProductItem
