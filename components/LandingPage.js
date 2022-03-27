
import { useRouter } from 'next/router'
import React from 'react'

function LandingPage() {
  const router = useRouter()
  return (
    <div className='min-h-screen min-w-screen bg-blue'>
      {/* section 1 */}
      <section className='flex space-x-10 items-center justify-center h-[90vh] w-[100vw] bg-gradient-to-r from-purple-400 to-purple-500'>
        <div className='flex flex-col space-y-8 items-start'>
          <div className='text-white'>
            <h1 className='text-6xl font-extrabold'>Build In React Websites</h1>
          </div>
          {/* buttons */}
          <button type="submit" 
          onClick={() => router.push('/auth/SignIn')}
          className='w-[250px]  bg-blue-400 h-[60px] text-2xl text-white hover:bg-blue-400 hover:text-white rounded-full transsition-all duration-150'>
            Get Started</button>
        </div>
        <div className='bg-white w-[300px] h-[350px] rounded-3xl'>
          <div className=''>

          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className='flex items-center justify-between px-5 h-[60vh] w-[100vw] bg-gray-900'>
        <div className='w-[500px]'>
          <p className='text-md text-white leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eaque, magnam quasi nesciunt non inventore? Totam assumenda quo nulla molestias aperiam veritatis consequuntur ab incidunt placeat natus magni maxime eius suscipit odit cum minima, mollitia et impedit. Nulla, est molestiae?</p>
        </div>
        <div>
          <h1 className='text-white text-5xl font-bold'>Making Your Own Website</h1>
        </div>

      </section>

      {/* section 3 */}
      {/* <section className='h-[100vh] w-[100vw] bg-gray-300'> */}
        {/* header */}

        {/* images & svg */}
      {/* </section> */}

      {/* section 4 */}
      {/* <section className='flex h-[80vh] w-[100vw]'>
        <div className='flex-[0.5] bg-green-700'>

        </div>
        <div className='flex-[0.5] flex flex-wrap items-center justify-center'>
          <div className='w-[150px] h-[150px] bg-white m-3 rounded-lg'></div>
          <div className='w-[150px] h-[150px] bg-white m-3 rounded-lg'></div>
          <div className='w-[150px] h-[150px] bg-white m-3 rounded-lg'></div>
          <div className='w-[150px] h-[150px] bg-white m-3 rounded-lg'></div>
          <div className='w-[150px] h-[150px] bg-white m-3 rounded-lg'></div>
          <div className='w-[150px] h-[150px] bg-white m-3 rounded-lg'></div>
        </div>

      </section> */}
      
      {/* section 5 */}
      {/* <section className='h-[60vh] '>

      </section> */}
    </div>
  )
}

export default LandingPage