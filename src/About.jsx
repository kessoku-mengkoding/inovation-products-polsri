import { ButtonPrimary } from "./components/Button";
import { NavbarSecondary } from "./components/Navbar";
import { Footer } from "./components/footer";

function About() {
  return (
    <>
      <NavbarSecondary />

      <section className="px-[80px] mt-[120px]">
        <div className="flex justify-between gap-[60px] ">
          <div
            data-aos="zoom-in"
          >
          <img
            src="/src/assets/founder.png"
            alt="about"
            className="w-[500px] h-min"
          />

          </div>
          <div data-aos="fade-left" data-aos-delay="300">
          <div className="w-full">
            <p className="text-brand text-sm font-medium mb-2">
              TENTANG PEMILIK PRODUK
            </p>
            <h2 className="text-[32px] font-semibold mb-6 max-w-[500px] leading-[150%]">
              Alexandro Fuado
            </h2>
            <p className="text-base mb-8 max-w-[580px]">
              Saya adalah pemilik dan pengembang utama produk ini. Dengan
              semangat dan dedikasi untuk menghadirkan teknologi terbaru ke
              tangan Anda, saya dan tim kami telah merancang dan mengembangkan
              smartwatch X1 dengan cinta dan perhatian kepada setiap detail.
              Kami berkomitmen untuk memberikan pengalaman terbaik kepada
              pelanggan kami. Produk ini adalah hasil dari upaya bersama kami
              untuk menciptakan perangkat yang tidak hanya bergaya, tetapi juga
              fungsional. Kami memahami bahwa teknologi harus memudahkan hidup
              Anda dan itulah yang kami coba capai. Terima kasih atas dukungan
              Anda. Bersama-sama, kita menciptakan masa depan yang lebih cerah
              melalui teknologi yang inovatif dan berkualitas tinggi. Jangan
              ragu untuk menghubungi saya jika Anda memiliki pertanyaan atau
              saran. Saya dengan senang hati akan mendengarkannya.
            </p>
          </div>
          </div>

        </div>
               {/* Contact */}
               <section
          id="contact"
          className="flex flex-col-reverse lg:flex-row h-max gap-[60px] justify-between mt-[80px]"
        >
          <div data-aos="fade-right">
            <div className=" py-5 lg:py-[40px] w-full flex flex-col gap-5">
              <div>
                <h1 className="text-4xl font-semibold mb-2">Hubungi Saya</h1>
                <p>
                  Jangan ragu untuk menghubungi saya jika Anda memiliki
                  pertanyaan, masukan, atau ingin berkolaborasi.
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
              <ButtonPrimary>Kirim pesan</ButtonPrimary>
            </div>
          </div>
          <div className="">
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="w-full h-full"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.08080617724!2d106.71967667579487!3d-6.28392946198547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b0b3%3A0x39a0d0fe47404d02!2sSouth%20Jakarta%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1694742006522!5m2!1sen!2sid"
                className="h-[300px] lg:h-full w-full lg:w-[600px] border-none"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
}

export default About;
