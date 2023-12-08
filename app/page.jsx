import App from './layout';
import Heading from './components/Heading/Heading';
import Movie from './components/Movie/Movie';

export default function Home() {
	return (
		// Can either be used as <> </> or <React.StrictMode> </React.StrictMode> but this is mainly used to help developers identify and fix issues in their code.
		<>
			<Heading />
			<Movie />
		</>
	);
}
