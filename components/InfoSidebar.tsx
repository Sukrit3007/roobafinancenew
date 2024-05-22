'use client'

import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { motion } from 'framer-motion';
import qrcode from '../public/qrcode.png';
import EventName from './EventName';
import MetaLives from './MetaLives';
import { usePathname } from 'next/navigation';
import ScrolllingText from './ScrolllingText';

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
};

const InfoSidebar = () => {
  const pathname = usePathname()

  return (
    <div className='flex flex-row max-h-screen overflow-hidden pr-2'>
        <ScrolllingText/>
        <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        className='relative bg-[#F2F4F7] text-black  min-h-screen w-full py-10 pr-4 pl-8 md:pl-12 lg:pl-16 xl:pl-20 flex flex-col items-start justify-start gap-16'
      >
        <SectionHeading />
        <ContentSection path={pathname} />
        <BottomSection path={pathname} />
      </motion.div>
    </div>
  );
};

export default InfoSidebar;

const SectionHeading = () => (
  <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className='basis-1/4 h-full w-full'>
    <div className='max-w-[70%]'>
      <h1 className='font-bold leading-tight text-2xl md:text-[2vw]'>Explore Your First Event</h1>
    </div>
  </motion.div>
);

const ContentSection = ({ path }:any) => (
  <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className='shrink h-full flex items-center' style={{ flex: '2 1 auto' }}>
    {path === '/' && <EventName />}
    {path === '/collections' && <MetaLives />}
  </motion.div>
);

const BottomSection = ({ path }:any) => (
  <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className='abs h-full w-full'>
    <ButtonAndQr path={path} />
  </motion.div>
);

const ButtonAndQr = ({ path }:any) => (
  <div className='h-full flex flex-row flex-wrap gap-4 items-end justify-between'>
    <div>
      {path === '/' && <QrCodeImage />}
    </div>
    <JoinWaitlistButton />
  </div>
);

const QrCodeImage = () => (
  <Image height={100} width={100} src={qrcode} alt='qr' />
);

const JoinWaitlistButton = () => (
  <div className='flex items-end justify-end pr-8'>
    <Button size='lg' radius='full' className='bg-[#141517] text-white font-bold font-lexend'>
      Join Waitlist
    </Button>
  </div>
);
