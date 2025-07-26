import React, { useContext, useState } from 'react'
import { AppContext } from '../../App';

const ChangeProfile = () => {
    const {setUserName} = useContext(AppContext)
     const [newUserName, setNewUserName] = useState('');
  return (
    <div className='flex gap-2'>
      <input type='text' value={newUserName} onChange={(e)=>setNewUserName(e.target.value)} className='border'/>
      <button onClick={()=>setUserName(newUserName)} className='bg-red-300 p-2 rounded-xl'>Change UserName</button>
    </div>
  )
}

export default ChangeProfile
