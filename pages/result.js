import { useRouter } from 'next/router';
import Link from 'next/link';
import useSWR from 'swr';
import PrintObject from '../components/PrintObject';
import { fetchGetJSON } from '../utils/apiHelpers';
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart';
import { useEffect, useState } from 'react';

const ResultPage = () => {
	const router = useRouter();
	const { clearCart, cartDetails } = useShoppingCart();
	const [orderCartDetails, setOrderCartDetails] = useState({});

	const { data, error } = useSWR(
		router.query.session_id
			? `/api/checkout_sessions/${router.query.session_id}`
			: null,
		fetchGetJSON
	);

	useEffect(() => {
		if (data) {
			clearCart();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	useEffect(() => {
		setOrderCartDetails({ ...cartDetails });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (error) {
		return <div>failed to load</div>;
	}

	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
			<main className='relative lg:min-h-full bg-contas-pink-light'>
				<div className='overflow-hidden h-80 lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-12'>
					<img
						src='https://tailwindui.com/img/ecommerce-images/confirmation-page-06-hero.jpg'
						alt='TODO'
						className='object-cover object-center w-full h-full'
					/>
				</div>

				<div>
					<div className='max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:py-32 lg:grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-24'>
						<div className='lg:col-start-2'>
							<h1 className='text-sm font-medium text-black'>
								Pagamento bem sucedido
							</h1>
							<p className='mt-2 text-4xl font-extrabold tracking-tight text-contas-purple-dark sm:text-5xl'>
								Obrigado por comprar conosco,{' '}
								{
									data?.payment_intent.charges.data[0].billing_details
										.name
								}
								!
							</p>
							<p className='mt-2 text-base text-black'>
								Agradecemos a sua compra, estamos aguardando a confirmação
								do pagamento. Enviaremos um e-mail com detalhes da compra
								para{' '}
								<span className='font-bold'>
									{
										data?.payment_intent.charges.data[0]
											.billing_details.email
									}
								</span>{' '}
								assim que confirmarmos.
							</p>

							<dl className='mt-16 text-sm font-medium'>
								<dt className='text-gray-900'>Tracking number</dt>
								<dd className='mt-2 text-indigo-600'>
									51547878755545848512
								</dd>
							</dl>

							<ul
								role='list'
								className='mt-6 text-sm font-medium text-gray-500 border-t border-gray-200 divide-y divide-gray-200'
							>
								{Object.values(orderCartDetails).map(product => (
									<li key={product.id} className='flex py-6 space-x-6'>
										<img
											src={product.image}
											alt={product.description}
											className='flex-none object-cover object-center w-24 h-24 bg-gray-100 rounded-md'
										/>
										<div className='flex-auto space-y-1'>
											<h3 className='text-contas-purple-dark'>
												<a href={product.href}>{product.name}</a>
											</h3>
											<p className='text-black'>
												{product.description}
											</p>
											<p>Quantidade: {product.quantity}</p>
										</div>
										<p className='flex-none font-medium text-gray-900'>
											{product.formattedValue}
										</p>
									</li>
								))}
							</ul>

							<dl className='pt-6 space-y-6 text-sm font-medium text-gray-500 border-t border-gray-200'>
								<div className='flex justify-between'>
									<dt>Subtotal</dt>
									<dd className='text-gray-900'></dd>
								</div>

								<div className='flex justify-between'>
									<dt>Shipping</dt>
									<dd className='text-gray-900'>$8.00</dd>
								</div>

								<div className='flex justify-between'>
									<dt>Taxes</dt>
									<dd className='text-gray-900'>$6.40</dd>
								</div>

								<div className='flex items-center justify-between pt-6 text-gray-900 border-t border-gray-200'>
									<dt className='text-base'>Total</dt>
									<dd className='text-base'>
										{formatCurrencyString({
											value: data?.amount_total,
											currency: 'brl',
										})}
									</dd>
								</div>
							</dl>

							<dl className='grid grid-cols-2 mt-16 text-sm text-black gap-x-4'>
								<div>
									<dt className='font-bold text-contas-purple-dark'>
										Endereço de envio
									</dt>
									<dd className='mt-2'>
										<address className='not-italic'>
											<span className='block'>
												{
													data?.payment_intent.charges.data[0]
														.billing_details.name
												}
											</span>
											<span className='block'>
												{
													data?.payment_intent.charges.data[0]
														.billing_details.address.line1
												}
											</span>
											{data?.payment_intent.charges.data[0]
												.billing_details.address.line2 && (
												<span className='block'>
													{
														data?.payment_intent.charges
															.data[0].billing_details
															.address.line2
													}
												</span>
											)}
											<span className='block'>
												{
													data?.payment_intent.charges.data[0]
														.billing_details.address.city
												}
												,{' '}
												{
													data?.payment_intent.charges.data[0]
														.billing_details.address.state
												}{' '}
												{
													data?.payment_intent.charges.data[0]
														.billing_details.address
														.postal_code
												}
											</span>
										</address>
									</dd>
								</div>
							</dl>

							<div className='py-6 mt-16 text-right border-t border-gray-200'>
								<Link href='/' passHref>
									<div className='text-sm font-medium cursor-pointer text-contas-purple-dark hover:text-contas-pink-dark'>
										Continuar comprando
										<span aria-hidden='true'> &rarr;</span>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</main>

			{/* <PrintObject content={data ?? 'loading...'} /> */}
		</>
	);
};

export default ResultPage;
