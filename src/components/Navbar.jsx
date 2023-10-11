import { useState } from "react";
import { ButtonSecondaryS } from "./Button";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen((prevState) => !prevState);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
      <nav
        className={`transition-all duration-300 z-[7] fixed top-0 left-0 w-full px-[80px] bg-white flex justify-between items-center ${
          scrolled ? "py-[15px] shadow-lg" : "py-[20px]"
        }`}
      >
        <a href="#">
          <div className="flex items-center gap-2">
            <img
              src="./src/assets/logo.png"
              alt="logo"
              className="w-[26px] h-[26px] object-contain"
            />
            <h4 className="text-2xl text-brand tracking-[2px]">Techio</h4>
          </div>
        </a>
        <div className="flex gap-4 items-center nav-link">
          <a href="#" className="uppercase relative text-sm">
            Home
          </a>
          <a href="#product" className="uppercase relative text-sm">
            Product
          </a>
          <a href="#about" className="uppercase relative text-sm">
            About
          </a>
        </div>
        <div className="flex gap-4 text-lg items-center">
          <i
            onClick={toggleSearch}
            className="lni lni-search-alt cursor-pointer hover:text-brand"
          ></i>
          <Link to="/cart" className="flex">
            <i className="lni lni-cart-full cursor-pointer hover:text-brand"></i>
          </Link>

          <Link to="/login">
            <ButtonSecondaryS>Login</ButtonSecondaryS>
          </Link>
        </div>
      </nav>

      <div
        className={`transition-all duration-300 ${
          isSearchOpen ? " top-[85px]" : "top-[-65px]"
        } fixed  right-[80px] h-max w-[500px] p-4 bg-white border z-[6]  rounded-[4px] shadow-lg`}
      >
        <div className="flex items-end justify-between flex-col-reverse gap-4">
          {/* Search input */}
          <input
            type="text"
            placeholder="Cari produk yang kamu inginkan.."
            className="border border-gray-400 rounded-[4px] placeholder-gray-600 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
          />
          {/* Close button */}
          <button
            onClick={toggleSearch}
            className="text-base text-brand hover:text-gray-400 focus:outline-none"
          >
            <i className="lni lni-close"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export function NavbarSecondary() {
  const [scrolled, setScrolled] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen((prevState) => !prevState);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
      <nav
        className={`transition-all duration-300 z-[7] fixed top-0 left-0 w-full px-[80px] bg-white flex justify-between items-center border-b  ${
          scrolled ? "py-[15px] shadow-lg" : "py-[20px]"
        }`}
      >
        <Link to="/">
          <div className="flex items-center gap-2">
            <img
              src="./src/assets/logo.png"
              alt="logo"
              className="w-[26px] h-[26px] object-contain"
            />
            <h4 className="text-2xl text-brand tracking-[2px]">Techio</h4>
          </div>
        </Link>
        <div className="flex gap-4 items-center nav-link">
          <a href="/" className="uppercase relative text-sm">
            Home
          </a>
          <a href="/products" className="uppercase relative text-sm">
            Product
          </a>
          <a href="/about" className="uppercase relative text-sm">
            About
          </a>
        </div>
        <div className="flex gap-4 text-lg items-center">
          <i
            onClick={toggleSearch}
            className="lni lni-search-alt cursor-pointer hover:text-brand"
          ></i>
          <Link to="/cart" className="flex">
            <i className="lni lni-cart-full cursor-pointer hover:text-brand"></i>
          </Link>

          <Link to="/login">
            <ButtonSecondaryS>Login</ButtonSecondaryS>
          </Link>
        </div>
      </nav>

      <div
        className={`transition-all duration-300 ${
          isSearchOpen ? " top-[85px]" : "top-[-65px]"
        } fixed  right-[80px] h-max w-[500px] p-4 bg-white border z-[6]  rounded-[4px] shadow-lg`}
      >
        <div className="flex items-end justify-between flex-col-reverse gap-4">
          {/* Search input */}
          <input
            type="text"
            placeholder="Cari produk yang kamu inginkan.."
            className="border border-gray-400 rounded-[4px] placeholder-gray-600 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
          />
          {/* Close button */}
          <button
            onClick={toggleSearch}
            className="text-base text-brand hover:text-gray-400 focus:outline-none"
          >
            <i className="lni lni-close"></i>
          </button>
        </div>
      </div>
    </>
  );
}
