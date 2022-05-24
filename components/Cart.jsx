import { CartProvider } from 'use-shopping-cart';

export default function Cart({ children }) {
	return (
		<CartProvider
			cartMode='checkout-session'
			stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
			currency='BRL'
			mode='payment'
		>
			{children}
		</CartProvider>
	);
}
