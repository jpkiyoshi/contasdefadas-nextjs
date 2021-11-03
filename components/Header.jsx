import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";


const Logo = () => (
  <div>
    <Link href="/">
      {/* <img src="/images/logo.svg" className="pr-2 w-52 lg:w-42 xl:w-64" /> */}
      <span>LOGO HERE</span>
    </Link>
  </div>
)

const NavBarLink = ({ linkName, href, }) => (
  <Link href={href} locale={false}>
    <a className="px-3 py-2 flex items-center leading-snug text-contas-pink-main hover:text-contas-pink-dark">
      <span className="ml-2">{linkName}</span>
    </a>
  </Link>
)

const Header = () => {
  const router = useRouter();

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <header className='sticky top-0 bg-white z-50 border-b '>
      <nav className="relative flex flex-wrap items-center justify-between">
        <div className="container m-auto flex items-center justify-between flex-wrap lg:max-w-full lg:w-11/12 lg:flex-nowrap">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href='/'>
              <a className="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase">
                <Logo />
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <svg className="fill-current h-7 w-7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
            </button>
          </div>
          <div
            className={
              `lg:flex flex-grow items-center ${(navbarOpen ? " flex" : " hidden")}`
            }>
            <ul className="flex flex-col lg:flex-row list-none text-lg md:text-sm lg:text-sm xl:text-base lg:ml-auto lg:items-center">
              <li><NavBarLink linkName='Pulseiras' href='/acessorios/pulseiras' /></li>
              <li><NavBarLink linkName='Colares / Chokers' href='/acessorios/colares' /></li>
              <li><NavBarLink linkName='Brincos' href='/acessorios/brincos' /></li>
              <li><NavBarLink linkName='Tornozeleiras' href='/acessorios/tornozeleiras' /></li>
              <li><NavBarLink linkName='Anéis' href='/acessorios/aneis' /></li>
              <li><NavBarLink linkName='Chaveiros' href='/acessorios/chaveiros' /></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;