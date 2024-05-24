'use client'

import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation';
import EventName from './EventName';
import Metalives from './MetaLives';
import { MenuIcon } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ButtonAndQr, SectionHeading } from './InfoSidebar';



const Logo = () => {
    const pathname = usePathname()

    return (
        <div className='flex flex-row items-center justify-between'>
            <div className=' flex flex-row items-center justify-start'>
                <Image src="/Branding.svg" alt='logo' width={80} height={80} className='object-contain' />
                <Image src="/Logo.svg" alt='logo' width={180} height={180} className='object-contain' />
            </div>

            <Sheet  >
                <SheetTrigger>
                    <MenuIcon className='w-8 h-8 text-black m-6' />
                </SheetTrigger>
                <SheetContent className='overflow-y-auto bg-black/30 backdrop-blur-md border-2 border-black'>
                    <SheetHeader>
                        <SheetTitle>
                            <SectionHeading/>
                        </SheetTitle>
                    </SheetHeader>
                        <div className='py-12 flex items-center justify-center'>
                        {pathname === '/' && <EventName />}
                        {pathname === '/collections' && <Metalives />}
                        </div>
                    <SheetFooter>
                        <div className='w-full'>
                            <ButtonAndQr path={pathname}/>
                        </div>
                    </SheetFooter>
                </SheetContent>
            </Sheet>


        </div>
    )
}

export default Logo
