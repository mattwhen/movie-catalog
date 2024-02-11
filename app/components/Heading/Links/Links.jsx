import React from 'react';
import Link from 'next/link';
import './Links.css';

const Links = () => {
	return (
		<div className='hidden md:block'>
			<ul className='ml-5'>
				<div class='dropdown mx-5'>
					<div className='flex cursor-pointer hover:text-yellow'>
						<span className=''>Movies</span>
					</div>

					<div class='dropdown-content'>
						<Link className='hover:bg-silver' href='/movies/trending'>
							Trending
						</Link>
						<Link className='hover:bg-silver' href='/movies/genres'>
							Genres
						</Link>
						<Link className='hover:bg-silver' href='/movies/toprated'>
							Top Rated
						</Link>
					</div>
				</div>
				<Link className='mx-5 hvr-fade hover:text-yellow' href={'/movies/watchlist'}>
					Watchlist
				</Link>
				<Link className='mx-5 hvr-fade hover:text-yellow' href='/movies/login'>
					Login
				</Link>
				<Link className=' hvr-fade hover:text-yellow' href='/movies/signup'>
					<button className='bg-yellow text-black py-1 px-5 border border-yellow rounded-sm hover:bg-yellow-hover hover:text-silver hover:border-yellow-hover'>
						Sign up
					</button>
				</Link>
			</ul>
		</div>
	);
};

export default Links;
