import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import Meta from './Meta';
import Script from 'next/script';

export default function Layout({ title, children }) {
  return (
    <div>
      <Meta />
      <Script
        id="analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!== 0){fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,user:"kiyoshi33@gmail.com",utcoffset:"-3"}))};sessionStorage.setItem("_swa","1");`
        }}
      />
      <Header />

      <main>{children}</main>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
