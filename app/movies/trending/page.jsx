'use client';

import React, { useEffect } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import Heading from '../../components/Heading/Heading';
import Footer from '../../components/Footer/Footer';

export default function page() {
	// Fetch trending movies on component mount
	useEffect(() => {
		getTrendingMovies()
			.then((data) => {
				setTrendingMovies(data);
				setLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching trending movies:', error.message);
			});
	}, []); // Empty dependency array means this effect runs once on component mount

	return (
		<>
			<Heading />
			<getTrendingMovies />
			<Footer />
		</>
	);
}
