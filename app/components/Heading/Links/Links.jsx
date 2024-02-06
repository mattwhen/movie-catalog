import React from 'react';
import Link from 'next/link';
import './Links.css';

const Links = () => {
	return (
		<div className='hidden md:block'>
			<ul className='ml-5'>
				<div class='dropdown mx-5'>
					<span className='cursor-pointer hover:text-yellow'>Movies</span>
					<div class='dropdown-content'>
						<Link className='hover:bg-yellow' href='/trending'>
							Trending
						</Link>
						<Link className='hover:bg-yellow' href='/genres'>
							Genres
						</Link>
						<Link className='hover:bg-yellow' href='/toprated'>
							Top Rated
						</Link>
					</div>
				</div>
				<Link className='mx-5 hvr-fade hover:text-yellow' href={'/watchlist'}>
					Watchlist
				</Link>
				<Link className='mx-5 hvr-fade hover:text-yellow' href='/login'>
					Login
				</Link>
			</ul>
		</div>
	);
};

export default Links;
