import React from 'react'
import {Search} from 'lucide-react'

function Searchsec({onSearch}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center'>
      <h2 className='text-2xl font-bold'>Your Friendly Neighbourhood Ai 😉</h2>
      <p className='text-white'>-always ready for your prompts</p>
      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]'>
            <Search/>
            <input type="text" placeholder='Search' onChange={(event)=>onSearch(event.target.value)}
            className='bg-transparent w-full outline-none text-black'/>
        </div>
      </div>
    </div>
  )
}

export default Searchsec
