const axios = require('axios');

require('dotenv').config();
const apiKey = process.env.ACCESS_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getMovies = (query) => {
	const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
	return axios.get(url).then((res) => console.log(res));
};

export const getTrendingMovies = () => {
	const options = {
		method: 'GET',
		url: 'https://api.themoviedb.org/3/trending/movie/day',
		params: { language: 'en-US' },
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmUyZmUwZjI5MDE4MWFmMmIxZjc2ODJmMDQ5ZjJlNiIsInN1YiI6IjY1NTg0NTA2N2YwNTQwMThkNzhmNTJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2vK5lSGtwryC_4fikUwv776NIdPN2Xd6reyThPlm5_w',
		},
	};

	return axios
		.request(options)
		.then((res) => res.data.results)
		.catch((error) => console.error(error));
};

// Fetch recommended movies, and display them under each segment page.
export const getRecommended = async (query) => {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmUyZmUwZjI5MDE4MWFmMmIxZjc2ODJmMDQ5ZjJlNiIsInN1YiI6IjY1NTg0NTA2N2YwNTQwMThkNzhmNTJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2vK5lSGtwryC_4fikUwv776NIdPN2Xd6reyThPlm5_w',
		},
	};

	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${query}/recommendations`,
		options
	);

	if (!response.ok) {
		console.error('Error fetching recommendations');
	}

	const data = await response.json();
	return data.results;
};

export const getMovieDetails = async (query) => {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmUyZmUwZjI5MDE4MWFmMmIxZjc2ODJmMDQ5ZjJlNiIsInN1YiI6IjY1NTg0NTA2N2YwNTQwMThkNzhmNTJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2vK5lSGtwryC_4fikUwv776NIdPN2Xd6reyThPlm5_w',
		},
	};

	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${query}?language=en-US`,
		options
	);

	if (!response.ok) {
		console.error('Error fetching Movie Details');
	}

	const data = await response.json();
	return data;
};

export const getTopRated = async () => {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmUyZmUwZjI5MDE4MWFmMmIxZjc2ODJmMDQ5ZjJlNiIsInN1YiI6IjY1NTg0NTA2N2YwNTQwMThkNzhmNTJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2vK5lSGtwryC_4fikUwv776NIdPN2Xd6reyThPlm5_w',
		},
	};

	const result = await fetch(
		'https://api.themoviedb.org/3/movie/top_rated',
		options
	);

	if (!result.ok) {
		console.error('Error fetching Top Rated Movies');
	}

	const response = await result.json();
	return response.results;
};

export const getPlaybackVideo = async (query) => {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmUyZmUwZjI5MDE4MWFmMmIxZjc2ODJmMDQ5ZjJlNiIsInN1YiI6IjY1NTg0NTA2N2YwNTQwMThkNzhmNTJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2vK5lSGtwryC_4fikUwv776NIdPN2Xd6reyThPlm5_w',
		},
	};

	const result = await fetch(
		`https://api.themoviedb.org/3/movie/${query}/videos`,
		options
	);

	if (!result.ok) {
		console.error('Error fetching Playback Video');
	}

	const data = result.json();
	return data;
};

export const getCredits = async (query) => {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmUyZmUwZjI5MDE4MWFmMmIxZjc2ODJmMDQ5ZjJlNiIsInN1YiI6IjY1NTg0NTA2N2YwNTQwMThkNzhmNTJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2vK5lSGtwryC_4fikUwv776NIdPN2Xd6reyThPlm5_w',
		},
	};

	const result = await fetch(
		`https://api.themoviedb.org/3/movie/${query}/credits`,
		options
	);

	if (!result.ok) {
		console.error('Error fetching Movie Credits');
	}

	const data = await result.json();
	return data;
};

export const getRatings = async (query) => {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmUyZmUwZjI5MDE4MWFmMmIxZjc2ODJmMDQ5ZjJlNiIsInN1YiI6IjY1NTg0NTA2N2YwNTQwMThkNzhmNTJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2vK5lSGtwryC_4fikUwv776NIdPN2Xd6reyThPlm5_w',
		},
	};
	const result = await fetch(
		`https://api.themoviedb.org/3/movie/${query}`,
		options
	);

	const res = await result.json();
	return res.vote_average;
};

export const searchMovie = async (query) => {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmUyZmUwZjI5MDE4MWFmMmIxZjc2ODJmMDQ5ZjJlNiIsInN1YiI6IjY1NTg0NTA2N2YwNTQwMThkNzhmNTJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2vK5lSGtwryC_4fikUwv776NIdPN2Xd6reyThPlm5_w',
		},
	};

	const result = await fetch(
		`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
		options
	);

	if (!result.ok) {
		console.error('Error fetching Searched result');
	}

	const data = await result.json();

	const searchData = data.results;
	return searchData;
};
