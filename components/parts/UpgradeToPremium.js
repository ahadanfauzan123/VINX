import { LoginIcon, TrendingUpIcon } from '@heroicons/react/outline'
import React from 'react'

function UpgradeToPremium() {
  return (
    <div className='flex flex-col items-center space-y-4 p-5 ml-8 bg-purple-300 rounded-[20px] hover:scale-105 transition-all duration-200 ease-in'>
        {/* upgrade logo and title */}
        <div className='flex flex-col space-y-2 justify-center items-center'>
            <div className='flex items-center justify-center w-[50px] h-[50px] bg-white rounded-full'>
            <TrendingUpIcon className='w-8 h-8 text-purple-300 shadow-sm'/>
            </div>
            <h1 className='text-white text-xl font-bold'>Upgrade to Premium</h1>
        </div>

        {/* information */}
        <div className='flex items-center justify-center max-w-full'>
            <p className='text-md font-semibold text-gray-200 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident.</p>
        </div>
        {/* buttons */}
        <div className='flex items-center justify-center space-x-4 w-full'>
        <button className='w-[100px] bg-white text-purple-400 py-2 rounded-full ring-2 ring-white hover:scale-110 transition-all duration-200 ease-in'>Upgrade</button>
        <button className='w-[100px] bg-transparent text-white py-2 rounded-full ring-2 ring-white hover:bg-white hover:text-purple-300  hover:scale-110 transition-all duration-200 ease-in'>Learn More</button>
        </div>
    </div>
  )
}

export default UpgradeToPremium