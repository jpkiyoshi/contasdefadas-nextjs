import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contas de Fadas | Miçangas e Acessórios</title>
        <meta
          property="og:title"
          content="Contas de Fadas | Miçangas e Acessórios"
        />
        <meta
          name="description"
          content="Trazemos a magia até você | Acessórios artesanais feitos com dedicação, cuidado e muito amor!"
        />
        <meta property="og:type" content="website" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://contasdefadas-nextjs.vercel.app/"
        />
        <meta
          property="og:title"
          content="Contas de Fadas | Miçangas e Acessórios"
        />
        <meta
          property="og:description"
          content="Trazemos a magia até você | Acessórios artesanais feitos com dedicação, cuidado e muito amor!"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/jpkiyoshi/image/upload/v1636410396/Site_-_Meta_tags_image_sbcswu.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://contasdefadas-nextjs.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Contas de Fadas | Miçangas e Acessórios"
        />
        <meta
          property="twitter:description"
          content="Trazemos a magia até você | Acessórios artesanais feitos com dedicação, cuidado e muito amor!"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/jpkiyoshi/image/upload/v1636410396/Site_-_Meta_tags_image_sbcswu.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Header />

      <main>{children}</main>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
