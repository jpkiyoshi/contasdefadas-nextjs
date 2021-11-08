import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';

import client from '../../sanity/client';
import Layout from '../../components/Layout';
import { useState, useEffect } from 'react';

const Product = ({ productData }) => {
  const { name, slug, image, price } = productData;

  return (
    <div className='flex-col justify-center items-left border border-contas-pink-light rounded-xl hover:opacity-80'>
      <Link href={`/produtos/${name.toLowerCase().replace(' ', '-')}`}>
        <a>
          <Image src={image} height='500' width='500' />
          <div className='relative flex flex-col space-y-5 p-5'>
            <h3 className='text-2xl font-bold w-full break-words'>{name}</h3>
            <p className='text-lg'>R$ {price}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

const ProductShelf = ({products}) => {
  return (
    <section className='m-auto my-10 grid grid-cols-2 gap-10 lg:grid-cols-3'>
      {products.map(product => (
        <Product productData={product} />
      ))}
  </section>
  );
}


const Categoria = ({ data, params }) => {
  const router = useRouter();
  const { categoria } = router.query;

  // const productsPerPage = 6;
  // const [visibleProducts, setVisibleProducts] = useState(data.slice(0, productsPerPage));
  // const [seeMoreBtnVisible, setSeeMoreBtnVisible] = useState(true);

  // useEffect(() => {
  //   visibleProducts.length >= data.length ? setSeeMoreBtnVisible(false) : null;
  // }, [visibleProducts]);

  // const seeMoreHandler = (e) => {
  //   e.preventDefault;
  //   const numOfVisibleProducts = visibleProducts.length;
  //   const numOfTotalProducts = data.length;
  //   console.log(numOfVisibleProducts, numOfTotalProducts)
  //   console.log()
  //   if (numOfVisibleProducts < numOfTotalProducts ) {
  //     setVisibleProducts(visibleProducts.concat(data.slice(numOfVisibleProducts, numOfVisibleProducts + productsPerPage)));
  //   }
  // };

  return (
    <Layout>
      <div className='container m-auto flex flex-col items-center justify-center mt-10'>
        <h1 className='capitalize text-center text-4xl font-bold text-contas-pink-main mb-5'>{categoria}</h1>
        <ProductShelf products={data} />
        {/* {seeMoreBtnVisible ? <button onClick={seeMoreHandler}>VER MAIS</button> : null} */}
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
    ],
    fallback: 'blocking' //indicates the type of fallback
  };
};

export async function getStaticProps({ params }) {
  const category = params.categoria;

  const query = `*[_type == "acessorio" && categoria._ref in *[slug.current == "${category}"]._id] | order(_createdAt) {
    _id,
    "name": nome,
    "category": categoria->categoria,
    "slug": categoria->slug.current,
    "image": imagem.asset->url,
    "description": descricao,
    "price": preco,
  }`;

  let result = await client.fetch(query);

  // BEGIN for testing
  // const mock = []
  // for (let i = 0; i <= 10; i++) {
  //   mock.push(result[0]);
  //   mock.push(result[1]);
  // }
  // result = mock;
  // console.log(result)
  // END for testing

  return {
    props: {
      data: result
    }
  };
}

export default Categoria;
