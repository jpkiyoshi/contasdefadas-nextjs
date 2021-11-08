import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import client from '../../../sanity/client';

const Product = ({ productData }) => {
  const { name, image, slug, price, productSlug } = productData;

  return (
    <div className="flex-col justify-center border items-left border-contas-pink-light rounded-xl hover:opacity-80">
      <Link href={`/acessorios/${slug}/${productSlug}`}>
        <a>
          <Image src={image} height="500" width="500" />
          <div className="relative flex flex-col p-5 space-y-5">
            <h3 className="w-full text-2xl font-bold break-words">{name}</h3>
            <p className="text-lg">R$ {price}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

const ProductShelf = ({ products }) => {
  return (
    <section className="grid grid-cols-2 gap-10 m-auto my-10 lg:grid-cols-3">
      {products.map(product => (
        <Product key={product._id} productData={product} />
      ))}
    </section>
  );
};

const Categoria = ({ data }) => {
  const router = useRouter();
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
    <div className="container flex flex-col items-center justify-center m-auto mt-10">
      <h1 className="mb-5 text-4xl font-bold text-center capitalize text-contas-pink-main">
        {data[0]?.category}
      </h1>
      <ProductShelf products={data} />
      {/* {seeMoreBtnVisible ? <button onClick={seeMoreHandler}>VER MAIS</button> : null} */}
    </div>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { categoria: 'colares' } },
      { params: { categoria: 'pulseiras' } },
      { params: { categoria: 'tornozeleiras' } },
      { params: { categoria: 'brincos' } },
      { params: { categoria: 'aneis' } },
      { params: { categoria: 'phonestraps' } },
      { params: { categoria: 'chaveiros' } }
    ],
    fallback: false //indicates the type of fallback
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
    "productSlug": slug.current
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
    },
    revalidate: 10
  };
}

export default Categoria;
