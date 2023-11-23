import React from 'react';
import Link from 'next/link';

const Heading = () => {
	return (
		<nav className='p-5 h-14 flex justify-between items-center bg-gray-800'>
			<div>
				<h2 className='hvr-fade text-3xl'>Movie Catalog</h2>
			</div>
      <div className='flex'>
				<input type='text' placeholder='Search movies...'>
          
        </input>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke-width='1.5'
					stroke='currentColor'
					class='w-6 h-6'
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
					/>
				</svg>
      </div>
      <div>
			<ul className=''>
				<Link className='mx-4 hvr-fade' href='/catalog'>
					Catalog
				</Link>
				<Link className='mx-4 hvr-fade' href='/watchlist'>
					Watchlist
				</Link>
				<Link className='mx-4 hvr-fade' href='/login'>
					Login
				</Link>
			</ul>
      </div>
		</nav>
	);
};

export default Heading;
