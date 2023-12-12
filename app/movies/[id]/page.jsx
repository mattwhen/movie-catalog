// Dynamic Route since we do not know the exact segment name ahead of time, we
// want to create a route from dynamic data from moviedb and prerendered at build time.
import React from 'react';
import Image from 'next/image';
import Heading from '../../components/Heading/Heading';
import {
	getCredits,
	getMovieDetails,
	getPlaybackVideo,
} from '../../services/Api';

// API endpoint for handling dynamic routes.
// Dynamic Segments are passed as the 'params' prop to layout, page, route, and generateMetadata functions.
async function page({ params }) {
	const movieDetails = await getMovieDetails(params.id);
	const URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

	const moviePlayback = await getPlaybackVideo(params.id);
	const movieCredits = await getCredits(params.id);

	// Remove when done
	console.log(movieCredits.crew);

	function formatDate(date) {
		const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

		const year = new Date(date).getFullYear();
		const day = new Date(date).getDate();
		const month = new Date(date).getMonth();

		const formatMonth = months[month];

		return formatMonth + ' ' + day + ', ' + year;
	}

	return (
		<>
			<Heading />
			<main className='bg-dark-blue'>
				<section className='pageSection'>
					<div className='flex flex-col' id='center'>
						<div className='headerContent'>
							<h1 className='text-3xl py-5 font-bold'>{movieDetails.original_title}</h1>
						</div>
						<div className='mainContent flex justify-center '>
							<Image
								src={`${URL}${movieDetails.poster_path}`}
								width={300}
								height={300}
								alt='Movie Description'
							/>
							<iframe
								className='mx-2'
								type='video/mp4'
								src={`https://www.youtube.com/embed/${moviePlayback.results[0].key}?autoplay=1&mute=1`}
								width={800}
							></iframe>
						
						</div>
						<div className=''>
							<h2 className='text-2xl my-4'>Overview</h2>
							<p className='mb-5'>{movieDetails.overview}</p>
							<div className=' my-5'>
								Director:
								{movieCredits.crew.map((director) => {
									<p>{director}</p>;
								})}
							</div>
							<div className=''>
								Stars:
								{movieCredits.cast.slice(0, 3).map((cast) => (
									<p key={cast.id}>{cast.name}</p>
								))}
							</div>
							<p className='my-5'>
								Released: {formatDate(movieDetails.release_date)}
							</p>
							<p className=' my-5'>Where to watch: </p>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

export default page;
