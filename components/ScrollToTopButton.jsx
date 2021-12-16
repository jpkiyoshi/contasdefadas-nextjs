import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [scrollButtonVisible, setScrollButtonVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 1000
      ? setScrollButtonVisible(true)
      : setScrollButtonVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, []);

  return (
    <div
      className={`
          ${scrollButtonVisible ? ' fixed' : ' hidden'} 
          w-12 h-12 bottom-5 right-5 p-2 bg-contas-pink-dark text-white font-extrabold cursor-pointer 
          flex justify-center items-center z-10`}
      onClick={() => scrollToTop()}
    >
      <span>/\</span>
    </div>
  );
};

export default ScrollToTopButton;
