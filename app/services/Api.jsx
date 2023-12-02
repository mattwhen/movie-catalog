const axios = require('axios');

const ACCESS_TOKEN =
	'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmUyZmUwZjI5MDE4MWFmMmIxZjc2ODJmMDQ5ZjJlNiIsInN1YiI6IjY1NTg0NTA2N2YwNTQwMThkNzhmNTJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2vK5lSGtwryC_4fikUwv776NIdPN2Xd6reyThPlm5_w';
const BASE_URL = 'https://api.themoviedb.org/3/';

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmUyZmUwZjI5MDE4MWFmMmIxZjc2ODJmMDQ5ZjJlNiIsInN1YiI6IjY1NTg0NTA2N2YwNTQwMThkNzhmNTJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2vK5lSGtwryC_4fikUwv776NIdPN2Xd6reyThPlm5_w',
	}
};

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

export const getMovieDetails = async (query) => {
	const res = await fetch(`https://api.themoviedb.org/3/movie/${query}?language=en-US`, options);
	const data = await res.json();
	
	return data;
};

export const getPlaybackVideo = async (query) => {
	const res = await fetch(`https://api.themoviedb.org/3/movie/${query}/videos`, options);
	const data = res.json();

	return data; 
}

