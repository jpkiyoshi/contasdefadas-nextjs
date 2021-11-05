import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

const FAQ = () => {
  return (
    <div className="w-full p-16 px-4 bg-contas-pink-light">
      <h2 className="text-5xl font-bold text-center text-contas-purple-dark mb-11">
        Perguntas Frequentes
      </h2>
      <div className="w-full max-w-4xl p-2 mx-auto rounded bg-contas-purple-dark">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-3xl font-medium text-left rounded-lg bg-contas-pink-light text-contas-purple-dark hover:bg-contas-pink-light focus:outline-none focus-visible:ring focus-visible:contas-purple-dark focus-visible:ring-opacity-75">
                <span>Lorem ipsum dolor sit amet?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-contas-purple-dark`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-95 opacity-50"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-150 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-2xl text-contas-pink-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  nostrum repellat officia dolor fugit voluptatum ipsum minima
                  assumenda quo magnam.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-3xl font-medium text-left rounded-lg bg-contas-pink-light text-contas-purple-dark hover:bg-contas-pink-light focus:outline-none focus-visible:ring focus-visible:contas-purple-dark focus-visible:ring-opacity-75">
                <span>Lorem ipsum dolor sit amet?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-contas-purple-dark`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-95 opacity-50"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-150 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-2xl text-contas-pink-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  nostrum repellat officia dolor fugit voluptatum ipsum minima
                  assumenda quo magnam.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-3xl font-medium text-left rounded-lg bg-contas-pink-light text-contas-purple-dark hover:bg-contas-pink-light focus:outline-none focus-visible:ring focus-visible:contas-purple-dark focus-visible:ring-opacity-75">
                <span>Lorem ipsum dolor sit amet?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-contas-purple-dark`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-95 opacity-50"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-150 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-2xl text-contas-pink-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  nostrum repellat officia dolor fugit voluptatum ipsum minima
                  assumenda quo magnam.
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
