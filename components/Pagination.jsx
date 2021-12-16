import Link from 'next/link';

const Pagination = props => {
  const { category, totalPages, currentPage, prevDisabled, nextDisabled } =
    props;

  const prevPageUrl =
    currentPage === '2'
      ? `/acessorios/${category}`
      : `/acessorios/${category}/page/${parseInt(currentPage, 10) - 1}`;

  const nextPageUrl = `/acessorios/${category}/page/${
    parseInt(currentPage, 10) + 1
  }`;

  return (
    <div className="flex items-center mx-auto mb-9">
      <button className="flex items-center px-4 py-3 mr-2 font-bold border rounded-lg border-contas-purple-dark text-contas-purple-dark hover:bg-contas-purple-dark hover:text-white">
        {prevDisabled && (
          <a>
            <span>&#8592;</span> Anterior
          </a>
        )}
        {!prevDisabled && (
          <Link href={prevPageUrl}>
            <a>
              <span>&#8592;</span> Anterior
            </a>
          </Link>
        )}
      </button>
      <div className="text-lg font-bold">
        {currentPage} de {totalPages}
      </div>
      <button className="flex items-center px-4 py-3 ml-2 font-bold text-white border border-teal-500 rounded-lg bg-contas-purple-dark hover:bg-opacity-90">
        {nextDisabled && (
          <a>
            Seguinte <span>&#8594;</span>
          </a>
        )}
        {!nextDisabled && (
          <Link href={nextPageUrl}>
            <a>
              Seguinte <span>&#8594;</span>
            </a>
          </Link>
        )}
      </button>
    </div>
  );
};

export default Pagination;
