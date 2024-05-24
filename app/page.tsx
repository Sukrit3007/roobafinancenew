import React from 'react';
import EventCarousal from "@/components/ui/EventCarousal";

export default function Home() {
	return (
		<div className="sticky top-0 h-full">
			<div className="absolute top-0 flex flex-col justify-center gap-12 text-[#141517]">
				<h1 className='font-bold leading-none text-7xl md:text-[7vw] opacity-25'>
					ASTR<br />IX
				</h1>
				<h1 className='font-bold leading-none text-7xl md:text-[7vw] opacity-25'>
					EVE<br />NTS <br />
				</h1>
			</div>
			<div className="sticky bottom-0 left-0 z-10 h-full w-full lg:w-[75%]">
				<EventCarousal/>
			</div>
		</div>
	);
}

