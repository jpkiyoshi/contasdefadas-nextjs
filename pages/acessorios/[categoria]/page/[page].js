// /pages/blog/pages/[page].js

import CategoryIndex from '..';
import Pagination from '../../../../components/Pagination';

import SanityService from '../../../../services/sanity';
import { PaginationConfig } from '../../../../utils/pagination';

export default function Index({ category, data, currentPage, totalPages }) {
  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
  const prevDisabled = parseInt(currentPage, 10) === 1;

  return (
    <>
      <CategoryIndex
        data={data}
        category={category}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </>
  );
}

export const getStaticPaths = async () => {
  const categories = [
    'brincos',
    'colares',
    'pulseiras',
    'tornozeleiras',
    'aneis',
    'phonestraps',
    'chaveiros',
    'bolsas',
    'cintos'
  ];

  const paths = [];

  for (let i = 0; i < categories.length; i++) {
    let totalProducts = await SanityService.getTotalProductsInCategory(
      categories[i]
    );
    let totalPages = Math.ceil(
      totalProducts / PaginationConfig.config.pageSize
    );

    for (let page = 1; page <= totalPages; page++) {
      paths.push({
        params: {
          categoria: categories[i],
          page: page.toString()
        }
      });
    }
  }

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const category = params.categoria;
  const data = await SanityService.getContentFromSpecificCategoryPage(
    category,
    params.page
  );
  const totalPages = Math.ceil(
    data.totalNumberOfProductsInCategory / PaginationConfig.config.pageSize
  );

  return {
    props: {
      category: category,
      data: data.results,
      totalPages,
      currentPage: params.page
    },
    revalidate: 10
  };
};
