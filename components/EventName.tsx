'use client'

import { AlarmClock, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

import { Card, CardBody, } from "@nextui-org/card";
import { subtitle, title } from './primitives'

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
}

const EventName = () => (
  <motion.div
    initial="hidden"
    animate="show"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.15 } },
    }}
    className='h-full w-full flex flex-col gap-6'
  >
    <Card className='max-w-96'>
      <CardBody className='flex flex-col gap-4'>
        <motion.h1
          variants={FADE_UP_ANIMATION_VARIANTS}
          className={title({ size: 'md', color: 'foreground' })}
        >
          Event Name
        </motion.h1>
        <EventDetails />
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className=''
        >
          Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla.
        </motion.p>
      </CardBody>
    </Card>

    <ArtistLineup />
  </motion.div>
)

export default EventName

const Heading = ({ children }: any) => (
  <motion.h1
    variants={FADE_UP_ANIMATION_VARIANTS}
    className='font-extrabold text-2xl md:text-[4vw]'
  >
    {children}
  </motion.h1>
)

const EventDetails = () => (
  <motion.div
    variants={FADE_UP_ANIMATION_VARIANTS}
    className='flex flex-row flex-wrap gap-4 font-semibold text-base md:text-[1vw]'
  >
    <DetailItem icon={<MapPin />} text="Venue" />
    <DetailItem icon={<AlarmClock />} text="04/3/2024 @19:00" />
  </motion.div>
)

const DetailItem = ({ icon, text }: any) => (
  <div className='w-fit flex flex-row gap-2 items-center justify-center'>
    {icon}
    <p className={subtitle()}>{text}</p>
  </div>
)


const ArtistLineup = () => {
  const artists = [
    { src: 'https://utfs.io/f/394e0e8f-f474-4268-bc93-5171b153336a-ehi7y0.png', size: 150, zIndex: 1, marginClass: '-mr-2' },
    { src: 'https://utfs.io/f/52bd3601-1e3a-4197-951e-1a6be60044e6-vblxq6.png', size: 200, zIndex: 10, marginClass: '' },
    { src: 'https://utfs.io/f/99622a5f-c99b-43a1-bc3b-4fbf95a9fd41-wzr09f.png', size: 150, zIndex: 1, marginClass: '-ml-2' }
  ]

  return (
    <motion.div
      variants={FADE_UP_ANIMATION_VARIANTS}
      className='max-w-96 pr-6 border border-red-600'
    >
      <div className='flex flex-col gap-6'>
        <h1 className='font-bold text-2xl'>Artist Lineup</h1>
        <div className='relative flex items-center justify-center'>
          {artists.map((artist, index) => (
            <div key={index} className={`w-fit flex items-center justify-center ${artist.marginClass}`} style={{ zIndex: artist.zIndex }}>
              <Image
                src={artist.src}
                alt='artist'
                width={artist.size}
                height={artist.size}
                className='object-cover aspect-square rounded-xl transition-transform duration-300 ease-in-out hover:scale-105'
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
