import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div className='w- flex flex-row items-center justify-start'>
            <Image src="/Branding.svg" alt='logo' width={80} height={80} className='object-contain' />
            <Image src="/Logo.svg" alt='logo' width={180} height={180} className='object-contain' />
        </div>
    )
}

export default Logo
