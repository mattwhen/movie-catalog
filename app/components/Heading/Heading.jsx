'use client';

import { useState } from 'react';
import Links from './Links/Links';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { searchMovie } from '../../services/Api';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';

const Heading = () => {
	const router = useRouter();

	const [mobileOpen, setMobileOpen] = useState(false);
	const [searchField, setSearchField] = useState('');

	const submitQuery = async (e) => {
		e.preventDefault();
		const result = await searchMovie(searchField);
		console.log(result);
		searchField ? router.push(`/movies/search/${searchField}`) : null;
	};

	// Prevent/hide scrolling when the Navigation menu is opened.
	const mobileOpenHandler = () => {
		if (mobileOpen) {
			document.getElementsByTagName('body')[0].style.overflow = 'visible';
			setMobileOpen(false);
		} else {
			document.getElementsByTagName('body')[0].style.overflow = 'hidden';
			setMobileOpen(true);
		}
	};

	return (
		<nav className='bg-gray h-14 flex'>
			<div className='flex items-center justify-between w-full px-4 md:justify-center'>
				<div className='mr-5'>
					<Link href='/'>
						<h2 className='lg:text-lg mr-5 hover:cursor-pointer'>
							<Image
								src={'/images/RMC_Logo.png'}
								alt='RMC Logo'
								width={100}
								height={50}
								className='hover:cursor-pointer'
							/>
						</h2>
					</Link>
				</div>
				<form onSubmit={submitQuery} className='hidden md:block'>
					<div className='md:flex md:justify-between md:items-center lg:flex lg:justify-between lg:items-center '>
						<input
							className='text-black rounded-l-md w-72 h-8 p-4 md:w-[250px] lg:w-[400px]'
							type='text'
							placeholder='Search movies...'
							value={searchField}
							onChange={(event) => setSearchField(event.target.value)}
						/>
						<button
							className='bg-gray-400 text-black rounded-r-md'
							type='submit'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className='w-8 h-8 bg-yellow rounded-r-md text-dark-blue'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
								/>
							</svg>
						</button>
					</div>
				</form>
				{/* Mobile view */}
				<div className='flex items-center md:hidden'>
					<button
						id='hamburger-menu'
						className='text-4xl flex align-middle text-gray-500 ml-auto'
						onClick={mobileOpenHandler}
					>
						{mobileOpen ? (
							<RxCross1 className='z-50 transition-all text-gray-700' />
						) : (
							<GiHamburgerMenu className=' text-gray-700' />
						)}
					</button>
				</div>
				<Links />
			</div>
		</nav>
	);
};

export default Heading;
