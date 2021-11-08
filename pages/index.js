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
        title="Colares & Chokers"
        slug="colares"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio ab laboriosam, in optio dolore repellendus quos labore eius voluptas!"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1635978147/IMG_3189_ewwloz.jpg"
      />
      <HomeCards
        isInversed
        slug="pulseiras"
        title="Pulseiras"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio ab laboriosam, in optio dolore repellendus quos labore eius voluptas!"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1635974150/pulseiras-home_x2c6wt.jpg"
      />
      <HomeCards
        slug="tornozeleiras"
        title="Tornozeleiras"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio ab laboriosam, in optio dolore repellendus quos labore eius voluptas!"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1635974150/pulseiras-home_x2c6wt.jpg"
      />
      <HomeCards
        isInversed
        title="Brincos"
        slug="brincos"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio ab laboriosam, in optio dolore repellendus quos labore eius voluptas!"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1635978147/IMG_3189_ewwloz.jpg"
      />
      <HomeCards
        slug="aneis"
        title="Anéis"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio ab laboriosam, in optio dolore repellendus quos labore eius voluptas!"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1635974150/pulseiras-home_x2c6wt.jpg"
      />
      <HomeCards
        isInversed
        title="Phone Straps"
        slug="phonestraps"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio ab laboriosam, in optio dolore repellendus quos labore eius voluptas!"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1635978147/IMG_3189_ewwloz.jpg"
      />
      <HomeCards
        slug="chaveiros"
        title="Chaveiros"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio ab laboriosam, in optio dolore repellendus quos labore eius voluptas!"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1635974150/pulseiras-home_x2c6wt.jpg"
      />
      <Testimonials />
      <FAQ />
    </Layout>
  );
}
