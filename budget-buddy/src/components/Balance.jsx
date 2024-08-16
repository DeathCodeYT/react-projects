import React from 'react'
import {useSelector} from 'react-redux'

function Balance() {
  const totalBalance = useSelector(state=>state.totalBalance)
  return (
    <>
     <span>Your balance:</span>
     <span className='text-4xl font-bold'>₹{totalBalance}</span>
    </>
  )
}

export default Balance