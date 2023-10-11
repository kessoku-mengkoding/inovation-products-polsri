import { NavbarSecondary } from "./components/Navbar";
import { useState } from "react";
import { Footer } from "./components/footer";
import { Link } from "react-router-dom";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ButtonPrimary } from "./components/Button";

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active-slide");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active-slide");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

const FilterColor = () => {
  const colors = ['#d134c4', '#4634d1', '#34d14e'];
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <div className="flex space-x-4 mt-1">
        {colors.map((color) => (
          <button
            key={color}
            className={`w-10 h-10 rounded-full text-white `}
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(color)}
          >
            {selectedColor === color && (
              <i className="lni lni-checkmark-circle text-xl"></i>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

function Product() {


  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <NavbarSecondary />
      <section className="flex gap-[40px] px-[80px] mt-[120px]">
        <div className="min-w-[550px] max-w-[500px]">
          <div ref={sliderRef} className="keen-slider mb-4 w-full">
            <div className="keen-slider__slide flex justify-center items-center w-full bg-brand bg-opacity-10 ">
              <img
                src="/src/assets/product/product1.png"
                className="h-[291px] object-contain"
                alt="product"
              />
            </div>
            <div className="keen-slider__slide flex justify-center items-center w-full bg-brand bg-opacity-10 ">
              <img
                src="/src/assets/product/product2.png"
                className="h-[291px] object-contain"
                alt="product"
              />
            </div>
            <div className="keen-slider__slide flex justify-center items-center w-full bg-brand bg-opacity-10 ">
              <img
                src="/src/assets/product/product3.png"
                className="h-[291px] object-contain"
                alt="product"
              />
            </div>
            <div className="keen-slider__slide flex justify-center items-center w-full bg-brand bg-opacity-10 ">
              <img
                src="/src/assets/product/product4.png"
                className="h-[291px] object-contain"
                alt="product"
              />
            </div>
          </div>
          <div ref={thumbnailRef} className="keen-slider thumbnail w-full">
            <div className="keen-slider__slide bg-brand w-full bg-opacity-10 flex justify-center items-center cursor-pointer ">
              <img
                src="/src/assets/product/product1.png"
                className="h-[80px] object-contain"
                alt="product"
              />
            </div>
            <div className="keen-slider__slide bg-brand w-full bg-opacity-10 flex justify-center items-center cursor-pointer ">
              <img
                src="/src/assets/product/product2.png"
                className="h-[80px] object-contain"
                alt="product"
              />
            </div>
            <div className="keen-slider__slide bg-brand w-full bg-opacity-10 flex justify-center items-center cursor-pointer ">
              <img
                src="/src/assets/product/product3.png"
                className="h-[80px] object-contain"
                alt="product"
              />
            </div>
            <div className="keen-slider__slide bg-brand w-full bg-opacity-10 flex justify-center items-center cursor-pointer ">
              <img
                src="/src/assets/product/product4.png"
                className="h-[80px] object-contain"
                alt="product"
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-4">
            Smartwatch X1 - Penampilan yang Sempurna
          </h3>
          <div className="flex gap-2 items-center mb-4">
            <div className="flex gap-1 items-center">
              <i className="lni lni-star-fill text-yellow-500"></i>
              <i className="lni lni-star-fill text-yellow-500"></i>
              <i className="lni lni-star-fill text-yellow-500"></i>
              <i className="lni lni-star-fill text-yellow-500"></i>
              <i className="lni lni-star-fill text-yellow-500"></i>
            </div>
            <span className="text-sm text-gray-500">(10)</span>
            <p>| 10 Terjual</p>
          </div>
          <h3 className="text-2xl text-brand font-semibold mb-4">Rp 399.999</h3>
        <div className="mb-6">
          <h4 className="font-medium">Pilihan Warna:</h4>
          <FilterColor />
        </div>
        <p className="mb-4 font-medium">
          Stock Tersisa : 5
        </p>
          <p className="mb-6">
            Smartwatch X1 adalah teman sejati Anda untuk menjalani gaya hidup
            sehat dan digital yang praktis. Dengan desain yang elegan dan
            fitur-fitur canggih, produk ini akan membantu Anda memaksimalkan
            potensi Anda.
          </p>
        <div className="flex gap-3 items-center">
        <Link to="/cart">
          <ButtonPrimary>
              Tambah Ke keranjang
          </ButtonPrimary>
        </Link>
          {/* share */}
            <button className="text-base text-brand border shadow-md border-brand py-[7px] px-2 rounded-[4px] hover:shadow-none focus:outline-none">
              <i className="lni lni-share"></i>
            </button>
        </div>
        </div>

        {/* Ulasan Produk */}

      </section>
      <section className="px-[80px] mt-[100px]">
        <div
          className="flex flex-col lg:flex-row gap-[10px] lg:gap-[20px] items-start"
        >
          <div className="w-full lg:w-[240px] lg:pt-0 flex flex-col gap-2">
            <div className="w-full pt-[96px]  hidden lg:flex flex-col gap-2">
              <div
                className="shadow-sm text-[14px] rounded-[4px] border border-gray-300"
              >
                <div
                  className="w-full p-2 flex justify-between items-center cursor-pointer"
                >
                  <p>Rating</p>
                </div>
                <div
                  className="bg-white flex flex-col gap-2 px-2 py-3"
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 bg-gray-300 border-none focus:ring-transparent"
                    /><label
                      htmlFor="safeAdress"
                      className="block ml-2 text-sm text-gray-900"
                    >
                      <i className="mr-1 lni lni-star-fill text-yellow-500"></i>
                      5
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 bg-gray-300 border-none focus:ring-transparent"
                    /><label
                      htmlFor="safeAdress"
                      className="block ml-2 text-sm text-gray-900"
                    >
                      <i className="mr-1 lni lni-star-fill text-yellow-500"></i>
                      4
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 bg-gray-300 border-none focus:ring-transparent"
                    /><label
                      htmlFor="safeAdress"
                      className="block ml-2 text-sm text-gray-900"
                    >
                      <i className="mr-1 lni lni-star-fill text-yellow-500"></i>
                      3
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 bg-gray-300 border-none focus:ring-transparent"
                    /><label
                      htmlFor="safeAdress"
                      className="block ml-2 text-sm text-gray-900"
                    >
                      <i className="mr-1 lni lni-star-fill text-yellow-500"></i>
                      2
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 bg-gray-300 border-none focus:ring-transparent"
                    /><label
                      htmlFor="safeAdress"
                      className="block ml-2 text-sm text-gray-900"
                    >
                      <i className="mr-1 lni lni-star-fill text-yellow-500"></i>
                      1
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="mt-8 mb-6">
              <div className="flex justify-between items-end">
                <h3 className="text-2xl font-semibold">Ulasan Produk</h3>
                <select
                  name="sort"
                  id="sort"
                  className="border cursor-pointer border-gray-300 text-sm rounded-[4px] lg:px-4 px-2 py-2"
                >
                  <option value="terbaru">Terbaru</option>
                  <option value="terpopuler">Terlama</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div
                className="rounded-[4px] p-[15px] border border-gray-300 flex flex-col lg:flex-row gap-5 lg:gap-10 items-start"
              >
                <div className="flex flex-col gap-3 lg:gap-4">
                  <p className="text-xs lg:text-[14px] font-semibold">David</p>
                  <div className="flex gap-2 text-brand text-xs lg:text-base">
                     <i className="lni lni-star-fill text-yellow-500"></i>
                     <i className="lni lni-star-fill text-yellow-500"></i>
                     <i className="lni lni-star-fill text-yellow-500"></i>
                     <i className="lni lni-star-fill text-yellow-500"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <p className="text-xs lg:text-[14px]">16/05/2023</p>
                </div>
                <div>
                  <p>
                    Saya suka desainnya, tetapi sayangnya ukurannya sedikit
                    besar bagi saya. Bagaimanapun, kualitasnya sangat baik.
                  </p>
                </div>
              </div>
              <div
                className="rounded-[4px] p-[15px] border border-gray-300 flex flex-col lg:flex-row gap-5 lg:gap-10 items-start"
              >
                <div className="flex flex-col gap-3 lg:gap-4">
                  <p className="text-xs lg:text-[14px] font-semibold">Sarah</p>
                  <div className="flex gap-2 text-brand text-xs lg:text-base">
                     <i className="lni lni-star-fill text-yellow-500"></i>
                     <i className="lni lni-star-fill text-yellow-500"></i>
                     <i className="lni lni-star-fill text-yellow-500"></i>
                     <i className="lni lni-star-fill text-yellow-500"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <p className="text-xs lg:text-[14px]">10/08/2023</p>
                </div>
                <div>
                  <p>
                    Produk ini sangat berkualitas, harga yang terjangkau, dan
                    sangat nyaman dipakai sepanjang hari. Sangat puas dengan
                    pembelian ini!
                  </p>
                </div>
              </div>
              <div
                className="rounded-[4px] p-[15px] border border-gray-300 flex flex-col lg:flex-row gap-5 lg:gap-10 items-start"
              >
                <div className="flex flex-col gap-3 lg:gap-4">
                  <p className="text-xs lg:text-[14px] font-semibold">Amanda</p>
                  <div className="flex gap-2 text-brand text-xs lg:text-base">
                     <i className="lni lni-star-fill text-yellow-500"></i>
                     <i className="lni lni-star-fill text-yellow-500"></i>
                     <i className="lni lni-star-fill text-yellow-500"></i>
                     <i className="lni lni-star-fill text-yellow-500"></i>
                  </div>
                  <p className="text-xs lg:text-[14px]">12/02/2023</p>
                </div>
                <div>
                  <p>
                    Produk ini sempurna! Saya sangat menyukai kualitasnya, dan
                    warnanya sangat cantik. Sangat direkomendasikan!
                  </p>
                </div>
              </div>
              <div
                className="rounded-[4px] p-[15px] border border-gray-300 flex flex-col lg:flex-row gap-5 lg:gap-10 items-start"
              >
                <div className="flex flex-col gap-3 lg:gap-4">
                  <p className="text-xs lg:text-[14px] font-semibold">Lisa</p>
                  <div className="flex gap-2 text-brand text-xs lg:text-base">
                     <i className="lni lni-star-fill text-yellow-500"></i>
                     <i className="lni lni-star-fill text-yellow-500"></i>
                     <i className="lni lni-star-fill text-yellow-500"></i>
                     <i className="lni lni-star-fill text-yellow-500"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <p className="text-xs lg:text-[14px]">12/06/2023</p>
                </div>
                <div>
                  <p>
                    Sangat suka dengan produk ini. Sangat berguna dalam
                    sehari-hari dan membuat saya merasa lebih stylish.
                  </p>
                </div>
              </div>
            </div>

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
              <i className="lni lni-chevron-right"></i>
            </button>
          </div>
        </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}


export default Product;
