import React from 'react';
import Movie, {trendingMovies} from '../Movie/Movie';
import Image from 'next/image';

const MovieCard = ({data}) => {
  return (
    <div>
      <div>
          <Image alt='movie-backdrop' src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data}`} width={400} height={400} />
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default MovieCard;
