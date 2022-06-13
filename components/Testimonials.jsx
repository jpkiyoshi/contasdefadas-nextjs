import Image from 'next/image';

const Testimonials = () => {
	return (
		<section className='flex items-center justify-center py-20 bg-contas-purple-dark min-w-screen'>
			<div className='px-8 bg-contas-purple-dark'>
				<div className='container flex flex-col items-start mx-auto lg:items-center text-contas-pink-light '>
					<h2 className='relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							className='absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block'
							viewBox='0 0 975.036 975.036'
						>
							<path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
						</svg>
						O que nossos clientes dizem
					</h2>
					<div className='block w-full h-0.5 max-w-lg mt-6 bg-pink-50 rounded-full'></div>

					<div className='items-center justify-center w-full mt-12 mb-4 lg:flex'>
						<div className='flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0'>
							<div className='flex items-center justify-center'>
								<div className='relative w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full'>
									<Image
										src='https://res.cloudinary.com/jpkiyoshi/image/upload/c_scale,h_60/v1636129827/Instagram_-_Foto_de_Perfil_-_Logo_v1_zr1ndo.png'
										layout='fill'
										alt='Logo'
										objectFit='cover'
									/>
								</div>
								<div className='flex flex-col items-start justify-center'>
									<h4 className='font-bold text-contas-pink-light '>
										Mateus Fernando
									</h4>
									<p className='text-contas-pink-light/70'>Cliente</p>
								</div>
							</div>
							<blockquote className='mt-8 text-xl text-contas-pink-light/80'>
								&quot;Amamos! Minha avó ficou apaixonada no phone strap e
								eu tô usando minha pulseira todo dia.&quot;
							</blockquote>
						</div>
						<div className='flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200 lg:self-start '>
							<div className='flex items-center justify-center'>
								<div className='relative w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full'>
									<Image
										src='https://res.cloudinary.com/jpkiyoshi/image/upload/c_scale,h_60/v1636129827/Instagram_-_Foto_de_Perfil_-_Logo_v1_zr1ndo.png'
										layout='fill'
										alt='Logo'
										objectFit='cover'
									/>
								</div>
								<div className='flex flex-col items-start justify-center'>
									<h4 className='font-bold text-contas-pink-light '>
										Beatriz Guerra
									</h4>
									<p className='text-contas-pink-light/70'>Cliente</p>
								</div>
							</div>
							<blockquote className='mt-8 text-xl text-contas-pink-light/80'>
								&quot;Amei! As chokers ficaram lindas. Você arrasa!&quot;
							</blockquote>
						</div>
						<div className='flex flex-col items-start justify-start w-full h-auto lg:w-1/3 lg:self-start'>
							<div className='flex items-center justify-center'>
								<div className='relative w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full'>
									<Image
										src='https://res.cloudinary.com/jpkiyoshi/image/upload/c_scale,h_60/v1636129827/Instagram_-_Foto_de_Perfil_-_Logo_v1_zr1ndo.png'
										layout='fill'
										alt='Logo'
										objectFit='cover'
									/>
								</div>
								<div className='flex flex-col items-start justify-center'>
									<h4 className='font-bold text-contas-pink-light '>
										Letícia Campos
									</h4>
									<p className='text-contas-pink-light/70'>Cliente</p>
								</div>
							</div>
							<blockquote className='mt-8 text-xl text-contas-pink-light/80'>
								&quot;Eu amei o phone strap! Facilita a vida.&quot;
							</blockquote>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
