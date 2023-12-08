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

	console.log(movieCredits.crew);

	return (
		<>
			<Heading />
			<main className='bg-dark-blue'>
				<section className='pageSection max-h-fit mx-0'>
					<div className='flex flex-col lg:min-h-96'>
						<div className='headerContent'>
							<h1 className='text-3xl py-5'>{movieDetails.original_title}</h1>
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
								src={`https://www.youtube.com/embed/${moviePlayback.results[0].key}`}
								width={800}
							></iframe>
							<ul className='bg-yellow w-32 flex flex-col items-center justify-around '>
								<li className='rounded-full w-16 h-16 bg-black hover:bg-white cursor-pointer'></li>
								<li className='rounded-full w-16 h-16 bg-black hover:bg-white cursor-pointer'></li>
								<li className='rounded-full w-16 h-16 bg-black hover:bg-white cursor-pointer'></li>
							</ul>
						</div>
					</div>
					<div className='w-1/2 h-96'>
						<h2 className='text-2xl my-4'>Overview</h2>
						<p className='mb-5'>{movieDetails.overview}</p>
						<div className='font-bold my-5'>
							Director:
							{movieCredits.crew.map((director) => {
								<p>{director}</p>
							})}
						</div>
						<div className='font-bold'>
							Stars:
							{movieCredits.cast.slice(0, 3).map((cast) => (
								<p key={cast.id}>{cast.name}</p>
							))}
						</div>
						<p className='font-bold my-5'>
							Release Date: {movieDetails.release_date}
						</p>
						<p className='font-bold my-5'>Where to watch: </p>
					</div>
				</section>
			</main>
		</>
	);
}

export default page;
