import React from 'react'
import {useSelector} from 'react-redux'
function IncomeKharcha() {
  const [totalIncome,totalKharcha] = useSelector(state=>([state.totalIncome,state.totalKharcha]))
  return (
    <div className='bg-white p-5 my-5 rounded-lg shadow-xl h-max flex items-center justify-between'>
      <div className='flex flex-col items-center justify-center w-full border-r text-center pr-2 mr-2'>
          <span>INCOME</span>
          <span className='text-green-500 m-2'>₹{totalIncome}</span>
      </div>
      <div className='flex flex-col items-center justify-center w-full'>
          <span>KHARCHA</span>
          <span className='text-red-500 m-2'>₹{totalKharcha}</span>
      </div>
    </div>
  )
}

export default IncomeKharcha