import { useRouter } from 'next/router'
import React from 'react'

function ProductItem() {
  const { productId } = useRouter().query

  return <div>{productId}</div>
}

export default ProductItem
