// Dynamic Route since we do not know the exact segment name ahead of time, we
// want to create a route from dynamic data from moviedb and prerendered at build time.
import React from 'react';
import Image from 'next/image';
import Heading from '../../components/Heading/Heading';
import {
	getCredits,
	getMovieDetails,
	getPlaybackVideo,
	getRecommended,
} from '../../services/Api';

// API endpoint for handling dynamic routes.
// Dynamic Segments are passed as the 'params' prop to layout, page, route, and generateMetadata functions.
async function page({ params }) {
	const movieDetails = await getMovieDetails(params.id);
	const URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

	const moviePlayback = await getPlaybackVideo(params.id);
	const movieCredits = await getCredits(params.id);

	async function fetchRecommendations() {
		try {
			const recommendations = await getRecommended(params.id);
			console.log('recommendations:', recommendations);
			return recommendations;
			// Do something with the recommendations
		} catch (error) {
			console.error('Error fetching recommendations:', error);
		}
	}

	const recommendedMovies = fetchRecommendations();

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

	return (
		<>
			<Heading />
			<main className='bg-dark-blue flex justify-center'>
				<section className='contentSection flex justify-center md:max-w-[800px] lg:max-w-[1200px] lg:w-max'>
					<div className='flex flex-col'>
						<div className='headerContent'>
							<h1 className='text-xl py-5 px-4 font-bold lg:text-3xl'>
								{movieDetails.original_title}
							</h1>
						</div>
						<div className='mediaContent mx-4 flex flex-col-reverse justify-center md:flex-row lg:flex-row '>
							<div className='aboutContainer pr-4'>
								<Image
									src={`${URL}${movieDetails.poster_path}`}
									width={300}
									height={300}
									alt='Movie Description'
									className='w-32 h-40 rounded-md md:h-full md:w-full lg:w-full lg:h-full'
								/>
							</div>
							<div className='md:flex justify-center'>
								<iframe
									className='h-64 mb-4 md:w-[500px] md:h-[300px] lg:mx-2 lg:w-[800px] lg:h-full'
									type='video/mp4'
									src={`https://www.youtube.com/embed/${moviePlayback.results[0].key}?autoplay=1&mute=1`}
								></iframe>
							</div>
						</div>
						<div className='px-4'>
							<h2 className='my-4 font-bold'>Overview</h2>
							<p className='mb-5 font-thin'>{movieDetails.overview}</p>
							<div className=' my-5 font-bold'>
								Director:
								{movieCredits.crew.map((director) => {
									<p>{director}</p>;
								})}
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
							<p>Title: {recommendedMovies.page}</p>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

export default page;
