'use client';

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

	{
		movieCredits.crew.filter((name, query) => {
			name.toLowerCase().includes(query('directing'));
		
		});
	}
	// console.log(movieCredits.crew);

	function expandCredits() {
		movieCredits.cast.slice(3, 8);
		movieCredits.cast.slice(3, 8).map((cast) => {
			return <p>{cast.name}</p>;
		});
	}

	return (
		<>
			<Heading />
			<main className='flex justify-center items-center'>
				<section className='pageSection mx-5 bg-gray-800 w-1/2 max-h-fit'>
					<div className='flex flex-col lg:min-h-96 lg:min-w-4xl'>
						<div className='headerContent'>
							<h1 className='text-3xl px-5 py-5'>
								{movieDetails.original_title}
							</h1>
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
								width={700}
							></iframe>
						</div>
					</div>
					<div className='w-1/4 h-96 mx-5'>
						<p className='my-5'>{movieDetails.overview}</p>
						<p className='font-bold my-5'>
							Director:
							{movieCredits.crew.map((director) => (
								<p key={director.id}>{director.name}</p>
							))}
							{/* {movieCredits.crew.filter(director => (
							// director.known_for_department === 'Directing'
						)
						)} */}
						</p>
						<p className='font-bold'>
							Stars:
							{movieCredits.cast.slice(0, 3).map((cast) => (
								<p key={cast.id}>{cast.name}</p>
							))}
						</p>
						{/* <p className=' cursor-pointer' onClick={expandCredits}>[...]</p> */}
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
