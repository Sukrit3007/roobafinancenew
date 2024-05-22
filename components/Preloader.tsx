'use client';

import React from 'react';
import { motion } from "framer-motion";
import TextImage from '@/components/TextImage';
import Image from 'next/image';

const Preloader = () => {
  return (
    <div className="h-screen w-screen bg-transparent">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: -1000 }}
        transition={{ duration: 2, delay: 2, type: "spring" }}
        className="relative h-screen w-screen bg-[#FFF4DF] flex items-center justify-center"
      >
        <BrandLogo />
        <div className="z-20">
          <TextImage />
        </div>
      </motion.div>
    </div>
  );
};

export default Preloader;

const BrandLogo = () => (
  <div className="absolute top-0 left-0 px-8 py-16 hidden lg:flex flex-row gap-4 items-center justify-start">
    <Image src="/logo2.svg" alt="icon" width={40} height={40} />
    <Image src="/Branding2.svg" alt="icon" width={100} height={20} />
  </div>
);
