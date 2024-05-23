'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './card-styles.css';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import { Card, CardBody, CardHeader } from '@nextui-org/card'
import {Image} from '@nextui-org/image'
import {Chip} from "@nextui-org/chip";

const CollectiblesCarousal = () => {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <h1 className='text-semibold text-center'>
        Collectibles
      </h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Collectibles/>
        </SwiperSlide>
        <SwiperSlide>
          <Collectibles/>
        </SwiperSlide>
        <SwiperSlide>
          <Collectibles/>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default CollectiblesCarousal


function Collectibles (){
  return(
    <div className='w-full h-full'>
            <Card className="w-fit py-2 px-2 bg-[#FF4F18] cursor-pointer text-black transition-transform duration-300 ease-in-out hover:scale-95">
                <div className="overflow-visible py-0 flex flex-col gap-2">
                    <div className='flex flex-row items-center justify-between'>
                        <Chip className='bg-black text-[6px] max-h-[10px] max-w-fit'>2024</Chip>
                        <p className='text-[10px]'>By <span className='font-semibold'>Pablo</span></p>
                    </div>
                    <div className='flex flex-col gap-1 items-start justify-center'>
                        <div className='w-full text-center'>
                            <h4 className="font-normal text-xs">Collectible Name</h4>
                        </div>
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl w-full"
                            src="https://utfs.io/f/b4173413-75ef-44a2-bf47-3bf67c413707-3wirhx.png"
                            width={150}
                            height={170}
                        />
                    </div>
                </div>
            </Card>
        </div>
  )
}