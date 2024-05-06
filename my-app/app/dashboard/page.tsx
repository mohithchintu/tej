import React from 'react'
import SignOutButton from '../components/signout'

const page = () => {
  return (
    <div className='p-10 space-y-5'>
      <p>Welcome</p>
      <p>This is home page</p>
      <SignOutButton />
    </div>
  )
}

export default page
