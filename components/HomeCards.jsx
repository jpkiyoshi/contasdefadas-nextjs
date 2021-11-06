import Image from 'next/image';
import Link from 'next/link';

const HomeCards = ({ isInversed, description, imgUrl, title, slug }) => {
  return (
    <>
      {isInversed ? (
        <section
          className="grid w-screen grid-cols-1 md:h-screen md:grid-cols-2 bg-contas-purple-dark"
          id="section"
        >
          <Link href={`acessorios/${slug}`}>
            <div className="relative cursor-pointer h-96 md:h-auto">
              <Image src={imgUrl} layout="fill" objectFit="cover" alt={slug} />
            </div>
          </Link>
          <div className="grid items-center p-10 md:p-20">
            <Link href={`acessorios/${slug}`}>
              <div className="cursor-pointer hover:opacity-90">
                <h2 className="mb-10 text-5xl font-bold md:text-6xl text-contas-pink-light">
                  {title}
                </h2>
                <p className="font-serif text-xl mb-9 md:text-2xl text-contas-pink-dark">
                  {description}
                </p>
                <p className="pb-8 text-xl font-semibold uppercase text-contas-contrast-light">
                  Ir para {title}{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
              </div>
            </Link>
          </div>
        </section>
      ) : (
        <section className="grid w-screen grid-cols-1 md:h-screen md:grid-cols-2 bg-contas-pink-light">
          <div className="grid items-center p-10 md:p-20">
            <Link href={`acessorios/${slug}`}>
              <div className="cursor-pointer hover:opacity-90">
                <h2 className="mb-10 text-5xl font-bold md:text-6xl text-contas-purple-dark">
                  {title}
                </h2>
                <p className="font-serif text-xl mb-9 md:text-2xl text-contas-pink-dark ">
                  {description}
                </p>
                <p className="pb-8 text-xl font-semibold uppercase text-contas-purple-dark ">
                  Ir para {title}{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
              </div>
            </Link>
          </div>
          <Link href={`acessorios/${slug}`}>
            <div className="relative order-first cursor-pointer h-96 md:h-auto md:order-none">
              <Image src={imgUrl} layout="fill" objectFit="cover" alt={slug} />
            </div>
          </Link>
        </section>
      )}
    </>
  );
};

export default HomeCards;
