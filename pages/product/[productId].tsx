import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function ProductItem() {
  const { productId } = useRouter().query
  const [product, setProduct] = useState<TProduct>()

  useEffect(() => {
    window
      .fetch(`/api/avo/${productId}`)
      .then((res) => res.json())
      .then(setProduct)
  }, [productId])

  return <div>{product?.name}</div>
}

export default ProductItem
