'use client';

import React, { useState, useEffect, Fragment } from 'react';
import { getMovies, getTrendingMovies } from '../../services/Api';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import MovieCard from '../MovieCard/MovieCard';
import MovieWatchList from '../MovieWatchlist/MovieWatchlist';
import Link from 'next/link';

export default function Movie() {
	const [trendingMovies, setTrendingMovies] = useState([]);
	const [watchList, setWatchList] = useState(0);

	const URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

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

	console.log('Trending Movies arr', trendingMovies);

	return (
		<section className='flex justify-center'>
			<div>
				<div>
					<h1 className='text-4xl font-bold py-4 ml-5'>Top Trending Movies</h1>
				</div>
				<div className='container'>
					<MovieCard>
						<ul className='flex'>
							{trendingMovies.map((movie) => {
								return (
									<Fragment key={movie.id}>
										<div className='w-40 ml-5'>
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
											<MovieWatchList
												title={movie.original_title}
												onClick={handleWatchList}
												watchList={watchList}
											/>
										</div>
									</Fragment>
								);
							})}
						</ul>
					</MovieCard>
				</div>
			</div>
		</section>
	);
}
