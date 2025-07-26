import React, { useContext } from 'react'
import ChangeProfile from './ChangeProfile'
import { AppContext } from '../../App'

const ProfilePage = () => {
  const {userName} = useContext(AppContext)
  return (
    <div>
      <h1>This is the Profile page {userName}</h1>
      <ChangeProfile/>
    </div>
  )
}

export default ProfilePage
