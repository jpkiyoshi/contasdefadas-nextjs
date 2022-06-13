import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

const FAQ = () => {
	return (
		<div className='w-full p-16 px-4 bg-contas-pink-light' id='FAQ'>
			<h2 className='text-5xl font-bold text-center text-contas-purple-dark mb-11'>
				Perguntas Frequentes
			</h2>
			<div className='w-full max-w-4xl p-2 mx-auto rounded bg-contas-purple-dark'>
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button className='flex justify-between w-full px-4 py-2 text-2xl font-medium text-left rounded-lg md:text-3xl bg-contas-pink-light text-contas-purple-dark hover:bg-contas-pink-light focus:outline-none focus-visible:ring focus-visible:contas-purple-dark focus-visible:ring-opacity-75'>
								<span>
									Vocês fazem acessórios personalizadas, tipo com nome
									etc?
								</span>
								<ChevronUpIcon
									className={`${
										open ? 'rotate-180' : ''
									} w-5 h-5 text-contas-purple-dark`}
								/>
							</Disclosure.Button>
							<Transition
								enter='transition duration-500 ease-out'
								enterFrom='scale-95 opacity-50'
								enterTo='scale-100 opacity-100'
								leave='transition duration-150 ease-out'
								leaveFrom='scale-100 opacity-100'
								leaveTo='scale-95 opacity-0'
							>
								<Disclosure.Panel className='px-4 pt-4 pb-2 text-xl md:text-2xl text-contas-pink-light'>
									Fazemos sim! O cliente nos fornece suas preferências
									básicas e aí montamos mediante 50% do valor total do
									que foi pedido.
								</Disclosure.Panel>
							</Transition>
						</>
					)}
				</Disclosure>
				<Disclosure as='div' className='mt-2'>
					{({ open }) => (
						<>
							<Disclosure.Button className='flex justify-between w-full px-4 py-2 text-2xl font-medium text-left rounded-lg md:text-3xl bg-contas-pink-light text-contas-purple-dark hover:bg-contas-pink-light focus:outline-none focus-visible:ring focus-visible:contas-purple-dark focus-visible:ring-opacity-75'>
								<span>Como faço meu pedido?</span>
								<ChevronUpIcon
									className={`${
										open ? 'rotate-180' : ''
									} w-5 h-5 text-contas-purple-dark`}
								/>
							</Disclosure.Button>
							<Transition
								enter='transition duration-500 ease-out'
								enterFrom='scale-95 opacity-50'
								enterTo='scale-100 opacity-100'
								leave='transition duration-150 ease-out'
								leaveFrom='scale-100 opacity-100'
								leaveTo='scale-95 opacity-0'
							>
								<Disclosure.Panel className='px-4 pt-4 pb-2 text-xl md:text-2xl text-contas-pink-light'>
									Ao clicar em algum item, você será redirecionado ao
									nosso WhatsApp para finalizar a compra.
								</Disclosure.Panel>
							</Transition>
						</>
					)}
				</Disclosure>
				<Disclosure as='div' className='mt-2'>
					{({ open }) => (
						<>
							<Disclosure.Button className='flex justify-between w-full px-4 py-2 text-2xl font-medium text-left rounded-lg md:text-3xl bg-contas-pink-light text-contas-purple-dark hover:bg-contas-pink-light focus:outline-none focus-visible:ring focus-visible:contas-purple-dark focus-visible:ring-opacity-75'>
								<span>Vocês enviam para todo o Brasil?</span>
								<ChevronUpIcon
									className={`${
										open ? 'rotate-180' : ''
									} w-5 h-5 text-contas-purple-dark`}
								/>
							</Disclosure.Button>
							<Transition
								enter='transition duration-500 ease-out'
								enterFrom='scale-95 opacity-50'
								enterTo='scale-100 opacity-100'
								leave='transition duration-150 ease-out'
								leaveFrom='scale-100 opacity-100'
								leaveTo='scale-95 opacity-0'
							>
								<Disclosure.Panel className='px-4 pt-4 pb-2 text-xl md:text-2xl text-contas-pink-light'>
									Sim! O frete é de acordo com a taxa dos correios e é
									pago pelo cliente.
								</Disclosure.Panel>
							</Transition>
						</>
					)}
				</Disclosure>
			</div>
		</div>
	);
};

export default FAQ;
