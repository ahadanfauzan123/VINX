import React from 'react'
import ListBox from '../adminParts/ListBox'

function Salary() {
  return (
    <div className='w-[550px] flex flex-col justify-start gap-y-4 items-start p-4 bg-cardTheme rounded-[20px]'>
        {/* dropdown */}
        <ListBox />
        {/* title */}
        <h2 className='text-2xl font-bold text-color mt-5'>Total Earn Last Month</h2>
        {/* body */}
        <div className='flex items-center justify-center p-2 bg-themeSecondary mt-3 w-full rounded-lg h-[100px]'>
            <h1 className='text-blue-300 text-3xl font-extrabold'>$500.00</h1>
        </div>
    </div>
  )
}

export default Salary