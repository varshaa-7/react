import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData]= useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/varshaa-7')
    })
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github followers: 
      
    </div>
  )
}

export default Github
