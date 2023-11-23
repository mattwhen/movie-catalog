import React, { useState, useEffect } from 'react';
import { getMovies, getTrendingMovies } from '../../services/Api';
import Image from '../../../node_modules/next/image';
import { Carousel } from 'react-responsive-carousel';
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
			<h1 className='text-2xl my-4'>Trending Movies</h1>
			<div className='CONTAINER '>
				<ul className='lg:flex '>
					{trendingMovies.map((movie) => {
						return (
							<>
								<div className='hvr-grow'>
									<Image
										className=''
										key={movie.id}
										src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
										width={256}
										height={250}
										alt='movie posters'
									/>
									<div className='overlay-font-color bg-gray-800'>
										Add to Watchlist
									</div>
									<div className=' bg-gray-800'>{movie.original_title}</div>
									<div className=' bg-gray-800'></div>
								</div>
							</>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
