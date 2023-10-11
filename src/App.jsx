import { ButtonPrimary, ButtonSecondary } from "./components/Button";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/footer";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
AOS.init();

import testimoniData from "./testimoni.json";

function App() {
  const [products, setProducts] = useState([]);
  const [testimoni, setTestimoni] = useState([]);

  useEffect(() => {
    setTestimoni(testimoniData);
  }, []);

  useEffect(() => {
    fetch("/src/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // showcase slider

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;
  const totalSlides = Math.ceil(products.length / itemsPerPage);

  const [activeSlide, setActiveSlide] = useState(0);

  const itemsPerPageTestimoni = 1;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimoni.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimoni.length - 1 : prev - 1));
  };

  return (
    <>
      <Navbar />
      <section className="w-full h-screen flex px-[80px] items-center justify-between ">
        <div data-aos="fade-right">
          <div className="max-w-[584px]">
            <p className="text-brand text-sm font-medium mb-4">
              PRODUK TERPOPULER
            </p>
            <h1 className="text-4xl font-semibold mb-8 leading-[150%]">
              <span className="bg-brand bg-opacity-5 text-brand">
                Menghadirkan Masa Depan
              </span>
              <br />
              Kepada Pergelangan Tangan Anda
            </h1>
            <p className="max-w-[584px] text-base mb-8">
              Smartwatch X1 - Masa depan teknologi di pergelangan tangan Anda.
              Tampilan futuristik, fitur cerdas, dan desain elegan dalam satu
              paket.
            </p>
            <Link to="/products">
              <ButtonPrimary>Lihat produk</ButtonPrimary>
            </Link>
          </div>
        </div>
        <div className="relative right-[60px] top-0">
          <img
            src="/src/assets/hero.png"
            alt="test"
            className="w-[380px] relative z-[2] animate-customBounce"
          />
          <div className="absolute top-[110px] left-[40px] w-[240px] h-[240px] bg-brand bg-opacity-60 rounded-full overflow-hidden blur-[100px] "></div>
        </div>
      </section>
      <main className="flex flex-col gap-[200px] py-[20px] px-[80px] overflow-x-hidden">
        {/* Promo */}
        <div data-aos="zoom-in">
          <section className="flex lg:flex-row flex-col">
            <img
              src="/src/assets/promo.png"
              alt="diskon"
              className="w-[750px] max-h-[400px] bg-brand"
            />
            <div className="bg-brand bg-opacity-5 p-[40px] w-full">
              <p className="text-brand text-sm font-medium mb-2">
                PENGGUNA BARU?{" "}
              </p>
              <h1 className="text-4xl font-semibold mb-8 max-w-[400px] leading-[150%]">
                Dapatkan Potongan 15% Sekarang!
              </h1>
              <p className="text-base mb-8 max-w-[580px]">
                Dapatkan <b>diskon eksklusif 15%</b> untuk pembelian pertama
                Anda bersama kami. Jelajahi koleksi produk kami yang luar biasa
                dan nikmati pengalaman berbelanja yang tak terlupakan.
              </p>
              <Link to="/product">
                <ButtonPrimary>DAPATKAN PROMO</ButtonPrimary>
              </Link>
            </div>
          </section>
        </div>
        {/* Fitur */}
        <section>
          <h1 className="text-4xl font-semibold text-center">
            Kenali Keunggulan Smartwatch X1
          </h1>
          <span className="w-[350px] h-[3px] bg-brand mx-auto mt-4 block"></span>
          <div className="flex gap-[40px] mt-[80px] items-center">
            <div className="flex flex-col gap-[40px]">
              <div data-aos="fade-right">
                <div className="flex gap-[10px] justify-end text-right">
                  <div>
                    <h3 className="font-semibold text-2xl mb-1">
                      Pemantauan Kesehatan
                    </h3>
                    <p>
                      Lacak detak jantung, tingkat aktivitas, dan tidur Anda.
                    </p>
                  </div>
                  <div className="bg-brand rounded-full min-w-[36px] h-[36px]  text-white flex justify-center items-center">
                    <i className="lni lni-first-aid"></i>
                  </div>
                </div>
              </div>
              <div data-aos="fade-right">
                <div className="flex gap-[10px] justify-end text-right">
                  <div>
                    <h3 className="font-semibold text-2xl mb-1">
                      Notifikasi Terintegrasi
                    </h3>
                    <p>
                      Tetap terhubung dengan pemberitahuan penting langsung di
                      tangan Anda.
                    </p>
                  </div>
                  <div className="bg-brand rounded-full min-w-[36px] h-[36px]  text-white flex justify-center items-center">
                    <i className="lni lni-alarm"></i>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in">
              <img
                src="/src/assets/fitur.png"
                alt="produk"
                className="max-w-max"
              />
            </div>
            <div className="flex flex-col gap-[40px]">
              <div data-aos="fade-left">
                <div className="flex gap-[10px] items-start text-left">
                  <div className="bg-brand rounded-full min-w-[36px] h-[36px]  text-white flex justify-center items-center">
                    <i className="lni lni-link"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-2xl mb-1">
                      Konektivitas Lengkap
                    </h3>
                    <p>
                      Sinkronkan dengan smartphone Anda untuk mengakses
                      fitur-fitur yang lebih canggih.
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-left">
                <div className="flex  gap-[10px] items-start text-left">
                  <div className="bg-brand rounded-full min-w-[36px] h-[36px]  text-white flex justify-center items-center">
                    <i className="lni lni-diamond-alt"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-2xl mb-1">
                      Desain Elegan
                    </h3>
                    <p>
                      Tampilan futuristik dalam rangkaian desain yang elegan dan
                      nyaman dikenakan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Showcase */}
        <section id="product">
          <h1 className="text-4xl font-semibold text-center">
            Koleksi Smartwatch Unggulan Kami
          </h1>
          <span className="w-[350px] h-[3px] bg-brand mx-auto mt-4 block"></span>
          <div className="grid grid-cols-3 gap-[20px] mt-[80px]">
            {products
              .slice(
                currentIndex * itemsPerPage,
                (currentIndex + 1) * itemsPerPage
              )
              .map((product) => (
                <div
                  data-aos="zoom-in"
                  data-aos-delay={`${product.id * 100}`}
                  key={product.id}
                >
                  <div className="w-full h-full rounded-sm shadow-xl">
                    <div className="overflow-hidden relative min-h-[300px] min-w-full bg-brand bg-center bg-opacity-5">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-[291px] m-auto object-position"
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
          <div className="flex gap-2 justify-center mt-[40px]">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <span
                key={index}
                className={`cursor-pointer h-[12px] transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-brand w-[28px] rounded-[10px] "
                    : "bg-gray-400 w-[12px] rounded-full"
                }`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
          <div className="mt-[60px] mx-auto w-max">
            <ButtonSecondary>Lihat selengkapnya</ButtonSecondary>
          </div>
        </section>
        {/* Testimonial */}
        <section className="relative overflow-hidden">
          <h1 className="text-4xl font-semibold text-center">
            Apa yang Pelanggan Katakan tentang Kami
          </h1>
          <span className="w-[350px] h-[3px] bg-brand mx-auto mt-4 mb-[60px] block"></span>
          <div className="absolute bottom-0 right-[80px] flex gap-3 z-[3]">
            <span
              onClick={prevSlide}
              className="shadow-md bg-brand cursor-pointer rounded-full min-w-[36px] h-[36px]  text-white flex justify-center items-center"
            >
              <i className="lni lni-chevron-left text-xl"></i>
            </span>
            <span
              onClick={nextSlide}
              className="shadow-md bg-brand cursor-pointer rounded-full min-w-[36px] h-[36px]  text-white flex justify-center items-center"
            >
              <i className="lni lni-chevron-right text-xl"></i>
            </span>
          </div>
          <section className="grid grid-cols-1">
            {testimoni
              .slice(
                activeSlide * itemsPerPageTestimoni,
                (activeSlide + 1) * itemsPerPageTestimoni
              )
              .map((item, index) => (
                <div key={item.name}>
                  <div className="flex items-end gap-[80px] w-full">
                    <div className="relative h-[500px]">
                      <div
                        data-aos-delay={`${index * 100}`}
                        data-aos="zoom-in"
                        className="relative z-[2]"
                      >
                        <img
                          src={item.image}
                          alt="testi"
                          className="min-w-[454px] object-contain "
                        />
                      </div>
                      <span className="bg-brand w-full h-[400px] rounded-tr-[160px] block absolute bottom-0 shadow-lg"></span>
                    </div>
                    <div className="flex flex-col gap-[100px] w-auto">
                      <div>
                        <img
                          src="/src/assets/quote.png"
                          className="w-[56px] mb-6"
                          alt="quote"
                        />
                      </div>
                      <div
                        data-aos-delay={`${index * 500}`}
                        data-aos-duration="1000"
                        data-aos="fade-left"
                      >
                        <h4 className="text-xl">{item.testimonial}</h4>
                      </div>
                      <div
                        data-aos-delay={`${index * 400}`}
                        data-aos="fade-left"
                      >
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p>{item.job}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </section>
        </section>
        {/* About */}
        <section id="about">
          <div className="flex flex-col lg:flex-row lg:relative">
            <div data-aos="fade-right">
              <img
                src="/src/assets/founder.png"
                className="w-full lg:w-[700px]"
                alt="about"
              />
            </div>

            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="pt-4 lg:p-[60px] bg-white lg:absolute lg:w-[680px] h-max lg:bottom-0 lg:right-0 "
            >
              <div className="">
                <p className="text-brand text-sm font-medium mb-2">
                  TENTANG PEMILIK PRODUK
                </p>
                <h2 className="text-[32px] font-semibold mb-6 max-w-[500px] leading-[150%]">
                  Cerita di Balik Kreativitas: Mengenai Pemilik Produk
                </h2>
                <p className="text-base mb-8 max-w-[580px]">
                  Saya memiliki visi untuk menciptakan produk yang tidak hanya
                  berguna tetapi juga memadukan keindahan desain. Saya
                  berkomitmen untuk memberikan nilai tambah kepada pengguna
                  dengan setiap produk yang kami hasilkan.
                </p>
                <ButtonPrimary className="w-max">
                  Baca selengkapnya
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </section>
        {/* Subscribe NewsLetter */}
        <div data-aos="fade">
          <section className="bg-brand bg-opacity-10">
            <div className="flex flex-col items-center justify-center py-[40px] px-[15px]">
              <i className="lni lni-envelope text-brand text-[64px] mb-3"></i>
              <h2 className="text-center text-2xl font-semibold">
                Berlangganan Newsletter Kami
              </h2>
              <p className="text-center mt-3 mb-8">
                Dapatkan informasi terbaru tentang produk dan penawaran menarik
                lainnya.
              </p>
              <div className="flex w-full flex-col lg:flex-row lg:justify-center gap-3 lg:gap-4">
                <input
                  type="email"
                  placeholder="Masukan email anda"
                  className="border border-gray-400 rounded-[4px] placeholder-gray-600 text-second px-4 py-2  bg-transparent focus:outline-none focus:border-brand w-[500px] bg-white"
                />
                <ButtonPrimary>Berlangganan</ButtonPrimary>
              </div>
            </div>
          </section>
        </div>
 
      </main>
      <Footer />
    </>
  );
}

export default App;
