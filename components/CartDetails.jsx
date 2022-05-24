/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/solid';
import { useShoppingCart } from 'use-shopping-cart';
import { fetchPostJSON } from '../utils/apiHelpers';

export default function CartDetails({ showCart }) {
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [cartEmpty, setCartEmpty] = useState(true);
	const {
		formattedTotalPrice,
		cartCount,
		clearCart,
		cartDetails,
		redirectToCheckout,
		incrementItem,
		decrementItem,
		removeItem,
		handleCartClick,
	} = useShoppingCart();

	useEffect(() => setCartEmpty(!cartCount), [cartCount]);
	useEffect(() => setOpen(showCart), [showCart]);

	const handleCheckout = async () => {
		// event.preventDefault();
		setLoading(true);
		//send the cart data to our serverless API
		const response = await fetchPostJSON('/api/checkout_sessions/cart', cartDetails);

		if (response.statusCode === 500) {
			console.error(response.message);
			return;
		}
		//if nothing went wrong, sends user to Stripe checkout
		redirectToCheckout(response.id);
	};

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as='div' className='relative z-50' onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter='ease-in-out duration-500'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in-out duration-500'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75' />
				</Transition.Child>

				<div className='fixed inset-0 overflow-hidden'>
					<div className='absolute inset-0 overflow-hidden'>
						<div className='fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none'>
							<Transition.Child
								as={Fragment}
								enter='transform transition ease-in-out duration-500 sm:duration-700'
								enterFrom='translate-x-full'
								enterTo='translate-x-0'
								leave='transform transition ease-in-out duration-500 sm:duration-700'
								leaveFrom='translate-x-0'
								leaveTo='translate-x-full'
							>
								<Dialog.Panel className='w-screen max-w-md pointer-events-auto'>
									<div className='flex flex-col h-full overflow-y-scroll shadow-xl bg-contas-purple-dark'>
										<div className='flex-1 px-4 py-6 overflow-y-auto sm:px-6'>
											<div className='flex items-start justify-between'>
												<Dialog.Title className='text-lg font-medium text-white'>
													{' '}
													Minha sacola{' '}
												</Dialog.Title>
												<div className='flex items-center ml-3 h-7'>
													<button
														type='button'
														className='p-2 -m-2 text-white hover:text-contas-pink-light'
														onClick={() => {
															setOpen(false);
															handleCartClick();
														}}
													>
														<span className='sr-only'>
															Close panel
														</span>
														<XIcon
															className='w-6 h-6'
															aria-hidden='true'
														/>
													</button>
												</div>
											</div>

											<div className='mt-8'>
												<div className='flow-root'>
													<ul
														role='list'
														className='-my-6 divide-y divide-gray-200'
													>
														{Object.values(cartDetails).map(
															product => (
																<li
																	key={product.id}
																	className='flex py-6'
																>
																	<div className='flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md'>
																		<img
																			src={
																				product.image
																			}
																			alt={
																				product.description
																			}
																			className='object-cover object-center w-full h-full'
																		/>
																	</div>

																	<div className='flex flex-col flex-1 ml-4'>
																		<div>
																			<div className='flex justify-between text-base font-medium text-white'>
																				<h3>
																					{
																						product.name
																					}
																				</h3>
																				<p className='ml-4'>
																					{
																						product.formattedValue
																					}
																				</p>
																			</div>
																			<p className='mt-1 text-sm text-contas-pink-light'>
																				{
																					product.description
																				}
																			</p>
																		</div>
																		<div className='flex items-end justify-between flex-1 mt-2 text-sm'>
																			<div className='flex'>
																				<MinusCircleIcon
																					className='w-4 text-white cursor-pointer'
																					onClick={() =>
																						decrementItem(
																							product.id
																						)
																					}
																				/>
																				<p className='px-2 mx-1 font-bold text-black border rounded bg-contas-pink-light'>
																					{
																						product.quantity
																					}
																				</p>
																				<PlusCircleIcon
																					className='w-4 text-white cursor-pointer'
																					onClick={() =>
																						incrementItem(
																							product.id
																						)
																					}
																				/>
																			</div>

																			<div className='flex'>
																				<button
																					type='button'
																					className='font-medium text-white'
																					onClick={() =>
																						removeItem(
																							product.id
																						)
																					}
																				>
																					Remover
																				</button>
																			</div>
																		</div>
																	</div>
																</li>
															)
														)}
													</ul>
												</div>
											</div>
										</div>

										<div className='px-4 py-6 border-t border-gray-200 sm:px-6'>
											<div className='flex justify-between text-base font-medium text-white'>
												<p>Subtotal</p>
												<p>{formattedTotalPrice}</p>
											</div>
											{/* <p className='mt-0.5 text-sm text-white'>
												Shipping and taxes calculated at checkout.
											</p> */}
											<div className='mt-6'>
												<button
													disabled={cartEmpty || loading}
													onClick={() => handleCheckout()}
													className='flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 disabled:opacity-50'
												>
													Checkout
												</button>
											</div>
											<div className='flex justify-center mt-6 text-sm text-center text-gray-500'>
												<p>
													ou{' '}
													<button
														type='button'
														className='font-medium text-indigo-600 hover:text-indigo-500'
														onClick={() => {
															setOpen(false);
															handleCartClick();
														}}
													>
														Continue comprando
														<span aria-hidden='true'>
															{' '}
															&rarr;
														</span>
													</button>
												</p>
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
