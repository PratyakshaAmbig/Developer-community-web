import React, { useContext } from 'react'
import { AppContext } from '../../App'

const HomePage = () => {
    const {userName} = useContext(AppContext)
  return (
    <div>
      <h1>The is the home page {userName}</h1>
    </div>
  )
}

export default HomePage
