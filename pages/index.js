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
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1648420725/Homepage-contas-de-fadas/Colar_myjjrk.png"
      />
      <HomeCards
        isInversed
        slug="pulseiras"
        title="Pulseiras"
        description="Monte mixes que combinem com a sua essência com as nossas pulseiras"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1648420725/Homepage-contas-de-fadas/Pulseiras_vgff3k.png"
      />
      <HomeCards
        slug="tornozeleiras"
        title="Tornozeleiras"
        description="Quer esbanjar charme também nos tornozelos? Use as nossas tornozeleiras"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1648420726/Homepage-contas-de-fadas/Tornozeleira_za8sei.png"
      />
      <HomeCards
        isInversed
        title="Brincos"
        slug="brincos"
        description="Destaque mais ainda a beleza de seu rosto usando os nossos brincos"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1648420726/Homepage-contas-de-fadas/Brincos_ch0esl.png"
      />
      <HomeCards
        slug="bolsas"
        title="Bolsas"
        description="Atribua mais estilo ao seu look com as nossas autênticas bolsas"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1648420725/Homepage-contas-de-fadas/Bolsas_nxufx3.png"
      />
      <HomeCards
        isInversed
        title="Phone Straps"
        slug="phonestraps"
        description="Além de evitarem a queda de celulares, os nossos phone straps também adicionam estilo e excentricidade"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1648420726/Homepage-contas-de-fadas/Strap_qdmd2n.png"
      />
      <HomeCards
        slug="chaveiros"
        title="Chaveiros"
        description="Use os nossos chaveiros como a sua imaginação mandar: em chaves de carro, agenda, celulares e tudo mais"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1648420725/Homepage-contas-de-fadas/Chaveiro_c1dony.png"
      />
      <Testimonials />
      <FAQ />
    </>
  );
}
