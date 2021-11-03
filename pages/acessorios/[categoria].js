import client from '../../sanity/client';

import Layout from '../../components/Layout';

const Categoria = ({ data }) => {

  return (
    <Layout>
      <div>
        <ul>
          {data.map(acessorio => (
            <li key={acessorio._id}>
              {acessorio.nome} - R${acessorio.preco}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { categoria: 'pulseiras' } },
      { params: { categoria: 'colares' } },
      { params: { categoria: 'brincos' } },
      { params: { categoria: 'brincos' } },
      { params: { categoria: 'aneis' } },
      { params: { categoria: 'chaveiros' } }
    ], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  };
};

export async function getStaticProps( {params} ) {
  const category  = params.categoria;

  const query = `*[_type == "acessorio" && categoria._ref in *[slug.current == "${category}"]._id] | order(_createdAt) {
    _id,
    nome,
    "categoria": categoria->categoria,
    "slug": categoria->slug.current,
    "imagem": imagem.asset->url,
    descricao,
    preco
  }`;

  const result = await client.fetch(query);

  return {
    props: {
      data: result
    }
  };
}

export default Categoria;
