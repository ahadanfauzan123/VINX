import React from 'react'

function Chart() {
  return (
    <div className='relative p-4 bg-cardTheme rounded-[20px] h-[400px]'>
      {/* title */}
      <div className='absolute -top-2 -left-2 flex justify-center rounded-tl-[20px] px-6 py-3 bg-blue-500 text-white'>
        <h2 className='text-lg font-bold' >
          Chart
        </h2>
      </div>
    </div>
  )
}

export default Chart