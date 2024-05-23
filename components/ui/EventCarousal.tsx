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
import { MapPin } from 'lucide-react';
import { Card, CardFooter } from '@nextui-org/card';

const EventCarousal = () => {
  const images = [
    { src: "https://utfs.io/f/a49d8d74-be41-4755-8997-da3c4551bf7f-ulnr8y.png", width: 563, height: 797 },
    { src: "https://utfs.io/f/b02da483-9fa1-494f-a7da-d05655ce3ec0-ulnr8x.png", width: 564, height: 705 },
    { src: "https://utfs.io/f/40865ab1-b7d3-41f0-aa05-52ad5eb15915-ulnr8w.png", width: 588, height: 882 },
    { src: "https://utfs.io/f/65f2b79e-3969-444f-96f9-81e2f830a010-p8zqyk.png", width: 564, height: 846 },
  ];
  return (
    <div className='h-full relative '>
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
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className=''>
            <Event image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default EventCarousal

function Event({ image }: any) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none h-full bg-transparent"
    >
      <Image
        alt="image"
        className="object-cover h-full"
        height={1400}
        src={image}
        width={600}
      />
      <CardFooter className="justify-start before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <EventNameInfo/>
      </CardFooter>
    </Card>

  )
}

const EventNameInfo = () => (
  <div className="flex flex-col gap-4 ">
    <h1 className="scroll-m-20 text-3xl font-bold tracking-tight first:mt-0">Event Name</h1>
    <div className="w-fit flex flex-row gap-2 items-center justify-center">
      <MapPin />
      <p className="scroll-m-20 text-xl font-normal tracking-tight">
        Location
      </p>
    </div>
  </div>
);