import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function page() {
  return (
    <div>
      <UserProfile routing="hash"/>
    </div>
  )
}

export default page
