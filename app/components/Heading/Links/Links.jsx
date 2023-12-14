import React from 'react';
import Link from 'next/link';


const Links = () => {
	return (
		<div>
			<ul className='hidden lg:block'>
				<Link className='mx-4 hvr-fade hover:text-yellow' href='/catalog' >
					Catalog
				</Link>
				<Link className='mx-4 hvr-fade hover:text-yellow' href={'/watchlist'}>
					Watchlist
				</Link>
				<Link className='mx-4 hvr-fade hover:text-yellow' href='/login'>
					Login
				</Link>
			</ul>
		</div>
	);
};

export default Links;
