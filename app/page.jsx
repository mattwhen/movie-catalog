import App from './layout';
import Heading from './components/Heading/Heading';
import Movie from './components/Movie/Movie';
import Footer from './components/Footer/Footer';

export default function Home() {
	return (
		// Can either be used as <> </> or <React.StrictMode> </React.StrictMode> but this is mainly used to help developers identify and fix issues in their code.
		<>
			<Heading />
			<Movie />
			<Footer/>
		</>
	);
}
