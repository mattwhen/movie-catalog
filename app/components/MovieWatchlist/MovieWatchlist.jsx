import { FaStar } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const MovieWatchlist = ({ title, watchList, onClick, rating, movie }) => {
	const router = useRouter();

	function handleDecimal(num) {
		return num.toFixed(2);
	}

	return (
		<div className='bg-dark-blue rounded-b-md'>
			<div className=' px-4 py-2'>
				<div className='flex items-center mb-4'>
					<FaStar className='text-xl mr-2 text-yellow' />
					<div>{rating ? handleDecimal(rating) : <p>No Ratings</p>}</div>
				</div>
				<a
					className='overlay-font-color cursor-pointer hover:text-yellow'
					onClick={() => router.push('/movies/login')}
				>
					Add to Watchlist
				</a>
			</div>
			<Link href={`/movies/${movie}`}>
				<p className='px-4 py-2 max-h-10 text-ellipsis whitespace-nowrap overflow-hidden hover:underline '>
					{title}
				</p>
			</Link>
		</div>
	);
};

export default MovieWatchlist;
