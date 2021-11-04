import HeroBackground from './HeroBackground';

const Hero = () => {
  return (
    <HeroBackground>
      <h1 className="text-6xl font-extrabold leading-none lg:text-7xl text-contas-purple-dark p-7">
        Trazemos a magia até voce
      </h1>
      <button className="px-6 py-4 text-lg font-bold text-white rounded lg:text-2xl text-opacity-90 bg-contas-purple-dark hover:bg-opacity-80">
        Veja nossos produtos
      </button>
    </HeroBackground>
  );
};

export default Hero;
