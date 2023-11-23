import React from 'react';
import Search from './Search/Search';
import Links from './Links/Links';

const Heading = () => {
	function doSomething() {
		console.log('Click');
	}

	return (
		<nav className='p-5 h-14 flex justify-between items-center bg-gray-800'>
			<div>
				<h2 className='hvr-fade text-3xl'>Movie Catalog</h2>
			</div>
			<Search onChange={doSomething} />
			<Links />
		</nav>
	);
};

export default Heading;
