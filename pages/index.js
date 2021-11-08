import Layout from '../components/Layout';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <HomeCards
        isInversed
        slug="colares"
        title="Colares & Chokers"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio ab laboriosam, in optio dolore repellendus quos labore eius voluptas!"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1635978147/IMG_3189_ewwloz.jpg"
      />
      <HomeCards
        title="Pulseiras"
        slug="pulseiras"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio ab laboriosam, in optio dolore repellendus quos labore eius voluptas!"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1635974150/pulseiras-home_x2c6wt.jpg"
      />
      <HomeCards
        isInversed
        slug="tornozeleiras"
        title="Tornozeleiras"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio ab laboriosam, in optio dolore repellendus quos labore eius voluptas!"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1635974150/pulseiras-home_x2c6wt.jpg"
      />
      <HomeCards
        title="Brincos"
        slug="brincos"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio ab laboriosam, in optio dolore repellendus quos labore eius voluptas!"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1635978147/IMG_3189_ewwloz.jpg"
      />
      <HomeCards
        isInversed
        slug="aneis"
        title="Anéis"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio ab laboriosam, in optio dolore repellendus quos labore eius voluptas!"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1635974150/pulseiras-home_x2c6wt.jpg"
      />
      <HomeCards
        title="Chaveiros"
        slug="chaveiros"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio ab laboriosam, in optio dolore repellendus quos labore eius voluptas!"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1635978147/IMG_3189_ewwloz.jpg"
      />
      <Testimonials />
      <FAQ />
    </Layout>
  );
}
