import "./App.css";

import { ButtonPrimary } from "./components/Button";

function App() {
  return (
    <>
      <section className="w-full h-screen flex px-[80px] items-center justify-between ">
        <div className="max-w-[584px]">
          <p className="text-brand text-sm font-medium mb-4">PRODUK TERPOPULER</p>
          <h1 className="text-4xl font-semibold mb-8 leading-[150%]"><span className="bg-brand bg-opacity-5 text-brand">Menghadirkan Masa Depan</span> Kepada Pergelangan Tangan Anda</h1>
          <p className="text-base mb-8">
          Smartwatch X1 - Masa depan teknologi di pergelangan tangan Anda. Tampilan futuristik, fitur cerdas, dan desain elegan dalam satu paket.
          </p>
          <ButtonPrimary>
            BELI SEKARANG
          </ButtonPrimary>
        </div>
        <div>
          <img src="" alt="test" className="w-[500px] bg-gray-600" />
        </div>
      </section>
      <main className="flex flex-col gap-[100px] py-[20px] px-[80px]">
        {/* Promo */}
        <section className="flex lg:flex-row flex-col">
          <img src="" alt="diskon" className="w-[700px] max-h-[400px] bg-brand" />
          <div className="bg-brand bg-opacity-5 p-[40px] w-full">
          <p className="text-brand text-sm font-medium mb-2">PENGGUNA BARU? </p>
          <h1 className="text-4xl font-semibold mb-8 max-w-[400px] leading-[150%]">Dapatkan Potongan 15% Sekarang!</h1>
          <p className="text-base mb-8 max-w-[580px]">
            Dapatkan <b>diskon eksklusif 15%</b> untuk pembelian pertama Anda bersama kami. Jelajahi koleksi produk kami yang luar biasa dan nikmati pengalaman berbelanja yang tak terlupakan.
          </p>
          <ButtonPrimary>
            DAPATKAN PROMO
          </ButtonPrimary>
          </div>
        </section>
        {/* Fitur */}
        <section>
          <h1 className="text-4xl font-semibold text-center">Kenali Keunggulan Smartwatch X1</h1>
          <span className="w-[350px] h-[3px] bg-brand mx-auto mt-4 block"></span>
          <div className="grid grid-cols-3">
            <div>
              <div className="flex flex-col gap-[5px]">

              </div>
            </div>
            <div>
              <img src="" alt="produk" />
            </div>
            <div>

            </div>
          </div>
        </section>
        {/* Showcase */}
        <section>
        <h1 className="text-4xl font-semibold text-center">Koleksi Smartwatch Unggulan Kami</h1>
          <span className="w-[350px] h-[3px] bg-brand mx-auto mt-4 block"></span>
        </section>
        {/* Testimonial */}
        <section>

        </section>
        {/* About */}
        <section>

        </section>
        {/* Contact */}
        <section>
          
        </section>
      </main>
    </>
  );
}

export default App;
