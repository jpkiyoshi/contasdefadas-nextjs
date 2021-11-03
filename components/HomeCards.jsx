import Image from 'next/image';

const HomeCards = ({ isInversed, description, imgUrl, title }) => {
  return (
    <>
      {isInversed ? (
        <section className="grid w-screen h-screen grid-cols-2 bg-contas-purple-dark">
          <div className="relative">
            <Image src={imgUrl} layout="fill" objectFit="cover" />
          </div>
          <div className="grid items-center p-20">
            <div>
              <h2 className="mb-10 text-6xl font-bold text-contas-pink-light">
                {title}
              </h2>
              <p className="font-serif text-2xl text-contas-pink-dark">
                {description}
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section className="grid w-screen h-screen grid-cols-2 bg-contas-pink-light">
          <div className="grid items-center p-20">
            <div>
              <h2 className="mb-10 text-6xl font-bold text-contas-purple-dark">
                {title}
              </h2>
              <p className="font-serif text-2xl text-contas-pink-dark">
                {description}
              </p>
            </div>
          </div>
          <div className="relative">
            <Image src={imgUrl} layout="fill" objectFit="cover" />
          </div>
        </section>
      )}
    </>
  );
};

export default HomeCards;
