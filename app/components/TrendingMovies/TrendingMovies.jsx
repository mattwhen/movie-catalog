'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getTrendingMovies } from '../../services/Api';
import MovieWatchlist from '../MovieWatchlist/MovieWatchlist';

export default function page() {
	const [trendingMovies, setTrendingMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isGrid, setIsGrid] = useState(false);

	const URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

	// Fetch trending movies on component mount
	useEffect(() => {
		getTrendingMovies()
			.then((data) => {
				setTrendingMovies(data);
				setLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching trending movies:', error.message);
			});
	}, []); // Empty dependency array means this effect runs once on component mount

	return (
		<div>
			<main>
				<h2 className='text-center text-4xl mt-4 mb-8'>Trending Movies</h2>
				<div className='flex justify-center'>
					<div className={isGrid ? 'flex flex-col md:grid md:grid-cols-4 md:w-[800px]' : null}>
						{trendingMovies.map((movie) => {
							return (
								<div key={movie.id} className='mb-5'>
									<div className='w-40'>
										{/* Link to dynamic path */}
										<Link href={`/movies/${movie.id}`}>
											<Image
												className='hvr-grow'
												src={`${URL}${movie.poster_path}`}
												height={275}
												width={192}
												alt='movie posters'
												data={movie.id}
											/>
										</Link>
										<MovieWatchlist
											title={movie.title}
											rating={movie.vote_average}
										/>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</main>
		</div>
	);
}
