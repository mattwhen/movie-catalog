import React from 'react';
import Movie, {trendingMovies} from '../Movie/Movie';
import Image from 'next/image';

const MovieCard = ({children}) => {
  return (
    <div className='flex justify-center m-5'>
     {children}
    </div>
  );
}

export default MovieCard;
