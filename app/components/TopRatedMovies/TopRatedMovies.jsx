import Link from 'next/link';
import Image from 'next/image';
import MovieWatchlist from '../MovieWatchlist/MovieWatchlist';

export default function TopRatedMovies({ topRatedMovies, URL }) {
	return (
		<>
			{topRatedMovies.map((movie) => {
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
		</>
	);
}
