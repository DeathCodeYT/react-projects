import React from 'react'
import Transection from './Transection'
import {useSelector} from 'react-redux'

function TransictionList() {
  const transectionList = useSelector(state=>state.transictions)
  return (
    <>
    <span className='text-2xl font-semibold w-full border-b border-gray-500'>History</span>
    <div className='flex flex-col gap-1 p-2 h-[200px] overflow-auto'>
      {
        transectionList.length<1?"No Transections Avaiable":transectionList.map(transection=>(
          <Transection expense={transection.expense} amount={transection.amount} text={transection.text} date={transection.date}/>
        ))
      }
    </div>
    </>
  )
}

export default TransictionList