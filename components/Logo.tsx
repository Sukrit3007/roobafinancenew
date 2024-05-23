'use client'

import Image from 'next/image'
import React from 'react'

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Button } from '@nextui-org/button';
import { title } from './primitives';
import { usePathname } from 'next/navigation';
import EventName from './EventName';
import Metalives from './MetaLives';
import {  MenuIcon } from 'lucide-react';

const Logo = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const pathname = usePathname()

    return (
        <div className='flex flex-row items-center justify-between'>
            <div className=' flex flex-row items-center justify-start'>
                <Image src="/Branding.svg" alt='logo' width={80} height={80} className='object-contain' />
                <Image src="/Logo.svg" alt='logo' width={180} height={180} className='object-contain' />
            </div>

            <div>
                <div className='p-4'>
                    <Button isIconOnly size='sm' radius='full' onPress={onOpen} variant='flat' className='bg-[#FF4F18]'>
                        <MenuIcon className='size-4'/>
                    </Button>
                </div>
                <Modal size='sm' scrollBehavior={'inside'} isOpen={isOpen} placement={'bottom-center'} onOpenChange={onOpenChange} className='bg-[#F2F4F7]'>
                    <ModalContent>
                        {(onClose) => (
                            <div>
                                <ModalHeader className='text-black'>Explore Your First Event</ModalHeader>
                                <ModalBody>
                                        {pathname === '/' && <EventName />}
                                        {pathname === '/collections' && <Metalives />}
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="flat" size='sm' onPress={onClose}>
                                        Close
                                    </Button>
                                </ModalFooter>
                            </div>
                        )}
                    </ModalContent>
                </Modal>
            </div>

        </div>
    )
}

export default Logo
