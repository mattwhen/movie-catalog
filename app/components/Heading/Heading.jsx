import React from 'react';
import Search from './Search/Search';
import Links from './Links/Links';
import Link from 'next/link';

const Heading = () => {

	return (
		<nav className='p-8 h-14 flex bg-black'>
			<div className='flex justify-around items-center w-full mx-96'>
			<div>
				<Link 
				href='/'
				>
				<h2 className='hvr-fade text-3xl hover:text-yellow'>Movie Catalog</h2>
				</Link>
			</div>
			<Search />
			<Links />

			</div>
		</nav>
	);
};

export default Heading;
