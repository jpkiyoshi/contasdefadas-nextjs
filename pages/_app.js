import Layout from '../components/Layout';
import '../styles/globals.css';
import Cart from '../components/Cart';

function MyApp({ Component, pageProps }) {
	return (
		<Cart>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Cart>
	);
}

export default MyApp;
