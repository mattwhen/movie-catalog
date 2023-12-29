'use client';

import { useState } from 'react';
import Links from './Links/Links';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { searchMovie } from '../../services/Api';

const Heading = () => {
	const router = useRouter();

	const [searchField, setSearchField] = useState('');
	const [searchResult, setSearchResult] = useState([]);

		const submitQuery = (e) => {
			e.preventDefault();
			searchField ? router.push(`/movies/search?query=${searchField}`) : null;
		}

	return (
		<nav className='h-14 flex'>
			<div className='flex items-center w-full lg:justify-center '>
				<div className='mr-5'>
					<Link href='/'>
						<h2 className='hvr-fade text-lg ml-4 font-bold lg:text-2xl mr-5 hover:text-yellow'>
							MOVIE CATALOG
						</h2>
					</Link>
				</div>
				<form onSubmit={submitQuery}>
					<div className='lg:flex lg:justify-between lg:items-center hidden'>
						<input
							className='text-black rounded-l-md w-72 h-8 p-4 lg:w-[500px]'
							type='text'
							placeholder='Search movies...'
							value={searchField}
							onChange={(event) => setSearchField(event.target.value)}
						/>
						<button
							className='bg-gray-400 text-black rounded-r-md'
							type='submit'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className='w-8 h-8 bg-yellow rounded-r-md text-dark-blue'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
								/>
							</svg>
						</button>
					</div>
				</form>
				<Links />
			</div>
		</nav>
	);
};

export default Heading;
