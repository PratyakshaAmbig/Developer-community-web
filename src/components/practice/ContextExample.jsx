import React, { useContext } from 'react'
import HomePage from './HomePage'
import ProfilePage from './ProfilePage'

const ContextExample = () => {
  return (
    <div className='mx-auto flex items-center justify-center mt-10'>
      <div>
        <HomePage/>
        <ProfilePage/>
      </div>
    </div>
  )
}

export default ContextExample
