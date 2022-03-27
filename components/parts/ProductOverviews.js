import React, { useState } from 'react'
import ProductOverview from './ProductOverview'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectCards, Autoplay, EffectCreative } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';

function ProductOverviews() {
  const [productOverview, setProductOverview] = useState([])

   const DUMMY_DATA = [
        {
            id: '1',
            img: 'https://midias.correiobraziliense.com.br/_midias/png/2022/02/04/675x450/1_7871566-7410716.png?20220204133402?20220204133402',
            caption: 'first post, support me guys',
        },
        {
            id: '2',
            img: 'https://watcher.guru/news/wp-content/uploads/2021/08/unnamed-3.png',
            caption: 'second post, support me guys',
        },
        {
            id: '3',
            img: 'https://brasilnft.art.br/pytsycky/2021/10/Bored-Ape-8817-PNG.png',
            caption: 'third post, support me guys',
        },
        {
            id: '4',
            img: 'https://blocktrends.com.br/wp-content/uploads/2021/12/bored-ape-8585.jpg',
            caption: 'fourth post, support me guys',
        },
    ]
  return (
    // <div className='flex items-center justify-center scrollbar scrollbar-none rounded-[20px] space-x-2 tablet:space-x-3 h-[300px] min-w-[600px] bg-white' >
    <div className='w-full transparent rounded-[20px] flex p-0'>
      {/* <h1 className='text-2xl text-color ml-4 font-bold'>News</h1> */}
    <div className='flex h-[300px] mobile:w-[370px] tablet:w-[720px] laptop:w-[720px] items-start justify-start mx-auto'>
    
      <Swiper
      // install Swiper modules
      effect={"creative"}
      slidesPerView={1}
      modules={[ EffectCreative,Pagination, A11y, Autoplay ]}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      grabCursor={true}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='mySwiper h-full w-full'
    >
        {DUMMY_DATA.map((overview) => (
          <>
      <SwiperSlide key={overview.id} className='swiperSlide'>
           <ProductOverview key={overview.id} image={overview.img} caption={overview.caption} />  
        </SwiperSlide>
          </>
        ))}
    </Swiper>
    </div>
    </div>
  )
}

export default ProductOverviews