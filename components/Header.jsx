import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Logo = () => (
  <Image
    src="https://res.cloudinary.com/jpkiyoshi/image/upload/v1636059714/Site_-_Header_-_Logo_bg4lh8.png"
    width="106"
    height="60"
    responsive="true"
    alt="Contas de Fadas logo"
  />
);

const NavBarLink = ({ linkName, href }) => (
  <Link href={href} locale={false}>
    <a className="flex items-center px-3 py-2 leading-snug text-contas-pink-main hover:text-contas-pink-dark">
      <span className="ml-2">{linkName}</span>
    </a>
  </Link>
);

const Header = () => {
  const router = useRouter();

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-contas-purple-dark ">
      <nav>
        <div className="container flex flex-wrap items-center justify-between m-auto lg:max-w-full lg:w-11/12 lg:flex-nowrap">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="ml-auto mr-auto">
                <Logo />
              </a>
            </Link>
            <button
              className="absolute right-0 block px-3 py-1 text-xl leading-none border border-transparent border-solid rounded outline-none cursor-pointer top-3 lg:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className="fill-current text-contas-pink-light h-7 w-7"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center ${
              navbarOpen ? ' flex' : ' hidden'
            }`}
          >
            <ul className="flex flex-col text-lg list-none lg:flex-row md:text-sm lg:text-sm xl:text-base lg:ml-auto lg:items-center">
              <li>
                <NavBarLink linkName="Pulseiras" href="/acessorios/pulseiras" />
              </li>
              <li>
                <NavBarLink
                  linkName="Colares / Chokers"
                  href="/acessorios/colares"
                />
              </li>
              <li>
                <NavBarLink linkName="Brincos" href="/acessorios/brincos" />
              </li>
              <li>
                <NavBarLink
                  linkName="Tornozeleiras"
                  href="/acessorios/tornozeleiras"
                />
              </li>
              <li>
                <NavBarLink linkName="Anéis" href="/acessorios/aneis" />
              </li>
              <li>
                <NavBarLink linkName="Chaveiros" href="/acessorios/chaveiros" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
