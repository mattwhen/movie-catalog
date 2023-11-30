'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { getMovieDetails } from '../../services/Api';

 async function page ({params, data}) {

  const getData = await getMovieDetails(params.id);
  const URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
  console.log('Data', getData);

	return (
		<div>
      <h2 className='text-3xl text-center'>{params.id}</h2>
			<Image 
        src={`${URL}${getData.backdrop_path}`}
        width={250}
        height={250}
        alt='Movie Description'
      />
		</div>
	);
};

export default page;
