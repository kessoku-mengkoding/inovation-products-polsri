import { ButtonPrimary } from "./components/Button";
import { useEffect, useState } from "react";
import { Footer } from "./components/footer";
import Filter from "./components/Filter";
import { NavbarSecondary } from "./components/Navbar";
import { Link } from "react-router-dom";
import ScrollToTopButton from "./components/ScrollToTopButton";

function Products() {
  const [products, setProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const toggleFilterOpen = () => {
    setIsFilterOpen((prevState) => !prevState);
  }

  useEffect(() => {
    fetch("https://techio-ternak-skp.netlify.app/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const [filter, setFilter] = useState("");

  const applyFilter = (selectedFilter) => {
    // Apply filter logic based on the selected filter (e.g., update the product list)
    setFilter(selectedFilter);
  };

  return (
    <>
      <NavbarSecondary />
      <ScrollToTopButton />

      {/* create filter for mobile that contain same as filter in desktop */}
      <div className={`${isFilterOpen ? "bottom-0 " : "bottom-[-500px]"}  overflow-y-scroll border border-gray-300 bg-white z-[50] left-0 transition-all duration-300 fixed lg:hidden h-[450px] w-full`} >
        <div className="w-full   py-8">
          <div className="flex justify-between items-center px-4 lg:px-[80px] py-4">
            <h4 className="text-xl font-semibold">Filter</h4>
            <button onClick={toggleFilterOpen} className="border border-gray-400 rounded-[4px] flex justify-center items-center w-[40px] h-[40px] text-second focus:outline-none hover:border-brand">
              <i className="lni lni-close"></i>
            </button>
            </div>
            <div className="flex flex-col gap-4 px-4 lg:px-[80px]">
              <Filter applyFilter={applyFilter} />
            </div>
          </div>
        </div>

      <section className="flex px-4 lg:px-[80px] justify-between gap-[20px] mt-[120px] max-w-[1360px] mx-auto">
        <div className="lg:block hidden w-[250px]">
          <h4 className="text-xl font-semibold mt-3">Filter</h4>
          <div className="flex flex-col gap-4 mt-8">
            <Filter applyFilter={applyFilter} />
          </div>
        </div>
        <div className="w-full">
          <div className="hidden lg:flex items-end justify-between w-full  mb-8">
            <h3 className="text-2xl font-semibold">Produk Kami</h3>
            <select
              name="sort"
              id="sort"
              className="border cursor-pointer text-sm border-gray-400 rounded-[4px] px-4 py-2 text-second focus:outline-none focus:border-brand"
            >
              <option className="text-[10px] lg:text-sm" value="terbaru">Terbaru</option>
              <option className="text-[10px] lg:text-sm" value="terpopuler">Terpopuler</option>
              <option className="text-[10px] lg:text-sm" value="termurah">Termurah</option>
              <option className="text-[10px] lg:text-sm" value="termahal">Termahal</option>
            </select>
          </div>
          <div className="block lg:hidden mb-8">
            <h3 className="text-xl font-semibold mb-3">Produk Kami</h3>
            <div className="flex items-center gap-2">
            <select
              name="sort"
              id="sort"
              className="border cursor-pointer text-xs border-gray-400 rounded-[4px] px-3 py-2 text-second focus:outline-none focus:border-brand"
            >
              <option className="text-[10px] lg:text-sm" value="terbaru">Terbaru</option>
              <option className="text-[10px] lg:text-sm" value="terpopuler">Terpopuler</option>
              <option className="text-[10px] lg:text-sm" value="termurah">Termurah</option>
              <option className="text-[10px] lg:text-sm" value="termahal">Termahal</option>
            </select>
            {/* filter */}
              <button onClick={toggleFilterOpen} className="border border-gray-400 rounded-[4px] flex justify-center items-center w-[40px] h-[40px] text-second focus:outline-none hover:border-brand">
                <i className="lni lni-radio-button"></i>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[40px] gap-x-[20px] w-full">
            {products.map((product) => (
              <Link to="/product">
                <div
                  data-aos="zoom-in"
                  data-aos-delay={`${product.id * 50}`}
                  key={product.name}
                >
                  <div className="w-full h-full rounded-sm shadow-lg">
                    <div className="overflow-hidden relative min-h-[240px] min-w-full bg-brand bg-center bg-opacity-5">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-[225px] m-auto object-position"
                      />
                    </div>
                    <div className="p-[20px] flex flex-col gap-[10px] items-center">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <h3 className="text-xl font-semibold text-brand">
                        {product.price}
                      </h3>
                      <div className="flex gap-2 mb-2">
                        {Array.from({ length: Math.floor(product.rating) }).map(
                          (_, index) => (
                            <i
                              key={index}
                              className="lni lni-star-fill text-yellow-500"
                            ></i>
                          )
                        )}
                      </div>
                      <Link to="/cart">
                        <ButtonPrimary>Tambah ke keranjang</ButtonPrimary>
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              <button
                className="border border-gray-400 rounded-[4px] flex justify-center items-center w-[40px] h-[40px] text-second focus:outline-none hover:border-brand disabled:opacity-50 disabled:cursor-not-allowed"
                disabled
              >
                <i className="lni lni-chevron-left"></i>
              </button>
              <button className="border  rounded-[4px] flex justify-center items-center w-[40px] h-[40px] text-second focus:outline-none bg-brand text-white border-brand">
                1
              </button>
              <button className="border border-gray-400 rounded-[4px] flex justify-center items-center w-[40px] h-[40px] text-second focus:outline-none hover:border-brand">
                2
              </button>
              <button className="border border-gray-400 rounded-[4px] flex justify-center items-center w-[40px] h-[40px] text-second focus:outline-none hover:border-brand">
                3
              </button>
              <button className="border border-gray-400 rounded-[4px] flex justify-center items-center w-[40px] h-[40px] text-second focus:outline-none hover:border-brand">
                <i className="lni lni-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Products;
