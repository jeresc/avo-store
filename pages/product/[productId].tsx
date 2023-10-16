import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import DB from '@database'

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

    return () => {
      setProduct(undefined)
    }
  }, [productId])

  return <div>{product?.name}</div>
}

export default ProductItem

export async function getStaticPaths() {
  const db = new DB()
  const products = await db.getAll()
  const paths = products.map((product) => ({
    params: {
      productId: product.id
    }
  }))

  return {
    paths,
    fallback: false
  }
}

interface IParams {
  params: {
    productId: string
  }
}

export async function getStaticProps({ params }: IParams) {
  const db = new DB()
  const product = await db.getById(params.productId)

  return {
    props: {
      product
    }
  }
}
