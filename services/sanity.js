import { PaginationConfig } from '../utils/pagination';
import client from '../sanity/client';

const createProductQuery = () => {
	return;
};

const getCategoryQueryString = category => {
	return `*[_type == "acessorio" && categoria._ref in 
        *[slug.current == "${category}"]._id] | order(_createdAt desc) {
        "id": _id,
        "name": nome,
        "category": categoria->categoria,
        "slug": categoria->slug.current,
        "image": imagem.asset->url,
        "description": descricao,
        "price": preco,
        "productSlug": slug.current,
        }`;
};

const createCategoryQuery = (category, page = null) => {
	let sanityPageFormat = '';
	if (page) {
		sanityPageFormat = getSanityPageFormat(page);
	}
	const query = getCategoryQueryString(category);
	return `{
        "results": ${query}${sanityPageFormat},
        "totalNumberOfProductsInCategory": count(${query}),
    }`;
};

const getSanityPageFormat = (page, pageSize = PaginationConfig.config.pageSize) => {
	const start = page === 1 ? 0 : (page - 1) * pageSize;
	const finish = page * pageSize - 1;
	return `[${start}..${finish}]`;
};

const getQuery = async query => {
	return await client.fetch(query);
};

const getTotalProductsInCategory = async category => {
	const query = getCategoryQueryString(category);
	return await client.fetch(`count(${query})`);
};

const getContentFromSpecificCategoryPage = async (category, page) => {
	const query = createCategoryQuery(category, page);
	return await client.fetch(query);
};

const exports = {
	createProductQuery,
	getTotalProductsInCategory,
	getContentFromSpecificCategoryPage,
};

export default exports;
