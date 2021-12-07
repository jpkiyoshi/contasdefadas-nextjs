import Image from 'next/image';
import client from '../../../sanity/client';
import formatMoney from '../../../utils/formatMoney';

const Product = ({ data }) => {
  const { categoria, descricao, imagem, nome, preco } = data[0];

  return (
    <>
      <h1 className="text-5xl">{categoria}</h1>
      <div className="relative flex-col justify-center border items-left border-contas-pink-light rounded-xl">
        <Image src={imagem} height="500" width="500" className="rounded-t-xl" />
        <div className="relative flex flex-col p-5 space-y-5">
          <h3 className="w-full text-2xl font-bold break-words">{nome}</h3>
          <p>{descricao}</p>
          <p className="text-lg">{formatMoney(parseInt(preco))}</p>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const query = `
  *[slug.current != null && categoria->slug.current != null]{
    "slug": categoria->slug.current,
    "productSlug": slug.current
  }
  `;

  let result = await client.fetch(query);

  const paths = result.map(product => {
    return {
      params: {
        categoria: product.slug,
        product: product.productSlug
      }
    };
  });

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps(params) {
  const slug = params.params.product;

  const query = `*[slug.current == "${slug}"]{
    _id,
    nome,
    "categoria": categoria->categoria,
    "imagem": imagem.asset->url,
    descricao,
    preco
}`;

  let result = await client.fetch(query);

  return {
    props: {
      data: result
    },
    revalidate: 10
  };
}

export default Product;
