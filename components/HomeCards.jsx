import Image from 'next/image';
import Link from 'next/link';

const HomeCards = ({ isInversed, description, imgUrl, title, slug }) => {
  return (
    <>
      {isInversed ? (
        <section className="grid w-screen grid-cols-1 md:h-screen md:grid-cols-2 bg-contas-purple-dark">
          <Link href={`acessorios/${slug}`}>
            <div className="relative cursor-pointer h-96 md:h-auto">
              <Image src={imgUrl} layout="fill" objectFit="cover" />
            </div>
          </Link>
          <div className="grid items-center p-20">
            <Link href={`acessorios/${slug}`}>
              <div className="cursor-pointer">
                <h2 className="mb-10 text-6xl font-bold text-contas-pink-light">
                  {title}
                </h2>
                <p className="font-serif text-2xl text-contas-pink-dark">
                  {description}
                </p>
              </div>
            </Link>
          </div>
        </section>
      ) : (
        <section className="grid w-screen grid-cols-1 md:h-screen md:grid-cols-2 bg-contas-pink-light">
          <div className="grid items-center p-20">
            <Link href={`acessorios/${slug}`}>
              <div className="cursor-pointer">
                <h2 className="mb-10 text-6xl font-bold text-contas-purple-dark">
                  {title}
                </h2>
                <p className="font-serif text-2xl text-contas-pink-dark">
                  {description}
                </p>
              </div>
            </Link>
          </div>
          <Link href={`acessorios/${slug}`}>
            <div className="relative order-first cursor-pointer h-96 md:h-auto md:order-none">
              <Image src={imgUrl} layout="fill" objectFit="cover" />
            </div>
          </Link>
        </section>
      )}
    </>
  );
};

export default HomeCards;
