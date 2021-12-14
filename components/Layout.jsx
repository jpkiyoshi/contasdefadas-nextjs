import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import Meta from './Meta';

export default function Layout({ title, children }) {
  return (
    <div>
      <Meta />

      <Header />

      <main>{children}</main>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
