'use client'

import { Button } from '@nextui-org/button'
import Link from 'next/link';
import React from 'react'

import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()
    return (
        <div className='w-full z-50'>
            <div className="w-fit flex space-x-3 bg-[#F2F47]  border border-[#FF4F18] backdrop-blur-md rounded-full">
                <Button
                    href="/"
                    as={Link}
                    className={`px-4 py-2 rounded-full ${pathname === '/' ? 'bg-[#FF4F18] text-white' : 'bg-[#F2F47] text-gray-600'}`}
                >
                    Event
                </Button>
                <Button
                    href="/collections"
                    as={Link}
                    className={`px-4 py-2 rounded-full ${pathname === '/collections' ? 'bg-[#FF4F18] text-white' : 'bg-[#F2F47] text-gray-600'}`}
                >
                    Collections
                </Button>
            </div>
        </div>
    )
}

export default Navbar
