import Heading from '../../../components/Heading/Heading';
import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MovieCard from '../../../components/MovieCard/MovieCard';
import { searchMovie } from '../../../services/Api';
import MovieWatchlist from '../../../components/MovieWatchlist/MovieWatchlist';

const page = async ({ params }) => {
	const searchResults = await searchMovie(params.searchId);
	const URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

	console.log('My Params', searchResults);

	return (
		<>
			<Heading />
			<main>
				<div className='text-center'>Search Results for: {params.searchId}</div>
				{searchResults.map((movie) => {
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
							<MovieWatchlist title={movie.title} />
							</div>
						</Fragment>
					);
				})}
			</main>
		</>
	);
};

export default page;
