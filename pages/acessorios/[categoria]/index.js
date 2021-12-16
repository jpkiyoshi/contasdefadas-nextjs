import Link from 'next/link';
import Meta from '../../../components/Meta';
import Image from 'next/image';
import { useRouter } from 'next/router';
import formatMoney from '../../../utils/formatMoney';

import SanityService from '../../../services/sanity';
import { PaginationConfig } from '../../../utils/pagination';

import Pagination from '../../../components/Pagination';

const Product = ({ productData }) => {
  const { name, image, description, slug, price, productSlug } = productData;

  return (
    <div className="flex-col justify-center shadow-md items-left rounded-xl hover:opacity-80 bg-contas-purple-dark">
      <Link href={`/acessorios/${slug}/${productSlug}`}>
        <a>
          <Image
            alt={name}
            src={image}
            height="500"
            width="500"
            className="rounded-t-xl"
          />
          <div className="relative flex flex-col px-3 pb-3 space-y-1 text-white">
            <h3 className="w-full text-lg font-semibold break-words">{name}</h3>
            <p className="text-base text-gray-300">
              {formatMoney(parseInt(price))}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
};

const ProductShelf = ({ products }) => {
  return (
    <section className="grid grid-cols-2 gap-10 m-auto my-10 lg:grid-cols-4">
      {products.map(product => (
        <Product key={product._id} productData={product} />
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
  prevDisabled
}) => {
  return (
    <>
      <Meta title={data[0]?.category} />
      <div className="py-10 bg-contas-pink-light">
        <div className="container flex flex-col items-center justify-center m-auto">
          <h1 className="mb-5 text-5xl font-bold text-center capitalize text-contas-purple-dark">
            {data[0]?.category}
          </h1>
          <ProductShelf products={data} />
        </div>
      </div>
      <div className="flex items-center bg-contas-pink-light">
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
      { params: { categoria: 'chaveiros' } }
    ],
    fallback: false //indicates the type of fallback
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
      currentPage: '1'
    },
    revalidate: 10
  };
};

export default CategoryIndex;
