import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';

import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <HomeCards
        isInversed
        slug="/pulseiras"
        title="Pulseiras"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio ab laboriosam, in optio dolore repellendus quos labore eius voluptas!"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1635974150/pulseiras-home_x2c6wt.jpg"
      />
      <HomeCards
        title="Colares & Chokers"
        slug="/colares"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio ab laboriosam, in optio dolore repellendus quos labore eius voluptas!"
        imgUrl="https://res.cloudinary.com/jpkiyoshi/image/upload/v1635978147/IMG_3189_ewwloz.jpg"
      />
    </Layout>
  );
}
