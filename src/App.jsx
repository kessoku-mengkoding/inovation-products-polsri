import "./App.css";

import { ButtonPrimary, ButtonSecondary } from "./components/Button";
import { Navbar } from "./components/Navbar";

import founder from "../src/assets/founder.png";
import promo from "../src/assets/promo.png";
import fitur from "../src/assets/fitur.png";
import product1 from "../src/assets/product/product1.png"

function App() {
  return (
    <>
      <Navbar />
      <section className="w-full h-screen flex px-[80px] items-center justify-between ">
        <div className="max-w-[584px]">
          <p className="text-brand text-sm font-medium mb-4">
            PRODUK TERPOPULER
          </p>
          <h1 className="text-4xl font-semibold mb-8 leading-[150%]">
            <span className="bg-brand bg-opacity-5 text-brand">
              Menghadirkan Masa Depan
            </span><br/>
             Kepada Pergelangan Tangan Anda
          </h1>
          <p className="max-w-[584px] text-base mb-8">
            Smartwatch X1 - Masa depan teknologi di pergelangan tangan Anda.
            Tampilan futuristik, fitur cerdas, dan desain elegan dalam satu
            paket.
          </p>
          <ButtonPrimary>BELI SEKARANG</ButtonPrimary>
        </div>
        <div>
          <img src="" alt="test" className="w-[500px] bg-gray-600" />
        </div>
      </section>
      <main className="flex flex-col gap-[120px] py-[20px] px-[80px]">
        {/* Promo */}
        <section className="flex lg:flex-row flex-col">
          <img
            src={promo}
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
              Dapatkan <b>diskon eksklusif 15%</b> untuk pembelian pertama Anda
              bersama kami. Jelajahi koleksi produk kami yang luar biasa dan
              nikmati pengalaman berbelanja yang tak terlupakan.
            </p>
            <ButtonPrimary>DAPATKAN PROMO</ButtonPrimary>
          </div>
        </section>
        {/* Fitur */}
        <section>
          <h1 className="text-4xl font-semibold text-center">
            Kenali Keunggulan Smartwatch X1
          </h1>
          <span className="w-[350px] h-[3px] bg-brand mx-auto mt-4 block"></span>
          <div className="flex gap-[40px] mt-[80px] items-center">
            <div className="flex flex-col gap-[40px]">
              <div className="flex flex-col gap-[5px] items-end text-right">
                <div className="bg-brand rounded-full w-[32px] h-[32px]">

                </div>
                <h3 className="font-semibold text-2xl">Pemantauan Kesehatan</h3>
                <p>
                Lacak detak jantung, tingkat aktivitas, dan tidur Anda.
                </p>
              </div>
                          <div className="flex flex-col gap-[5px] items-end text-right">
                <div className="bg-brand rounded-full w-[32px] h-[32px]">

                </div>
                <h3 className="font-semibold text-2xl">Notifikasi Terintegrasi</h3>
                <p>
                Tetap terhubung dengan pemberitahuan penting langsung di pergelangan tangan Anda.
                </p>
              </div>
            </div>
              <img src={fitur} alt="produk" className="max-w-max" />
            <div className="flex flex-col gap-[40px]">
              <div className="flex flex-col gap-[5px] items-start text-left">
                <div className="bg-brand rounded-full w-[32px] h-[32px]">

                </div>
                <h3 className="font-semibold text-2xl">Konektivitas Lengkap</h3>
                <p>
                Sinkronkan dengan smartphone Anda untuk mengakses fitur-fitur yang lebih canggih.
                </p>
              </div>
                <div className="flex flex-col gap-[5px] items-start text-left">
                <div className="bg-brand rounded-full w-[32px] h-[32px]">

                </div>
                <h3 className="font-semibold text-2xl">Desain Elegan</h3>
                <p>
                Tampilan futuristik dalam rangkaian desain yang elegan dan nyaman dikenakan.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Showcase */}
        <section>
          <h1 className="text-4xl font-semibold text-center">
            Koleksi Smartwatch Unggulan Kami
          </h1>
          <span className="w-[350px] h-[3px] bg-brand mx-auto mt-4 block"></span>
          <div className="grid grid-cols-3 gap-[20px] mt-[80px]">
            <div className="w-full h-full  rounded-sm shadow-xl">
              <div className="overflow-hidden relative">
                <img
                  src={product1}
                  alt="product"
                  className="h-[180px] lg:h-[300px] w-full bg-brand bg-opacity-5"
                />
              </div>
              <div className="p-[20px] flex flex-col gap-[10px] items-center">
                <h3 className="text-xl font-semibold">Smartwatch X1 Pro</h3>
                <h3 className="text-xl font-semibold text-brand">Rp 500.000</h3>
                <div className="flex gap-2 mb-2">
                <i className="lni lni-star-fill text-yellow-500"></i>
                <i className="lni lni-star-fill text-yellow-500"></i>
                <i className="lni lni-star-fill text-yellow-500"></i>
                <i className="lni lni-star-fill text-yellow-500"></i>
                </div>
                <ButtonPrimary>
                  Tambah ke keranjang
                </ButtonPrimary>
              </div>
            </div>
          </div>
          <div className="mt-[60px] mx-auto w-max">
          <ButtonSecondary>
              Lihat selengkapnya
            </ButtonSecondary>
          </div>
        </section>
        {/* Testimonial */}
        <section>

        </section>
        {/* About */}
        <section>
        <div className="flex flex-col lg:flex-row lg:relative">
          <img
            src={founder}
            className="w-full lg:w-[700px]"
            alt="about"
          />
          <div
            className="pt-4 lg:p-[60px] bg-white lg:absolute lg:w-[680px] h-max lg:bottom-0 lg:right-0 "
          >
            <p className="text-brand text-sm font-medium mb-2">
              TENTANG PEMILIK PRODUK
            </p>
            <h2 className="text-[32px] font-semibold mb-6 max-w-[500px] leading-[150%]">
              Cerita di Balik Kreativitas: Mengenai Pemilik Produk
            </h2>
            <p className="text-base mb-8 max-w-[580px]">
            Saya memiliki visi untuk menciptakan produk yang tidak hanya berguna tetapi juga memadukan keindahan desain. Saya berkomitmen untuk memberikan nilai tambah kepada pengguna dengan setiap produk yang kami hasilkan.
            </p>
            <ButtonPrimary className="w-max">Baca selengkapnya</ButtonPrimary>
          </div>
        </div>
        </section>
        {/* Contact */}
        <section className="flex flex-col-reverse lg:flex-row h-max gap-[60px]">
        <div
          className=" py-5 lg:py-[40px] w-full flex flex-col gap-5"
        >
          <div>
            <h1 className="text-4xl font-semibold mb-2">Hubungi Kami</h1>
            <p>
            Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan, masukan, atau ingin berkolaborasi.
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-2 w-full h-max">
            <input
              type="text"
              placeholder="Masukan nama anda"
              className="border border-gray-400 rounded-[4px] placeholder-gray-600 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <input
              type="text"
              placeholder="Masukan email anda"
              className="border border-gray-400 rounded-[4px] placeholder-gray-600 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <textarea
              type="text"
              placeholder="Masukan pesan anda anda"
              className="border border-gray-400 rounded-[4px] placeholder-gray-600 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
            ></textarea>
          </div>
          <ButtonPrimary>
            Kirim pesan
          </ButtonPrimary>
        </div>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.08080617724!2d106.71967667579487!3d-6.28392946198547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b0b3%3A0x39a0d0fe47404d02!2sSouth%20Jakarta%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1694742006522!5m2!1sen!2sid"
            className="h-[300px] lg:h-full w-full lg:w-[600px] border-none"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      </main>
    </>
  );
}

export default App;
