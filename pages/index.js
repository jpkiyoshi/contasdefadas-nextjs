import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Meta from '../components/Meta';

export default function Home() {
  return (
    <>
      <Meta />
      <Hero />
      <HomeCards
        title="Colares & Chokers"
        slug="colares"
        description="Adicione mais estilo e dê versatilidade ao seu look com nossos colares e chokers"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1639595551/fotos-home-page-contas-de-fadas/colares_bkdq3f.png"
      />
      <HomeCards
        isInversed
        slug="pulseiras"
        title="Pulseiras"
        description="Monte mixes que combinem com a sua essência com as nossas pulseiras"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1639595551/fotos-home-page-contas-de-fadas/pulseiras_kgqeyq.png"
      />
      <HomeCards
        slug="tornozeleiras"
        title="Tornozeleiras"
        description="Quer esbanjar charme também nos tornozelos? Use as nossas tornozeleiras"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1639595552/fotos-home-page-contas-de-fadas/tornozeleiras_xlix9z.png"
      />
      <HomeCards
        isInversed
        title="Brincos"
        slug="brincos"
        description="Destaque mais ainda a beleza de seu rosto usando os nossos brincos"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1639595553/fotos-home-page-contas-de-fadas/brincos_bun08q.png"
      />
      <HomeCards
        slug="aneis"
        title="Anéis"
        description="Adorne os seus dedos com muito mais estilo usando os nossos anéis"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1639595552/fotos-home-page-contas-de-fadas/aneis_odghgi.png"
      />
      <HomeCards
        isInversed
        title="Phone Straps"
        slug="phonestraps"
        description="Além de evitarem a queda de celulares, os nossos phone straps também adicionam estilo e excentricidade"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1639595551/fotos-home-page-contas-de-fadas/phonestraps_x954n7.png"
      />
      <HomeCards
        slug="chaveiros"
        title="Chaveiros"
        description="Use os nossos chaveiros como a sua imaginação mandar: em chaves de carro, agenda, celulares e tudo mais"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1639595552/fotos-home-page-contas-de-fadas/chaveiros_gsbxpa.png"
      />
      <Testimonials />
      <FAQ />
    </>
  );
}
