import Link from 'next/link';
import Meta from '../../../components/Meta';
import Image from 'next/image';

import SanityService from '../../../services/sanity';
import { PaginationConfig } from '../../../utils/pagination';

import Pagination from '../../../components/Pagination';
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart';

const Product = ({ productData }) => {
	const { name, image, slug, price, productSlug, id, description } = productData;
	const { addItem, handleCartClick } = useShoppingCart();

	const productDataForStripe = {
		...productData,
		currency: 'brl',
	};

	return (
		<div>
			<Link href={`/acessorios/${slug}/${productSlug}`}>
				<a>
					<div className='relative'>
						<div className='relative w-full overflow-hidden rounded-lg h-72'>
							<Image
								src={image}
								alt={description}
								layout='fill'
								className='object-cover object-center w-full h-full'
							/>
						</div>
						<div className='relative mt-4'>
							<h3 className='text-sm font-medium text-gray-900'>{name}</h3>
							<p className='mt-1 overflow-hidden text-sm font-medium text-contas-pink-dark overflow-ellipsis whitespace-nowrap'>
								{description}
							</p>
						</div>
						<div className='absolute inset-x-0 top-0 flex items-end justify-end p-4 overflow-hidden rounded-lg h-72'>
							<div
								aria-hidden='true'
								className='absolute inset-x-0 bottom-0 opacity-50 h-36 bg-gradient-to-t from-contas-purple-dark'
							/>
							<p className='relative text-lg font-semibold text-contas-contrast-light'>
								{formatCurrencyString({
									value: price,
									currency: 'brl',
								})}
							</p>
						</div>
					</div>
				</a>
			</Link>
			<div className='mt-6'>
				<button
					onClick={() => {
						addItem(productDataForStripe);
						handleCartClick();
					}}
					className='relative flex items-center justify-center w-full px-8 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-contas-purple-dark hover:bg-contas-pink-dark'
				>
					Adicionar à sacola
					<span className='sr-only'>, {name}</span>
				</button>
			</div>
		</div>
	);
};

const ProductShelf = ({ products }) => {
	console.log(products);
	return (
		<section className='grid grid-cols-1 mt-8 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
			{products.map(product => (
				<Product key={product.id} productData={product} />
			))}
		</section>
	);
};

const Categoria = ({
	category,
	data,
	currentPage,
	totalPages,
	nextDisabled,
	prevDisabled,
}) => {
	return (
		<>
			<Meta title={data[0]?.category} />
			<div className='bg-contas-pink-light'>
				<div className='max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
					<h1 className='mb-16 text-5xl font-bold text-center capitalize text-contas-purple-dark'>
						{data[0]?.category}
					</h1>
					<ProductShelf products={data} />
				</div>
			</div>
			<div className='flex items-center bg-contas-pink-light'>
				<Pagination
					category={category}
					totalPages={totalPages}
					currentPage={currentPage}
					nextDisabled={nextDisabled}
					prevDisabled={prevDisabled}
				/>
			</div>
		</>
	);
};

const CategoryIndex = ({ category, data, currentPage, totalPages }) => {
	const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
	const prevDisabled = parseInt(currentPage, 10) === 1;

	return (
		<>
			<Categoria
				data={data}
				category={category}
				totalPages={totalPages}
				currentPage={currentPage}
				nextDisabled={nextDisabled}
				prevDisabled={prevDisabled}
			/>
		</>
	);
};

export const getStaticPaths = async () => {
	return {
		paths: [
			{ params: { categoria: 'colares' } },
			{ params: { categoria: 'pulseiras' } },
			{ params: { categoria: 'tornozeleiras' } },
			{ params: { categoria: 'brincos' } },
			{ params: { categoria: 'aneis' } },
			{ params: { categoria: 'phonestraps' } },
			{ params: { categoria: 'chaveiros' } },
			{ params: { categoria: 'bolsas' } },
			{ params: { categoria: 'cintos' } },
		],
		fallback: false, //indicates the type of fallback
	};
};

export const getStaticProps = async ({ params }) => {
	const category = params.categoria;

	const productsInPage = await SanityService.getContentFromSpecificCategoryPage(
		category,
		1
	);
	const totalNumberOfProductsInCategory =
		productsInPage.totalNumberOfProductsInCategory;

	const totalPages = Math.ceil(
		totalNumberOfProductsInCategory / PaginationConfig.config.pageSize
	);

	return {
		props: {
			category: category,
			data: productsInPage.results,
			totalPages,
			currentPage: '1',
		},
		revalidate: 10,
	};
};

export default CategoryIndex;
