"use client";

import React, { useEffect } from "react";
import Heading from "../../components/Heading/Heading";
import Footer from "../../components/Footer/Footer";
import "./page.css";

export default function page() {
	useEffect(() => {
		const trendingMovies = async () => {
			try {
				const data = await getTrendingMovies();
				setTrendingMovies(data);
				setIsLoading(false);
			} catch (error) {
				console.error("Error fetching trending movies:", error.message);
			}
		};
		trendingMovies();
	}, []); 

	return (
		<>
			<Heading />
			<div className="flex mt-10">
				<div className="sidebar-container bg-white w-4">
					<div className="panel text-black">Test</div>
				</div>
				<div className="movie-titles grid grid-cols-4 gap-0"></div>
			</div>
			<Footer />
		</>
	);
}
