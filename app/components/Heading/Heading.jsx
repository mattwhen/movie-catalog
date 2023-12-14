import React from 'react';
import Search from './Search/Search';
import Links from './Links/Links';
import Link from 'next/link';

const Heading = () => {
	return (
		<nav className='h-14 flex bg-'>
			<div className='flex items-center w-full lg:mx-32 lg:justify-around '>
				<div>
					<Link href='/'>
						<h2 className='hvr-fade text-lg ml-4 font-bold lg:text-2xl mr-5 hover:text-yellow'>
							MOVIE CATALOG
						</h2>
					</Link>
				</div>
				<Search />
				<Links />
			</div>
		</nav>
	);
};

export default Heading;
