import React, { useEffect, useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null);

    useEffect(()=>{
        console.log(inputRef)
        inputRef.current.focus()
    },[])
  return (
    <div className='flex flex-col justify-center items-center mt-5'>
      <h1>Focus Input</h1>
      <input type='text' className='bg-white p-2 text-black' ref={inputRef}/>
    </div>
  )
}

export default FocusInput
