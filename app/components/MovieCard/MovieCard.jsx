import React from 'react';
import MovieWatchList from '../MovieWatchlist/MovieWatchlist';
import MovieWatchlist from '../MovieWatchlist/MovieWatchlist';
import Link from 'next/link';
import Image from 'next/image';

const MovieCard = ({ movies, URL, isLoading }) => {
	// If the movies are still loading, display a loading indicator
	const loadingElements = [];
	
	for (let i = 0; i < 20; i++) {
		loadingElements.push(
			<div className='w-40 ml-5'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className='animate-pulse'
				>
					<path
						fillRule='evenodd'
						d='M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z'
						clipRule='evenodd'
					/>
				</svg>
				<MovieWatchList title={'N/A'} movie={'Loading...'} />
			</div>
		);
	}

	return (
		<div className='container'>
			<ul className='flex'>
			{movies.map((movie) => {
				return (
					<div key={movie.id} className='mb-5 mx-2'>
						<div className='w-40'>
							{/* Link to dynamic path */}
							<Link href={`/movies/${movie.id}`}>
								<Image
									className='hover:opacity-90'
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
								movie={movie.id}
							/>
						</div>
					</div>
				);
			})}
			</ul>
		</div>
	);
};

export default MovieCard;
