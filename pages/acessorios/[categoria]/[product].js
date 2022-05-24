import ProductDetails from '../../../components/ProductDetails';
import client from '../../../sanity/client';

const ProductPage = ({ data }) => {
	return (
		<>
			<ProductDetails productData={data[0]} />
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
		fallback: 'blocking',
	};
}

export async function getStaticProps(params) {
	const slug = params.params.product;

	const productQuery = `*[slug.current == "${slug}"]{
    "id": _id,
    "name": nome,
    "category": categoria->categoria,
    "image": imagem.asset->url,
    "description": descricao,
    "price": preco
  }`;

	let result = await client.fetch(productQuery);

	return {
		props: {
			data: result,
		},
		revalidate: 10,
	};
}

export default ProductPage;
