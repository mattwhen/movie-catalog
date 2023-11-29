import React from 'react';

const MovieCard = ({children}) => {
  return (
    <div className='flex justify-center m-5'>
     {children}
    </div>
  );
}

export default MovieCard;
