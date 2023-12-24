'use client';

import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { searchMovie } from '../../../services/Api';

const Search = () => {
	
	const [searchField, setSearchField] = useState('');

	async function submitQuery() {
		try {
			const results = await searchMovie(searchField);
		} catch (error) {
			console.error('Error searching for Movies:', error);
		}
	}

	return (
		<div>
			<div className='lg:flex lg:justify-between lg:items-center hidden'>
				<input
					className='text-black rounded-l-md w-72 h-8 p-4'
					type='text'
					placeholder='Search movies...'
					onChange={element => setSearchField(element.target.value)}
				/>
				<button className='bg-gray-400 text-black rounded-r-md' onClick={submitQuery}>
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
		</div>
	);
};

export default Search;
