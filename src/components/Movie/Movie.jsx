import React, { useState, useEffect } from 'react';
import { getMovies, getTrendingMovies } from '../../services/Api';
import Image from '../../../node_modules/next/image';
import { Carousel } from 'react-responsive-carousel';
import { addToWatchlist } from '../../utils/helpers';
import MovieCard from '../MovieCard/MovieCard';

export default function Movie() {
	const [trendingMovies, setTrendingMovies] = useState([]);

	useEffect(() => {
		getTrendingMovies()
			.then((data) => {
				setTrendingMovies(data);
			})
			.catch((error) => {
				console.error('Error fetching trending movies:', error.message);
			});
	}, []); // Empty dependency array means this effect runs once on component mount

	if (!trendingMovies) {
		return null;
	}

	console.log('Trending Movies array', trendingMovies);

	return (
		<div className='px-6'>
			<MovieCard>
				<ul className='grid grid-cols-3 gap-8'>
					{trendingMovies.map((movie) => {
						return (
							<>
								<div className=' w-56'>
									<Image
										className='hvr-grow'
										key={movie.id}
										src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
										width={226}
										height={220}
										alt='movie posters'
									/>
									<div className='overlay-font-color bg-gray-800 px-4 py-2'>
										<a className='cursor-pointer' onClick={addToWatchlist}>Add to Watchlist</a>
									</div>
									<div className=' bg-gray-800 px-4 py-2'>
										{movie.original_title}
									</div>
								</div>
							</>
						);
					})}
				</ul>
			</MovieCard>
		</div>
	);
}
