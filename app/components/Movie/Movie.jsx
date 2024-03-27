'use client';

import React, { useState, useEffect, Fragment } from 'react';
import { getTrendingMovies, getTopRated, getRatings } from '../../services/Api';
import MovieCard from '../MovieCard/MovieCard';
import Heading from '../Heading/Heading';
import Loading from '../Loading/Loading';
import TrendingMovies from '../TrendingMovies/TrendingMovies';
import TopRatedMovies from '../TopRatedMovies/TopRatedMovies';

export default function Movie() {
	const [trendingMovies, setTrendingMovies] = useState([]);
	const [topRatedMovies, setTopRatedMovies] = useState([]);
	const [watchList, setWatchList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

	// Fetch trending movies on component mount
	useEffect(() => {
		const trendingMovies = async () => {
			try {
				const data = await getTrendingMovies();
				setTrendingMovies(data);
				setIsLoading(false);
			} catch (error) {
				console.error('Error fetching trending movies:', error.message);
			}
		};
		trendingMovies();
	}, []); // Empty dependency array means this effect runs once on component mount

	// Fetch top rated movies on component mount
	useEffect(() => {
		const topRatedMovies = async () => {
			try {
				const data = await getTopRated();
				setTopRatedMovies(data);
				setIsLoading(false);
			} catch (error) {
				console.error('Error fetching trending movies:', error.message);
			}
		};
		topRatedMovies();
	}, []); // Empty dependency array means this effect runs once on component mount

	return (
		<>
			<Heading />
			<main className='px-4'>
				<section className='flex overflow-x-hidden lg:justify-center movieContainer'>
					<div className='md:w-[800px] lg:w-[1000px]  xl:w-[1280px]'>
						<div>
							<h1 className='text-md font-bold py-4 ml-4 md:text-xl'>
								Top Trending Movies
							</h1>
						</div>
						<div className='container'>
							{isLoading ? (
								<Loading />
							) : (
								<TrendingMovies trendingMovies={trendingMovies} URL={URL} />
							)}
						</div>
					</div>
				</section>
				<section className='flex overflow-x-hidden lg:justify-center movieContainer'>
					<div className='mt-12 md:w-[800px] lg:w-[1000px] xl:w-[1280px]'>
						<div>
							<h1 className='text-md font-bold py-4 ml-4 md:text-xl'>
								Top Rated Movies
							</h1>
							<div className='container'>
								{isLoading ? (
									<Loading />
								) : (
									<TopRatedMovies topRatedMovies={topRatedMovies} URL={URL} />
								)}
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
