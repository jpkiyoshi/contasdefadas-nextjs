import Meta from '../components/Meta';

const QuemSomos = () => {
  return (
    <>
      <Meta title="Quem Somos" />
      <div className="flex flex-col gap-6 p-10 bg-contas-pink-light">
        <h1 className="mx-auto text-5xl font-bold capitalize text-contas-purple-dark">
          quem somos
        </h1>
        <p className="text-2xl">
          A
          <span className="text-3xl font-bold text-contas-purple-dark">
            {' '}
            Contas de Fadas{' '}
          </span>
          é uma fusão entre as personalidades de mãe e filha. A mãe, Sandra, é
          artesã desde seus 26 anos. Começou como aluna em um curso de
          bijuterias e, possuindo talento, em pouco tempo se tornou professora.
          Ela possui habilidades e experiências com miçangas, crochê, biscuit,
          costura, desenho, arranjos e tudo mais que a mente dela possa
          alcançar. A filha, Miriam, sempre teve sua mãe como inspiração e
          começou a aprender muitas coisas nesse ramo. Juntas, pretendem trazer
          um novo conceito aos acessórios feitos manualmente, trazendo
          modernidade, criatividade, versatilidade e qualidade.
        </p>
      </div>
    </>
  );
};

export default QuemSomos;
