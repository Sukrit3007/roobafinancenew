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
import { title } from './primitives';

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
};

const InfoSidebar = () => {
  const pathname = usePathname()

  return (
    <div className='flex flex-row max-h-screen overflow-hidden '>
      <ScrolllingText />
      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        className='relative bg-[#F2F4F7] overflow-y-auto text-black  min-h-screen w-full py-4 px-4  flex flex-col items-start justify-between gap-16'
      >
        <div className='h-[10vh]'>
          <SectionHeading />
        </div>
        <div className='h-[70vh]'>
          <ContentSection path={pathname} />
        </div>
        <div className='h-[20vh] w-full' >
          <BottomSection path={pathname} />
        </div>
      </motion.div>
    </div>
  );
};

export default InfoSidebar;

export const SectionHeading = () => (
  <motion.div variants={FADE_UP_ANIMATION_VARIANTS}
  className='max-w-96'
  >
    <div>
      <h1 className={title({ size: 'sm' })}>Explore Your First Event</h1>
    </div>
  </motion.div>
);

export const ContentSection = ({ path }: any) => (
  <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className='flex items-center' style={{ flex: '2 1 auto' }}>
    {path === '/' && <EventName />}
    {path === '/collections' && <MetaLives />}
  </motion.div>
);

const BottomSection = ({ path }: any) => (
  <motion.div variants={FADE_UP_ANIMATION_VARIANTS} >
    <ButtonAndQr path={path} />
  </motion.div>
);

export const ButtonAndQr = ({ path }: any) => (
  <div className='flex flex-row flex-wrap gap-4 items-end justify-between m-4'>
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
    <Button size='md' radius='full' className='bg-[#141517] text-white font-bold font-lexend'>
      Join Waitlist
    </Button>
  </div>
);
