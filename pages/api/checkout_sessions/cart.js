import { validateCartItems } from 'use-shopping-cart/utilities';
import Stripe from 'stripe';
import client from '../../../sanity/client';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
	// https://github.com/stripe/stripe-node#configuration
	apiVersion: '2020-03-02',
});

const productsQuery = `*[_type == "acessorio"] {
  "id": _id,
  "name": nome,
  "description": descricao,
  "price": preco,
  "image": imagem.asset->url,
  "currency": "brl"
}`;

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			// Validate the cart details that were sent from the client.
			const cartItems = req.body;
			//Sanity client performs merchQuery
			let sanityData = await client.fetch(productsQuery);
			// The POST request is then validated against the data from Sanity.
			const line_items = validateCartItems(sanityData, cartItems);
			// Create Checkout Sessions from body params.
			const params = {
				submit_type: 'pay',
				mode: 'payment',
				payment_method_types: ['card'],
				billing_address_collection: 'auto',
				shipping_address_collection: {
					allowed_countries: ['BR'],
				},
				//The validated cart items are inserted.
				line_items,
				success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
				cancel_url: `${req.headers.origin}`,
			};
			const checkoutSession = await stripe.checkout.sessions.create(params);

			res.status(200).json(checkoutSession);
		} catch (err) {
			res.status(500).json({ statusCode: 500, message: err.message });
		}
	} else {
		res.setHeader('Allow', 'POST');
		res.status(405).end('Method Not Allowed');
	}
}
