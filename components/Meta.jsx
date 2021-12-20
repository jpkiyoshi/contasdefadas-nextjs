import Head from 'next/head';

const Meta = ({
  title = 'Miçangas e Acessórios',
  description = 'Trazemos a magia até você | Acessórios artesanais feitos com dedicação, cuidado e muito amor!',
  image = 'https://res.cloudinary.com/jpkiyoshi/image/upload/v1636410396/Site_-_Meta_tags_image_sbcswu.png'
}) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Contas de Fadas | {title}</title>
      <meta property="og:title" content={`Contas de Fadas | ${title}`} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://contasdefadas.vercel.app/"
      />
      <meta property="og:title" content={`Contas de Fadas | ${title}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://contasdefadas.vercel.app/"
      />
      <meta property="twitter:title" content={`Contas de Fadas | ${title}`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
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
  );
};

export default Meta;
