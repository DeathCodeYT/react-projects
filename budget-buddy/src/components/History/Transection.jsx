import React from 'react'

function Transection({ expense = false,amount,text,date }) {
  function getCurrentDateTime(date) {
    const now = date;
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear().toString().slice(-2);
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? ' PM' : ' AM';
    const formattedTime = `${hours % 12 || 12}:${minutes}${ampm}`;
    return `${day}-${month}-${year} (${formattedTime})`;
  }
  return (
    <div className={`p-2 ${expense ? "text-red-600" : "text-green-600"} bg-white m-1 text-right border-r-4 ${expense ? "border-red-600" : "border-green-600"} flex items-center justify-between rounded-l-md shadow-md`}>
      <div className='flex flex-col  items-start'>
        <span className='text-black text-base'>{text}</span>
        <span className='text-gray-500 text-xs'>{getCurrentDateTime(date)}</span>
      </div>
      <span className='text-base'>{expense ? "-" : "+"}{amount}</span>
    </div>
  )
}

export default Transection