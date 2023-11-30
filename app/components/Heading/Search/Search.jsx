import React from 'react';

const Search = () => {
	return (
		<div>
			<div className='flex justify-between items-center'>
				<input
					className='text-black rounded-l-md w-72 h-8 p-4'
					type='text'
					placeholder='Search movies...'
				/>


				<button className=' bg-gray-400 text-black rounded-r-md'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						class='w-8 h-8'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Search;