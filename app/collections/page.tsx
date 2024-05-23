import React from 'react'
import CollectionCarousal from '@/components/ui/CollectionCarousel'

const page = () => {
	return (
		<div className="relative h-full">
			<div className="absolute top-0 flex flex-col justify-center gap-12 text-[#141517]">
				<h1 className='font-bold leading-none text-7xl md:text-[7vw] opacity-25'>
					ASTR<br />IX
				</h1>
				<h1 className='font-bold leading-none text-7xl md:text-[7vw] opacity-25'>
					COLL<br />ECTI<br />BLE
				</h1>
			</div>
			<div className="absolute bottom-0 left-0 z-10  h-[70vh] w-full lg:w-[65%]">
				<CollectionCarousal/>
			</div>
		</div>
	)
}

export default page
