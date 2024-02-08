// Dynamic Route since we do not know the exact segment name ahead of time, we
// want to create a route from dynamic data from moviedb and prerendered at build time.
import Image from 'next/image';
import Heading from '../../components/Heading/Heading';
import MovieCard from '../../components/MovieCard/MovieCard';
import {
	getCredits,
	getMovieDetails,
	getPlaybackVideo,
	getRecommended,
} from '../../services/Api';
import Footer from '../../components/Footer/Footer';

// API endpoint for handling dynamic routes.
// Dynamic Segments are passed as the 'params' prop to layout, page, route, and generateMetadata functions.
async function page({ params, handleWatchList, watchList }) {
	const URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

	const movieDetails = await getMovieDetails(params.id);
	const moviePlayback = await getPlaybackVideo(params.id);
	const movieCredits = await getCredits(params.id);
	const movieRecom = await getRecommended(params.id);

	const directors = filterHandler(movieCredits);

	// Formats date for the Release Date for each movie.
	function formatDate(date) {
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];

		const year = new Date(date).getFullYear();
		const day = new Date(date).getDate();
		const month = new Date(date).getMonth();

		const formatMonth = months[month];

		return formatMonth + ' ' + day + ', ' + year;
	}

	// Used to filter the set of data from movieCredits for the job title of "Director"
	function filterHandler(arr) {
		const filterDirectors = arr.crew.map((element) => {
			return (
				<div className='font-thin' key={element.id}>
					{element.job === 'Director' ? <p>{element.name}</p> : null}
				</div>
			);
		});

		return filterDirectors;
	}

	return (
		<>
			<Heading />
			<main className='flex-col items-center lg:flex lg:flex-wrap xl:flex xl:flex-col lg:flex-row lg:justify-around'>
				<section className='contentSection md:max-w-[800px] lg:max-w-[1200px] lg:w-max'>
					<div className='flex flex-col bg-dark-blue rounded-md mt-8 mb-8'>
						<div className='headerContent'>
							<h1 className='text-xl py-5 px-4 font-bold lg:text-3xl'>
								{movieDetails.original_title}
							</h1>
						</div>
						<div className='flex mb-4 ml-2'>
							{movieDetails.genres.map((genre) => {
								return (
									<a className=' border border-silver cursor-pointer rounded-md px-3 mx-2 hover:text-yellow hover:border-yellow'>
										{genre.name}
									</a>
								);
							})}
						</div>
						<div className='mediaContent flex flex-col-reverse justify-between md:flex-row lg:flex-row lg:justify-start lg:h-[400px] lg:w-[1200px]'>
							<div className='aboutContainer px-4'>
								<Image
									src={`${URL}${movieDetails.poster_path}`}
									width={300}
									height={300}
									alt='Movie Description'
									className='w-32 h-40 rounded-md md:h-full md:w-full lg:w-full lg:h-full'
								/>
							</div>
							<div className='flex justify-center'>
								<iframe
									className='h-64 w-full mb-4 md:w-[500px] md:h-[300px] lg:mx-2 lg:w-[800px] lg:h-full'
									type='video/mp4'
									src={
										moviePlayback.results[0]
											? `https://www.youtube.com/embed/${moviePlayback.results[0].key}?autoplay=1&mute=1`
											: null
									}
								></iframe>
							</div>
						</div>
						<div className='px-4'>
							<h2 className='my-4 font-bold'>Overview</h2>
							<p className='mb-5 font-thin'>{movieDetails.overview}</p>
							<div className=' my-5 font-bold'>
								Director:
								{directors}
							</div>
							<div className='font-bold'>
								Stars:
								{movieCredits.cast.slice(0, 3).map((cast) => (
									<p key={cast.id} className='font-thin'>
										{cast.name}
									</p>
								))}
							</div>
							<div className='my-5 block'>
								Released:
								<p className='block font-thin'>
									{' '}
									{formatDate(movieDetails.release_date)}
								</p>
							</div>
							<div>
								<p className=' my-5'>Where to watch: </p>
							</div>
						</div>
					</div>
				</section>
				{/* some movies might not have any recommendations at all, so we need to return nothing (null). */}
				<section className='md:max-w-[800px] lg:max-w-[1200px]'>
					<div>
						<h2 className='text-2xl'>
							Because you viewed {movieDetails.original_title}
						</h2>
						<div className='container'>
							{movieRecom.length > 0 ? (
								<MovieCard movies={movieRecom} URL={URL} />
							) : (
								<p className='text-center text-2xl mt-10'>
									No recommendations available!
								</p>
							)}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

export default page;
