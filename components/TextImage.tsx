'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";

const images = [
  "https://utfs.io/f/7263814f-e025-48cd-9047-d104a311a8c1-uj769h.png",
  "https://utfs.io/f/0fcfd95d-b19c-4f28-b0cf-e5009083953b-q9hzdy.png",
  "https://utfs.io/f/376ecb01-a02e-4fc4-8848-05a23fd862e6-uj769j.png",
  "https://utfs.io/f/8234a4b0-d475-43e5-ac63-d64afcc392f5-uj769k.png",
  "https://utfs.io/f/e61ecd9d-0faf-48fc-9854-1f3f760c67c8-uj769l.png",
  "https://utfs.io/f/b3d11c81-0046-4c3f-85a7-fc8005727ae8-uj769m.png",
  "https://utfs.io/f/45c3d4b6-519c-46c5-8bdc-bcee41e78959-uj769n.png",
  "https://utfs.io/f/ea9ba1f9-830f-48ba-ade5-fd1279f1fb2f-uj769o.png",
];

const Line1 = () => (
  <div className='flex flex-row gap-2 text-black overflow-y-hidden'>
    <div className='flex-shrink-0'>
      <h1>WE </h1>
    </div>
    <div className='flex-shrink-0'>
      <Image src={images[0]} alt='image' width={500} height={1000} className='h-[40px] md:h-[64px] w-full object-none' />
    </div>
    <motion.div
      animate={{ x: [-100, 0, -100] }}
      transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
      className='bg-[#FFF4DF] flex-shrink-0'
    >
      <h1> ORGANIZE THE </h1>
    </motion.div>
  </div>
);

const Line2 = () => (
  <div className='flex flex-row gap-2 text-black overflow-y-hidden'>
    <div className='flex-shrink-0'>
      <h1> CONNECTION </h1>
    </div>
    <div className='flex-shrink-0'>
      <Image src={images[1]} alt='image' width={500} height={500} className='h-[40px] md:h-[64px] w-full object-none object-bottom' />
    </div>
    <motion.div
      animate={{ x: [-100, 10, -100] }}
      transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, delay: 0.5 }}
      className='bg-[#FFF4DF] grow'
    />
  </div>
);

const Line3 = () => (
  <div className='flex flex-row gap-2 text-black overflow-y-hidden'>
    <div className='flex-shrink-0'>
      <Image src={images[2]} alt='image' width={500} height={500} className='h-[40px] md:h-[64px] w-full object-none' />
    </div>
    <motion.div
      animate={{ x: [0, -100, 0] }}
      transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
      className='bg-[#FFF4DF] flex flex-row'
    >
      <div>
        <h1> BETWEEN </h1>
      </div>
      <div className='flex-shrink-0'>
        <Image src={images[3]} alt='image' width={500} height={500} className='h-[40px] md:h-[64px] w-full object-none' />
      </div>
      <div>
        <h1> MUSIC </h1>
      </div>
    </motion.div>
  </div>
);

const Line4 = () => (
  <div className='flex flex-row gap-2 text-black overflow-y-hidden'>
    <div>
      <h1> ARTIST </h1>
    </div>
    <div className='flex-shrink-0'>
      <Image src={images[4]} alt='image' width={500} height={500} className='h-[40px] md:h-[64px] w-full object-none' />
    </div>
    <motion.div
      animate={{ x: [-100, 50, -100] }}
      transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
      className='bg-[#FFF4DF] flex flex-row'
    >
      <div>
        <h1> CULTURE </h1>
      </div>
      <div className='flex-shrink-0'>
        <Image src={images[5]} alt='image' width={500} height={500} className='h-[40px] md:h-[64px] w-full object-none' />
      </div>
    </motion.div>
  </div>
);

const Line5 = () => (
  <div className='flex flex-row gap-2 text-black overflow-y-hidden'>
    <div className='h-[24px] md:h-[30px] lg:h-[60px]'>
      <div className='flex-shrink-0'>
        <Image src={images[6]} alt='image' width={500} height={500} className='h-[40px] md:h-[64px] w-full object-none object-center' />
      </div>
    </div>
    <motion.div
      animate={{ x: [-100, 0, -100] }}
      transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
      className='bg-[#FFF4DF] flex flex-row'
    >
      <h1> ART </h1>
      <div className='flex-shrink-0'>
        <Image src={images[7]} alt='image' width={500} height={500} className='h-[40px] md:h-[64px] w-full object-none object-center-bottom' />
      </div>
      <h1> &amp;COLLECTIONS </h1>
    </motion.div>
  </div>
);

const TextImage = () => (
  <div className='bg-[#FFF4DF] w-full h-full m-auto max-w-5xl md:py-10 py-4 md:px-6 px-4 flex flex-col gap-6 text-3xl md:text-6xl font-normal tracking-tight'>
    <Line1 />
    <Line2 />
    <Line3 />
    <Line4 />
    <Line5 />
  </div>
);

export default TextImage;
