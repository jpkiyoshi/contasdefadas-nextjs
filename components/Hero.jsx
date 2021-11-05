import HeroBackground from './HeroBackground';

const Hero = () => {
  return (
    <HeroBackground>
      <div className="p-6 md:p-10">
        <h1 className="text-6xl font-extrabold leading-none mb-7 md:text-7xl text-contas-purple-dark">
          Trazemos a magia até você
        </h1>
        <p className="text-3xl leading-9 md:text-center text-contas-purple-dark">
          Acessórios artesanais feitos com dedicação, cuidado e muito amor
        </p>
      </div>

      <a
        href="#section"
        className="px-6 py-4 mb-32 text-lg font-bold text-white rounded md:mb-9 lg:text-2xl text-opacity-80 bg-contas-purple-dark hover:bg-opacity-80"
      >
        Veja nossos produtos
      </a>
    </HeroBackground>
  );
};

export default Hero;
