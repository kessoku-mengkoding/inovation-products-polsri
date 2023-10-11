import { ButtonPrimary } from "./components/Button";
import { useEffect, useState } from "react";
import { Footer } from "./components/footer";
import Filter from "./components/Filter";
import { NavbarSecondary } from "./components/Navbar";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/src/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const [filter, setFilter] = useState('');

  const applyFilter = (selectedFilter) => {
    // Apply filter logic based on the selected filter (e.g., update the product list)
    setFilter(selectedFilter);
  };

  return (
    <>
      <NavbarSecondary />
      <section className="flex px-[80px] justify-between gap-[20px] mt-[120px]">
        <div className="w-[250px]">
          <h4 className="text-xl font-semibold mt-3">Filter</h4>
          <div className="flex flex-col gap-4 mt-8">
            <Filter  applyFilter={applyFilter} />
          </div>
        </div>
        <div className="w-full">
        <div className="flex items-end justify-between w-full  mb-8">
        <h3 className="text-2xl font-semibold">Produk Kami</h3>
          <select
            name="sort"
            id="sort"
            className="border cursor-pointer text-sm border-gray-400 rounded-[4px] px-4 py-2 text-second focus:outline-none focus:border-brand"
          >
            <option value="terbaru">Terbaru</option>
            <option value="terpopuler">Terpopuler</option>
            <option value="termurah">Termurah</option>
            <option value="termahal">Termahal</option>
          </select>
          </div>
        <div className="grid grid-cols-3 gap-y-[40px] gap-x-[20px] w-full">
          {products.map((product) => (
            <div
              data-aos="zoom-in"
              data-aos-delay={`${product.id * 50}`}
              key={product.id}
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
                  <ButtonPrimary>Tambah ke keranjang</ButtonPrimary>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            <button className="border border-gray-400 rounded-[4px] flex justify-center items-center w-[40px] h-[40px] text-second focus:outline-none hover:border-brand disabled:opacity-50 disabled:cursor-not-allowed" disabled>
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
