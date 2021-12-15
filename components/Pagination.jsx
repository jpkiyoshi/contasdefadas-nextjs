import Link from 'next/link';

const Pagination = (props) => {
    const { category, totalPages, currentPage, prevDisabled, nextDisabled } = props;
  
    const prevPageUrl =
      currentPage === "2"
        ? `/acessorios/${category}`
        : `/acessorios/${category}/page/${parseInt(currentPage, 10) - 1}`;
  
    const nextPageUrl = `/acessorios/${category}/page/${parseInt(currentPage, 10) + 1}`;
  
    return (
      <ol>
        <li>
          {prevDisabled && <span>Previous page</span>}
          {!prevDisabled && (
            <Link href={prevPageUrl}>
              <a>Previous page</a>
            </Link>
          )}
        </li>
        <li>
          Page {currentPage} of {totalPages}
        </li>
        <li>
          {nextDisabled && <span>Next page</span>}
          {!nextDisabled && (
            <Link href={nextPageUrl}>
              <a>Next page</a>
            </Link>
          )}
        </li>
      </ol>
    );
  }

export default Pagination;