'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Heading from '../components/Heading/Heading';
import Search from '../components/Heading/Search/Search';

const page = ({ params }) => {
  const router = useRouter();


	return (
		<>
			<Heading />
			<h1>Search results for: </h1>
		</>
	);
};

export default page;
