import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IProps {
  avo: TProduct
}

export function Avo({ avo }: IProps) {
  return (
    <article
      className="flex flex-col w-full justify-center items-center
      rounded-2xl shadow-lg p-4 gap-2 max-w-sm hover:scale-105 duration-200 transition-all
      hover:shadow-xl cursor-pointer"
    >
      <Link href={`/product/${avo.id}`}>
        <Image src={avo.image} alt={avo.name} width={256} height={256} />
      </Link>
      <span className="flex gap-2 justify-center flex-wrap">
        <h2 className="text-xl font-medium">{avo.name}</h2>
        <p className="bg-lime-200 p-0.5 rounded-md px-1.5 text-lime-600 font-bold">
          {'$ 0' + avo.price}
        </p>
      </span>
      <p className="flex gap-2 justify-center text-gray-600">
        <span className="bg-gray-200 p-1 px-1.5 rounded-md">
          {avo.attributes.taste.split(',')[0]}
        </span>
        <span className="bg-gray-200 p-1 px-1.5 rounded-md">
          {avo.attributes.shape}
        </span>
      </p>
    </article>
  )
}
