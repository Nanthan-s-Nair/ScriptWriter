import React from 'react'
import {Search} from 'lucide-react'
import { UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <div className='flex justify-end p-5 shadow-sm border-b-2 '>
      <div className='flex '><UserButton/></div>
    </div>
  )
}

export default Header
