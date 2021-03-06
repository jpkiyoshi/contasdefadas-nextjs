import client from '../../../sanity/client';
import SanityService from '../../../services/sanity';
import formatMoney from '../../../utils/formatMoney';
import { useRouter } from 'next/router';
import Meta from '../../../components/Meta';
import Image from 'next/image';
import { formatCurrencyString } from 'use-shopping-cart';
const Product = ({ data }) => {
	const { categoria, descricao, imagem, nome, preco } = data[0];
	const router = useRouter();

	return (
		<>
			<Meta title={nome} description={descricao} image={imagem} />

			<section className='overflow-hidden text-gray-700 body-font bg-contas-pink-light'>
				<div className='container px-5 py-10 mx-auto lg:py-24'>
					<div className='flex flex-wrap mx-auto lg:w-4/5'>
						{/* <img
              alt={nome}
              className="object-cover object-center w-full rounded shadow-lg lg:w-1/2"
              src={imagem}
            /> */}
						<div className='w-full lg:w-1/2'>
							<Image
								src={imagem}
								width='100%'
								height='100%'
								layout='responsive'
								objectFit='contain'
								className='object-cover object-center rounded shadow-lg'
							/>
						</div>
						<div className='w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0'>
							<h2 className='mb-1 text-sm tracking-widest text-gray-500 uppercase title-font'>
								{categoria}
							</h2>
							<h1 className='mb-1 text-3xl font-medium text-contas-purple-dark title-font'>
								{nome}
							</h1>
							<p className='mb-3 leading-relaxed text-contas-purple-dark'>
								{descricao}
							</p>
							<div className='flex flex-col gap-4'>
								<span className='text-2xl font-medium text-contas-pink-dark title-font'>
									{formatCurrencyString({
										value: preco,
										currency: 'brl',
									})}{' '}
								</span>
								<a
									rel='noreferrer'
									target='_blank'
									href={`https://api.whatsapp.com/send?phone=5561984830443&text=Olá, gostaria de comprar o acessório ${nome}, de ${formatCurrencyString(
										{
											value: preco,
											currency: 'brl',
										}
									)}. https://contasdefadas.com.br${router.asPath}`}
									className='flex justify-center px-6 py-2 text-white bg-green-700 border-0 rounded focus:outline-none hover:bg-green-600'
								>
									Comprar por whatsapp
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export async function getStaticPaths() {
	const query = `
  *[slug.current != null && categoria->slug.current != null]{
    "slug": categoria->slug.current,
    "productSlug": slug.current
  }
  `;

	let result = await client.fetch(query);

	const paths = result.map(product => {
		return {
			params: {
				categoria: product.slug,
				product: product.productSlug,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(params) {
	const slug = params.params.product;

	const query = `*[slug.current == "${slug}"]{
    _id,
    nome,
    "categoria": categoria->categoria,
    "imagem": imagem.asset->url,
    descricao,
    preco
}`;

	let result = await client.fetch(query);

	return {
		props: {
			data: result,
		},
		revalidate: 10,
	};
}

export default Product;
