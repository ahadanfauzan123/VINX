import React from 'react'

function SearchTemplate() {
  return (
    <div className='bg-cardTheme flex flex-col space-y-4 p-5 min-h-[200px] w-full tablet:w-[680px] laptop:w-full rounded-[20px]'>
      {/* header */}
      <div className=''>
        <h1 className='font-bold text-2xl text-color'>Search</h1>
      </div>

      {/* input */}
      <div className='flex items-center justify-between'>
        <input type="text" name="" id=""
          className='flex-1 border-2 text-color bg-inputTheme border-purple-300 focus:ring-0 focus:border-purple-300'
          placeholder='Search the templates!!'
        />
        <button type='button' className='py-2 px-4 hover:scale-110 bg-purple-300 border-2 border-purple-300 text-white transtion-all duration-200'>Submit</button>
      </div>
      {/* recomendation */}
      <div className='flex flex-wrap space-x-2 py-3'>
        <button className='px-3 py-1 bg-theme rounded-full border border-gray-500'>shop</button>
        <button className='px-3 py-1 bg-theme rounded-full border border-gray-500'>portofolio</button>
        <button className='px-3 py-1 bg-theme rounded-full border border-gray-500'>resume</button>
        <button className='px-3 py-1 bg-theme rounded-full border border-gray-500'>games</button>
      </div>
    </div>
  )
}

export default SearchTemplate