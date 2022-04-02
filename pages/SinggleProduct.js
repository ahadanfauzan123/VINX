import React, { useEffect } from 'react'

import Header from '../components/layout/Header'
import { ShoppingCartIcon, CheckIcon, XIcon } from '@heroicons/react/outline'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar,Thumbs, FreeMode, A11y, EffectCards, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import { useRecoilState } from 'recoil';
import { buyState } from '../atom/buyAtom';
import BuyModal from '../components/modals/BuyModal';
import { productState } from '../atom/productAtom';
import { useRouter } from 'next/router';
import { useState } from 'react/cjs/react.development';


function SinggleProduct({}) {
  const [product, setProduct] = useRecoilState(productState)
  const [showBuy, setShowBuy] = useRecoilState(buyState)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  
  const router = useRouter()
  

  const DUMMY_DATA = [
    {
        id: '1',
        title: 'page 1',
        img: 'https://midias.correiobraziliense.com.br/_midias/png/2022/02/04/675x450/1_7871566-7410716.png?20220204133402?20220204133402',
        
    },
    {
        id: '2',
        title: 'page 2',
        img: 'https://watcher.guru/news/wp-content/uploads/2021/08/unnamed-3.png',
        
    },
    {
        id: '3',
        title: 'page 3',
        img: 'https://brasilnft.art.br/pytsycky/2021/10/Bored-Ape-8817-PNG.png',
        
    },
    {
        id: '4',
        title: 'page 4',
        img: 'https://blocktrends.com.br/wp-content/uploads/2021/12/bored-ape-8585.jpg',
        
    },
]


  return (
    <div className='bg-theme overflow-x-hidden'>
      <Header/>
      <BuyModal/>
      <div className='flex flex-col space-y-6 items-center justify-center w-full max-w-7xl pb-3 pt-3 mt-1 mx-auto'>
        
        {/* title */}
        <div className='bg-cardTheme w-full max-w-2xl rounded-[20px] p-5 flex justify-center items-center'>
          <h1 className='text-4xl font-extrabold text-colorProduct'>Product Name  </h1>
        </div>


        {/* product images */}
        {/* <div className='p-3 w-full max-w-5xl'>
          <Swiper
            // install Swiper modules
            effect={"cards"}
            slidesPerView={1}
            modules={[ EffectCards,Pagination, A11y, Autoplay ]}
            grabCursor={true}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='mySwiper h-full w-full'
          >
            {DUMMY_DATA.map((image) => (
              <SwiperSlide key={image.id}>
                <img src={image.img} alt="" 
                className='object-cover h-full w-full rounded-[20px]' />
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}

        <div className='p-3 w-full h-[450px] max-w-5xl flex'>
              <Swiper 
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                grabCursor={true}
                loop={true}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2">
                  {DUMMY_DATA.map((image) => (
                    <SwiperSlide key={image.id}>
                      <img src={image.img} alt="" className='object-cover h-full w-full rounded-[20px]' />
                    </SwiperSlide>
                  ))}
              </Swiper>
              <Swiper
                direction={'vertical'}
                onSwiper={setThumbsSwiper}
                spaceBetween={18}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper">
                  {DUMMY_DATA.map((image) => (
                    <SwiperSlide key={image.id}>
                      <img src={image.img} alt="" className='object-cover rounded-xl h-full w-full' />
                      <p className='text-sm font-light text-color'>{image.title}</p>
                      <div></div>
                    </SwiperSlide>
                  ))}
              </Swiper>
        </div>


        {/* payment and buttons */}
        <div className='bg-cardTheme flex justify-between items-center max-w-5xl w-full py-6 px-7 rounded-[20px]'>
          {/* price */}
          <div>
              <h1 className='text-3xl font-extrabold text-colorProduct ml-3'>$30.00</h1>
          </div>
          <div className='flex space-x-3 items-center justify-center '>
            <button className='py-2 flex items-center justify-center space-x-3 w-[150px] bg-green-400 text-gray-300 font-bold rounded-xl focus:ring-2 focus:ring-white'><span className='text-lg -mt-1'>store</span><ShoppingCartIcon className='headerIcon text-gray-300'/></button>
              <button onClick={() => setShowBuy(!showBuy)} className='py-2 w-[100px] bg-transparent border-2 border-green-500 font-bold rounded-xl text-green-500 hover:scale-110 transition-all duration-150 ease-in'>buy now</button>
          </div>
        </div>



        {/* product features */}
        <div className='flex flex-col space-y-4 bg-cardTheme w-full max-w-5xl px-5 py-6 rounded-[20px]'>
            <div className='header'>
              <h1 className='text-2xl font-extrabold text-color'>Features</h1>
            </div>
            {/* table */}
            <div className='flex-1 w-full bg-theme text-color p-2 rounded-[15px]'>
              <table className='mx-3 mt-1 w-full text-left h-[250px]'>
                <thead>
                  <th>depedencies</th>
                  <th>Y/N</th>
                </thead>
                <tbody className='space-y-4'>
                  <tr>
                    <td>Next.js</td>
                    <td><CheckIcon className='w-6 h-6 text-green-300'/></td>
                  </tr>
                  <tr>
                    <td>Tailwindcss</td>
                    <td><CheckIcon className='w-6 h-6 text-green-300'/></td>
                  </tr>
                  <tr>
                    <td>Midlleware</td>
                    <td><XIcon className='w-6 h-6 text-red-300'/></td>
                  </tr>
                  <tr>
                    <td>Heroicons</td>
                    <td><CheckIcon className='w-6 h-6 text-green-300'/></td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>

      </div>
    </div>
  )
}

// SinggleProduct.getInitialProps = ({query: { title }}) => {
//   return { props: {
//     title
//   }}
// }

export default SinggleProduct
