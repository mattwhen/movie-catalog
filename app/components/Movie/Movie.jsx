'use client';

import React, { useState, useEffect } from 'react';
import { getMovies, getTrendingMovies } from '../../services/Api';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import MovieCard from '../MovieCard/MovieCard';
import MovieDetails from '../MovieDetails/MovieDetails';
import Link from 'next/link';

export default function Movie() {
	const [trendingMovies, setTrendingMovies] = useState([]);
	const [watchList, setWatchList] = useState(0);

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

	function handleWatchList() {
		console.log('test');
		setWatchList(watchList + 1);
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
									<Link href={`/movie/${movie.id}`} >
										<Image
											className='hvr-grow'
											key={movie.id}
											src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
											width={226}
											height={220}
											alt='movie posters'
										/>
									</Link>
									<MovieDetails
										title={movie.original_title}
										onClick={handleWatchList}
										watchList={watchList}
									/>
								</div>
							</>
						);
					})}
				</ul>
			</MovieCard>
		</div>
	);
}
