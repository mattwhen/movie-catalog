import React from 'react';

const MovieWatchlist = ({title, watchList, onClick}) => {
	return (
		<div className='bg-black'>
			<div className='overlay-font-color px-4 py-2'>
				<a className='cursor-pointer hover:text-yellow' onClick={onClick}>
					Add to Watchlist
				</a>
			</div>
			<div className='px-4 py-2 max-h-10 text-ellipsis whitespace-nowrap overflow-hidden'>{title}</div>
		</div>
	);
};

export default MovieWatchlist;
