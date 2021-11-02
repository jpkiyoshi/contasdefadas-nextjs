import { useRouter } from 'next/router';
import sanityClient from '@sanity/client';

const Categoria = ({ data }) => {
  const router = useRouter();
  const { categoria } = router.query;

  const currentAcessorio = data.filter(
    acessorio => acessorio.slug === categoria
  );

  console.log(currentAcessorio);

  return (
    <div>
      <ul>
        {currentAcessorio.map(acessorio => (
          <li key={acessorio._id}>{acessorio.nome}</li>
        ))}
      </ul>
    </div>
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

export async function getStaticProps() {
  const client = sanityClient({
    projectId: '4nd9464x',
    dataset: 'production',
    apiVersion: '2021-11-01',
    token: '', // or leave blank to be anonymous user
    useCdn: false // `false` if you want to ensure fresh data
  });

  const query = `*[_type == "acessorio"] | order(_createdAt) {
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
