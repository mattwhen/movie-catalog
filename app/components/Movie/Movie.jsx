'use client';

import React, { useState, useEffect, Fragment } from 'react';
import { getTrendingMovies, getTopRated, getRatings } from '../../services/Api';
import MovieCard from '../MovieCard/MovieCard';
import Heading from '../Heading/Heading';
import TrendingMovies from '../TrendingMovies/TrendingMovies';

export default function Movie() {
	const [trendingMovies, setTrendingMovies] = useState([]);
	const [topRatedMovies, setTopRatedMovies] = useState([]);
	const [watchList, setWatchList] = useState([]);
	const [loading, setLoading] = useState(true);

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

	// Fetch top rated movies on component mount
	useEffect(() => {
		getTopRated()
			.then((data) => {
				setTopRatedMovies(data);
			})
			.catch((error) => {
				console.error('Error fetching trending movies:', error.message);
			});
	}, []); // Empty dependency array means this effect runs once on component mount

	return (
		<>
			<Heading
				trendingMovies={trendingMovies}
				topRatedMovies={topRatedMovies}
			/>
			<main className='px-4'>
				<section className='flex overflow-x-hidden lg:justify-center movieContainer'>
					<div className='md:w-[800px] lg:w-[1000px]  xl:w-[1280px]'>
						<div>
							<h1 className='text-md font-bold py-4 ml-4 md:text-xl'>
								Top Trending Movies
							</h1>
						</div>
						<MovieCard movies={trendingMovies} URL={URL} isLoading={loading} />
					</div>
				</section>
				<section className='flex overflow-x-hidden lg:justify-center movieContainer'>
					<div className='mt-12 md:w-[800px] lg:w-[1000px] xl:w-[1280px]'>
						<div>
							<h1 className='text-md font-bold ml-4 md:text-xl'>
								Top Rated Movies
							</h1>
						</div>
						<MovieCard movies={topRatedMovies} URL={URL} isLoading={loading} />
					</div>
				</section>
			</main>
		</>
	);
}
