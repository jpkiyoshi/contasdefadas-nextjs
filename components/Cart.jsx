import { CartProvider } from 'use-shopping-cart';
import getStripe from '../lib/getStripe';

export default function Cart({ children }) {
	return (
		<CartProvider mode='checkout-session' stripe={getStripe()} currency={'brl'}>
			{children}
		</CartProvider>
	);
}
