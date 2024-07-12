"use client"
import React, { useState } from 'react'
import Searchsec from './_components/Searchsec'
import Templatelist from './_components/Templatelist'

function Dashboard() {
  const [userinput, setuserinput]=useState<string>()
  return (
    <div>
      <Searchsec onSearch={(value:string)=>setuserinput(value)}/>
      <Templatelist userinput={userinput}/>
    </div>
  )
}

export default Dashboard
