import React from 'react';
import Search from './Search/Search';
import Links from './Links/Links';
import Link from 'next/link';

const Heading = () => {

	return (
		<nav className='p-5 h-14 flex justify-between items-center bg-black'>
			<div>
				<Link 
				href='/'
				>
				<h2 className='hvr-fade text-3xl'>Movie Catalog</h2>
				</Link>
			</div>
			<Search />
			<Links />
		</nav>
	);
};

export default Heading;
