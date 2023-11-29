import React from 'react';
import Link from 'next/link';


const Links = () => {
	return (
		<div>
			<ul className=''>
				<Link className='mx-4 hvr-fade' href='/catalog' >
					Catalog
				</Link>
				<Link className='mx-4 hvr-fade' href={'/watchlist'}>
					Watchlist
				</Link>
				<Link className='mx-4 hvr-fade' href='/login'>
					Login
				</Link>
			</ul>
		</div>
	);
};

export default Links;
