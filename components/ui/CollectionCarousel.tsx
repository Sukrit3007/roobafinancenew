'use client'

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { Card, CardHeader } from '@nextui-org/card';

import { motion } from "framer-motion";

const CollectionCarousal = () => {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };

  const images = [
    { src: "https://utfs.io/f/f6cdd11d-7367-42a6-acd4-e442ea3eab09-1ejmqb.png", width: 563, height: 797 },
    { src: "https://utfs.io/f/b02da483-9fa1-494f-a7da-d05655ce3ec0-ulnr8x.png", width: 564, height: 705 },
    { src: "https://utfs.io/f/d852e9c3-fa31-410b-ad5d-52079e8b64cb-1ejl8x.png", width: 588, height: 882 },
    { src: "https://utfs.io/f/65f2b79e-3969-444f-96f9-81e2f830a010-p8zqyk.png", width: 564, height: 846 },
  ];
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={FADE_UP_ANIMATION_VARIANTS}
      className='h-full relative '
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper "
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className=''>
            <Event image={image} />
          </SwiperSlide>
        ))}s
      </Swiper>
    </motion.div>
  )
}

export default CollectionCarousal

function Event({ image }: any) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      shadow='none'
      className="border-none h-full shadow-none  bg-white/20 backdrop-blur-sm transition-transform duration-300 ease-in-out hover:scale-95"
    >
      <CardHeader>
        <OtherInfo />
      </CardHeader>
      <Image
        alt="image"
        className="object-cover h-full w-full"
        height={1400}
        src={image}
        width={600}
      />
    </Card>

  )
}

export const OtherInfo = () => (
  <div className='flex flex-col gap-2 flex-nowrap text-black'>
    <h1 className='font-bold text-4xl'>Lunar Palace:</h1>
    <div className='w-fit flex items-center justify-center font-semibold text-xl '>
      <p>{"(ft. Kanye west)"}</p>
    </div>
  </div>
)