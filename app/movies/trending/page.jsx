'use client';

import React, { useEffect } from 'react';
import TrendingMovies from '../../components/TrendingMovies/TrendingMovies';
import Heading from '../../components/Heading/Heading';
import Footer from '../../components/Footer/Footer';

export default function page() {

	return (
		<>
			<Heading />
			<TrendingMovies />
			<Footer />
		</>
	);
}
