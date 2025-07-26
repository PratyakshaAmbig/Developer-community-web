import React, { useState } from 'react'
import HOC from './HOC'

const Person2 = ({money, handleIncreaseMoney}) => {
  return (
   <div className="flex items-center gap-2 mt-5">
      <h1>Rohit is offering RS:{money}</h1>
      <button onClick={handleIncreaseMoney} className="bg-red-400 p-2 rounded-xl">
        Increase Money
      </button>
    </div>
  )
}

export default HOC(Person2)
