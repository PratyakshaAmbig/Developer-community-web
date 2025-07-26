import React from 'react'
import Person1 from './practice/Person1'
import Person2 from './practice/Person2'

const HigerOderExample = () => {
  return (
    <div className='flex flex-col items-center justify-center my-10'>
      <h1 className='text-2xl'>Auctions</h1>
      <Person1/>
      <Person2/>
    </div>
  )
}

export default HigerOderExample
