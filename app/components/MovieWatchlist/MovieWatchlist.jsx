import React from 'react';

const MovieWatchlist = ({title, watchList, onClick}) => {
	return (
		<div>
			<div className='overlay-font-color bg-gray-800 px-4 py-2'>
				<a className='cursor-pointer' onClick={onClick}>
					Add to Watchlist
				</a>
			</div>
			<div className=' bg-gray-800 px-4 py-2 max-h-10 text-ellipsis whitespace-nowrap overflow-hidden'>{title}</div>
		</div>
	);
};

export default MovieWatchlist;
