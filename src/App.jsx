import Header from './sections/Header';
import Main from './sections/Main/Main';
import Service from './sections/Service/Service';
import Blog from './sections/Blog/Blog';
import About from './sections/About Us/About';
import Subscribe from './sections/Subscribe/Subscribe';
import Footer from './sections/Footer/Footer';

const App = () => {
	return (
		<div className='container'>
			<Header />
			<Main />
			<Service />
			<Blog />
			<About />
			<Subscribe />
			<Footer/>
		</div>
	);
};

export default App;
