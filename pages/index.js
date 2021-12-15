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
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio ab laboriosam, in optio dolore repellendus quos labore eius voluptas!"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1639595551/fotos-home-page-contas-de-fadas/colares_bkdq3f.png"
      />
      <HomeCards
        isInversed
        slug="pulseiras"
        title="Pulseiras"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio ab laboriosam, in optio dolore repellendus quos labore eius voluptas!"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1639595551/fotos-home-page-contas-de-fadas/pulseiras_kgqeyq.png"
      />
      <HomeCards
        slug="tornozeleiras"
        title="Tornozeleiras"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio ab laboriosam, in optio dolore repellendus quos labore eius voluptas!"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1639595552/fotos-home-page-contas-de-fadas/tornozeleiras_xlix9z.png"
      />
      <HomeCards
        isInversed
        title="Brincos"
        slug="brincos"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio ab laboriosam, in optio dolore repellendus quos labore eius voluptas!"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1639595553/fotos-home-page-contas-de-fadas/brincos_bun08q.png"
      />
      <HomeCards
        slug="aneis"
        title="Anéis"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio ab laboriosam, in optio dolore repellendus quos labore eius voluptas!"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1639595552/fotos-home-page-contas-de-fadas/aneis_odghgi.png"
      />
      <HomeCards
        isInversed
        title="Phone Straps"
        slug="phonestraps"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio ab laboriosam, in optio dolore repellendus quos labore eius voluptas!"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1639595551/fotos-home-page-contas-de-fadas/phonestraps_x954n7.png"
      />
      <HomeCards
        slug="chaveiros"
        title="Chaveiros"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio ab laboriosam, in optio dolore repellendus quos labore eius voluptas!"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1639595552/fotos-home-page-contas-de-fadas/chaveiros_gsbxpa.png"
      />
      <Testimonials />
      <FAQ />
    </>
  );
}
