import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

function ProductOverview({image, caption}) {
  return (
    <>
          <img src={image} alt="" className='object-cover h-full w-full' />
    </>
  )
}

export default ProductOverview