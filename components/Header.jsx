import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import CartSummary from './CartSummary';

const Logo = ({ navbarOpen, setNavbarOpen }) => (
	<Image
		src='https://res.cloudinary.com/jpkiyoshi/image/upload/v1636059714/Site_-_Header_-_Logo_bg4lh8.png'
		width='106'
		height='60'
		responsive='true'
		alt='Contas de Fadas logo'
		onClick={() => setNavbarOpen(false)}
	/>
);

const NavBarLink = ({ linkName, href, navbarOpen, setNavbarOpen }) => (
	<Link href={href} locale={false}>
		<a
			className='flex items-center px-3 py-2 leading-snug text-contas-pink-light hover:text-contas-pink-dark'
			onClick={() => setNavbarOpen(!navbarOpen)}
		>
			<span className='ml-2'>{linkName}</span>
		</a>
	</Link>
);

const Header = () => {
	const { cartCount } = useShoppingCart();

	const [navbarOpen, setNavbarOpen] = useState(false);
	const [showCart, setShowCart] = useState(false);

	return (
		<header className='sticky top-0 z-50 border-b bg-contas-purple-dark '>
			<nav>
				<div className='container flex flex-wrap items-center justify-between m-auto lg:max-w-full lg:w-11/12 lg:flex-nowrap'>
					<div className='relative flex justify-between w-full py-1 lg:w-auto lg:static lg:block lg:justify-start'>
						<Link href='/'>
							<a className='ml-auto mr-auto'>
								<Logo
									navbarOpen={navbarOpen}
									setNavbarOpen={setNavbarOpen}
								/>
							</a>
						</Link>
						<button
							className='absolute right-0 block px-3 py-1 text-xl leading-none border border-transparent border-solid rounded outline-none cursor-pointer top-3 lg:hidden focus:outline-none'
							type='button'
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<svg
								className='fill-current text-contas-pink-light h-7 w-7'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<title>Menu</title>
								<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
							</svg>
						</button>
					</div>
					<div
						className={`lg:flex flex-grow items-center ${
							navbarOpen ? ' flex' : ' hidden'
						}`}
					>
						<ul className='flex flex-col text-lg font-medium list-none lg:flex-row md:text-sm lg:text-sm xl:text-base lg:ml-auto lg:items-center'>
							<li>
								<NavBarLink
									linkName='Cintos'
									href='/acessorios/cintos'
									setNavbarOpen={setNavbarOpen}
									navbarOpen={navbarOpen}
								/>
							</li>
							<li>
								<NavBarLink
									linkName='Colares / Chokers'
									href='/acessorios/colares'
									setNavbarOpen={setNavbarOpen}
									navbarOpen={navbarOpen}
								/>
							</li>
							<li>
								<NavBarLink
									linkName='Pulseiras'
									href='/acessorios/pulseiras'
									setNavbarOpen={setNavbarOpen}
									navbarOpen={navbarOpen}
								/>
							</li>
							<li>
								<NavBarLink
									linkName='Tornozeleiras'
									href='/acessorios/tornozeleiras'
									setNavbarOpen={setNavbarOpen}
									navbarOpen={navbarOpen}
								/>
							</li>
							<li>
								<NavBarLink
									linkName='Brincos'
									href='/acessorios/brincos'
									setNavbarOpen={setNavbarOpen}
									navbarOpen={navbarOpen}
								/>
							</li>
							<li>
								<NavBarLink
									linkName='Bolsas'
									href='/acessorios/bolsas'
									setNavbarOpen={setNavbarOpen}
									navbarOpen={navbarOpen}
								/>
							</li>
							<li>
								<NavBarLink
									linkName='Phone Straps'
									href='/acessorios/phonestraps'
									setNavbarOpen={setNavbarOpen}
									navbarOpen={navbarOpen}
								/>
							</li>
							<li>
								<NavBarLink
									linkName='Chaveiros'
									href='/acessorios/chaveiros'
									setNavbarOpen={setNavbarOpen}
									navbarOpen={navbarOpen}
								/>
							</li>
							<button onClick={() => setShowCart(!showCart)}>
								<li className='text-white'>{cartCount}</li>
							</button>
						</ul>
					</div>
				</div>
			</nav>
			<div className='flex justify-end text-white'>
				{showCart && <CartSummary />}
			</div>
		</header>
	);
};

export default Header;
