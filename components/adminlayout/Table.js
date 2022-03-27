import React from 'react'

function Table() {

    const i = 0;
    const t = 0;


  return (
    <div className='relative className mt-6 w-full p-4 bg-cardTheme rounded-[20px] h-[450px] flex items-end justify-center shadow-sm'>
        {/* title */}
        <div className='absolute -top-2 -left-2 bg-violet-500 w-[150px] py-3 px-4 rounded-tl-[20px] flex justify-center'>
            <h2 className='text-lg font-bold text-white'>Recently sold</h2>
        </div>
        {/* table */}
        <div className='flex-1 w-full h-[350px] p-4 bg-themeSecondary rounded-lg flex flex-col gap-y-3'>
            {/* header */}
            {/* body */}
            <div className='relative bg-cardTheme py-3 px-2 text-color rounded-lg flex justify-start items-center space-x-4 mt-3' >
                <h4 className=''>1</h4>
                <h4 className='bg-themeSecondary py-1 px-2 rounded-xl text-xs'>Portofolio 1</h4>
                <h4 className='truncate w-[100px] text-center font-extrabold text-colorProduct'>$40.00</h4>
                <h4 className='truncate w-[205px]'>ahadanfauzan@gmail.com</h4>
                <button className='mobile:hidden tablet:inline-flex absolute -top-2 -right-2 px-2 py-1 bg-green-400 text-color rounded-tr-lg hover:scale-95 transition-all duration-150' >success</button>
            </div>
            <div className='relative bg-cardTheme py-3 px-2 text-color rounded-lg flex justify-start items-center space-x-4 mt-3' >
                <h4 className=''>2</h4>
                <h4 className='bg-themeSecondary py-1 px-2 rounded-xl text-xs'>Portofolio 2</h4>
                <h4 className='truncate w-[100px] text-center font-extrabold text-colorProduct'>$40.00</h4>
                <h4 className='truncate w-[205px]'>ahadanfauzan@gmail.com</h4>
                <button className='mobile:hidden tablet:inline-flex absolute -top-2 -right-2 px-2 py-1 bg-yellow-300 text-color rounded-tr-lg hover:scale-95 transition-all duration-150' >pending</button>
            </div>
        </div>

    </div>
  )
}

export default Table