import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`${
        isVisible ? 'fixed flex justify-center items-center' : 'hidden'
      } bottom-6 lg:bottom-12 right-4  w-10 h-10 z-[6] bg-brand text-white text-lg rounded-full hover:bg-[#011640]  focus:outline-none`}
      onClick={scrollToTop}
    >
      <i className="lni lni-chevron-up"></i>
    </button>
  );
};

export default ScrollToTopButton;
