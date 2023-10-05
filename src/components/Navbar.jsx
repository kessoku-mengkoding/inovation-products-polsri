import { useState } from "react";
import { ButtonSecondaryS } from "./Button";
import { useEffect } from "react";


export function Navbar() {
  const [scrolled,setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <>
   
    <nav className={`transition-all duration-300 z-[7] fixed top-0 left-0 w-full px-[80px] bg-white flex justify-between items-center ${scrolled ? 'py-[15px] shadow-lg' : 'py-[20px]'}`}>
      <div>
        <h4 className="text-2xl text-brand tracking-[2px]">Techio</h4>
      </div>
      <div className="flex gap-4 items-center nav-link">
        <a href="#" className="uppercase relative text-sm">Home</a>
        <a href="#" className="uppercase relative text-sm">Product</a>
        <a href="#" className="uppercase relative text-sm">About</a>
        <a href="#" className="uppercase relative text-sm">Contact</a>
      </div>
      <div className="flex gap-4 text-lg items-center">
      <i className="lni lni-search-alt cursor-pointer hover:text-brand"></i>
      <i className="lni lni-cart-full cursor-pointer hover:text-brand"></i>
      
      <ButtonSecondaryS>
        Login
      </ButtonSecondaryS>
      </div>
    </nav>
    </>
  )
}