import { useRouter } from 'next/router';
import Image from 'next/image';
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart';
import Meta from './Meta';

const ProductDetails = ({ productData }) => {
	const { category, description, image, name, price, id } = productData;
	const router = useRouter();
	const { addItem, removeItem } = useShoppingCart();

	const productDataForStripe = {
		...productData,
		currency: 'brl',
	};

	return (
		<>
			<Meta title={name} description={description} image={image} />

			<section className='overflow-hidden text-gray-700 body-font bg-contas-pink-light'>
				<div className='container px-5 py-10 mx-auto lg:py-24'>
					<div className='flex flex-wrap mx-auto lg:w-4/5'>
						<div className='w-full lg:w-1/2'>
							<Image
								src={image}
								width='100%'
								height='100%'
								layout='responsive'
								objectFit='contain'
								priority
								className='object-cover object-center rounded shadow-lg'
							/>
						</div>
						<div className='w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0'>
							<h2 className='mb-1 text-sm tracking-widest text-gray-500 uppercase title-font'>
								{category}
							</h2>
							<h1 className='mb-1 text-3xl font-medium text-contas-purple-dark title-font'>
								{name}
							</h1>
							<p className='mb-3 leading-relaxed text-contas-purple-dark'>
								{description}
							</p>
							<div className='flex flex-col gap-4'>
								<span className='text-2xl font-medium text-contas-pink-dark title-font'>
									{formatCurrencyString({
										value: price,
										currency: 'brl',
									})}
								</span>
								<a
									rel='noreferrer'
									target='_blank'
									href={`https://api.whatsapp.com/send?phone=5561984830443&text=Olá, gostaria de comprar o acessório ${name}, de ${formatCurrencyString(
										{
											value: price,
											currency: 'brl',
										}
									)}. https://contasdefadas.com.br${router.asPath}`}
									className='flex justify-center px-6 py-2 text-white bg-green-700 border-0 rounded focus:outline-none hover:bg-green-600'
								>
									Comprar por whatsapp
								</a>
								<button onClick={() => addItem(productDataForStripe)}>
									Add to cart
								</button>
								<button onClick={() => removeItem(id)}>Remove</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProductDetails;
