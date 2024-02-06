'use client';

import React, { useState, useEffect, Fragment } from 'react';
import { getTrendingMovies, getTopRated, getRatings } from '../../services/Api';
import Image from 'next/image';
import MovieCard from '../MovieCard/MovieCard';
import MovieWatchList from '../MovieWatchlist/MovieWatchlist';
import Link from 'next/link';

export default function Movie() {
	const [trendingMovies, setTrendingMovies] = useState([]);
	const [topRatedMovies, setTopRatedMovies] = useState([]);
	const [watchList, setWatchList] = useState([]);

	const movieRating = [];

	const URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

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

	// Fetch trending movies on component mount
	useEffect(() => {
		getTrendingMovies()
			.then((data) => {
				setTrendingMovies(data);
			})
			.catch((error) => {
				console.error('Error fetching trending movies:', error.message);
			});
	}, []); // Empty dependency array means this effect runs once on component mount

	useEffect(() => {
		getRatings(trendingMovies.map((movie) => movie.id))
			.then((data) => {
				console.log('Trending Ratings:', data);
			})
			.catch((error) => {
				console.error('Error fetching ratings:', error.message);
			});
	}, [trendingMovies]); // runs only when trendingMovies changes.

	function handleWatchList() {
		console.log('test');
		setWatchList(watchList + 1);
	}

	return (
		<main className='px-4'>
			<section className='flex overflow-x-hidden lg:justify-center movieContainer'>
				<div className='md:w-[800px] lg:w-[1000px]  xl:w-[1280px]'>
					<div>
						<h1 className='text-md font-bold py-4 ml-4'>Top Trending Movies</h1>
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
													rating={movie.vote_average}
													movie={movie.id}
													watchList={watchList}
													onClick={handleWatchList}
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
			<section className='flex overflow-x-hidden lg:justify-center movieContainer'>
				<div className='md:w-[800px] lg:w-[1000px] xl:w-[1280px]'>
					<div>
						<h1 className='text-md font-bold py-8 ml-4'>Top Rated Movies</h1>
					</div>
					<div className='container'>
						<MovieCard>
							<ul className='flex'>
								{topRatedMovies.map((movie) => {
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
													rating={movie.vote_average}
													movie={movie.id}
													watchList={watchList}
													onClick={handleWatchList}
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
		</main>
	);
}
