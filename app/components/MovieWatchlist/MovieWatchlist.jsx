import { FaStar } from "react-icons/fa";
import Link from "next/link";

const MovieWatchlist = ({ title, watchList, onClick, rating, movie }) => {

	function handleDecimal(num) {
		return num.toFixed(2);
	}

	return (
		<div className='bg-dark-blue'>
			<div className=' px-4 py-2'>
				<div className='flex items-center mb-4'>
					<FaStar className="text-xl mr-2 text-yellow" />
					<p>{handleDecimal(rating)}</p>
				</div>
				<a
					className='overlay-font-color cursor-pointer hover:text-yellow'
					onClick={onClick}
				>
					Add to Watchlist
				</a>
			</div>
			<Link href={`/movies/${movie}`} >
				<p className='px-4 py-2 max-h-10 text-ellipsis whitespace-nowrap overflow-hidden hover:underline hover:overflow-visible hover:whitespace-normal'>{title}</p>
			</Link>
		</div>
	);
};

export default MovieWatchlist;
