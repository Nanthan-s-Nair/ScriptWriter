import React from 'react'
import { TEMPLATE } from './Templatelist'
import Image from 'next/image'
import Link from 'next/link'

function Templatecard(item: TEMPLATE) {
  return (
    <Link href={'/dashboard/content/'+item.slug}>
    <div className='p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer'>
      <Image src={item.icon} alt={item.name} width={50} height={50} />
      <h2 className='font-medium text-lg'>{item.name}</h2>
      <p className='text-gray-600 line-clamp-5'>{item.desc}</p>
    </div></Link>
  )
}

export default Templatecard
