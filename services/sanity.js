import sanityClient from '@sanity/client';
import { PaginationConfig } from '../utils/pagination';

const client = sanityClient({
  projectId: '4nd9464x',
  dataset: 'production',
  apiVersion: '2021-11-01',
  token: '', // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
});

const createProductQuery = () => {
  return;
};

const getCategoryQueryString = category => {
  return `*[_type == "acessorio" && categoria._ref in 
        *[slug.current == "${category}"]._id] | order(_createdAt desc) {
        _id,
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

const getSanityPageFormat = (
  page,
  pageSize = PaginationConfig.config.pageSize
) => {
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
  getContentFromSpecificCategoryPage
};

export default exports;
