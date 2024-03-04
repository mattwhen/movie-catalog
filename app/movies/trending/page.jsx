'use client';

import React, { useEffect } from 'react';
import TrendingMovies from '../../components/TrendingMovies/TrendingMovies';
import Heading from '../../components/Heading/Heading';
import Footer from '../../components/Footer/Footer';
import './page.css';

export default function page({ params }) {
	return (
		<>
			<Heading />
			<div className='flex'>
				<div className='sidebar-container bg-white w-4'>
					Sidebar
				</div>
				<div className='movie-titles grid grid-cols-4 gap-0'>
					
				</div>
			</div>
			<Footer />
		</>
	);
}
