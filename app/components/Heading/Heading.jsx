'use client';

import React, {useState} from 'react';
import { useRouter } from 'next/navigation';
import Search from './Search/Search';
import Links from './Links/Links';
import Link from 'next/link';
import { searchMovie } from '../../services/Api';

const Heading = () => {
	const [searchField, setSearchField] = useState('');
	const [searchResult, setSearchResult] = useState([]);

	const router = useRouter();

	async function submitQuery() {
	
		try {
			const results = await searchMovie(searchField);
			console.log(results);
			console.log('My search results:', searchField);

			await setSearchResult(results);
			await console.log('setSearchResults', searchResult);
			
			// Navigate user to the search results page along with all the results that were fetched.
			// router.push(`/search?query=${searchField}`);
		} catch (error) {
			console.error('Error searching for Movies:', error);
		}
	};

	const handleChange = async (event) => {
		console.log(searchField);
		setSearchField(event.target.value);
	  }

	return (
		<nav className='h-14 flex bg-'>
			<div className='flex items-center w-full lg:mx-32 lg:justify-around '>
				<div>
					<Link href='/'>
						<h2 className='hvr-fade text-lg ml-4 font-bold lg:text-2xl mr-5 hover:text-yellow'>
							MOVIE CATALOG
						</h2>
					</Link>
				</div>
				<Search submitQuery={submitQuery} value={searchField} onChange={handleChange}/>
				<Links />
			</div>
		</nav>
	);
};

export default Heading;
