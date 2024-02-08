import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import MovieWatchList from '../MovieWatchlist/MovieWatchlist';

const MovieCard = ({ movies, URL, isLoading }) => {
	// If the movies are still loading, display a loading indicator
	const loadingElements = [];
	for (let i = 0; i < 20; i++) {
		loadingElements.push(<Image src={'/'} height={275} width={192} />);
	}

	return (
		<div className='container'>
			<ul className='flex'>
				{isLoading
					? loadingElements.map((element) => {
							return (
								<div>
									<Image src={'/'} height={275} width={192} />
									<MovieWatchList title={'Loading...'} movie={'Loading...'} />
								</div>
							);
					  })
					: movies.map((movie) => {
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
												loading='lazy'
											/>
										</Link>
										<MovieWatchList
											title={movie.original_title}
											rating={movie.vote_average}
											movie={movie.id}
										/>
									</div>
								</Fragment>
							);
					  })}
			</ul>
		</div>
	);
};

export default MovieCard;
