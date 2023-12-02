// Dynamic Route since we do not know the exact segment name ahead of time, we
// want to create a route from dynamic data from moviedb and prerendered at build time.
import React from 'react';
import Image from 'next/image';
import Heading from '../../components/Heading/Heading';
import { getMovieDetails, getPlaybackVideo } from '../../services/Api';

// API endpoint for handling dynamic routes.
// Dynamic Segments are passed as the 'params' prop to layout, page, route, and generateMetadata functions.

async function page({ params }) {
	const movieDetails = await getMovieDetails(params.id);
	const URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
	console.log('movieDetails', movieDetails);

	const moviePlayback = await getPlaybackVideo(params.id);

	return (
		<div>
			<Heading />
			<div className='page-container mx-5'>
				<h1 className='text-3xl px-5 py-5'>{movieDetails.original_title}</h1>
				<div className='flex justify-center '>
					<Image
						src={`${URL}${movieDetails.poster_path}`}
						width={300}
						height={300}
						alt='Movie Description'
					/>
					<div className='w-80 h-96 mx-5 overflow-auto '>
						<p className='my-5'>{movieDetails.overview}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default page;
