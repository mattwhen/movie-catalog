import Heading from '../../../components/Heading/Heading';
import Link from 'next/link';
import Image from 'next/image';
import { searchMovie } from '../../../services/Api';
import MovieWatchlist from '../../../components/MovieWatchlist/MovieWatchlist';
import Footer from '../../../components/Footer/Footer';

const page = async ({ params }) => {
	const searchResults = await searchMovie(params.searchId);
	const URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

	return (
		<>
			<Heading />
			<main>
				<h2 className='text-center text-4xl mt-4 mb-8'>Search Results:</h2>
				<div className='flex justify-center'>
					<div className='grid grid-cols-4 gap-4 w-[1000px]'>
						{searchResults.map((movie) => {
							return (
								<div key={movie.id} className=''>
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
										<MovieWatchlist title={movie.title} />
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default page;
