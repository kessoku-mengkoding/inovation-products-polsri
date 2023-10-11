import { ButtonPrimary, ButtonSecondary } from "./components/Button";
import { NavbarSecondary } from "./components/Navbar";
import { Footer } from "./components/footer";

function Cart() {
  return (
    <>
      <NavbarSecondary />
      <section className="flex mt-[100px] gap-[60px] px-[80px]">
        <div className="min-w-[725px] max-w-[725px]">
          <h3 className="text-2xl font-semibold mb-4">Keranjang Belanja</h3>
          {/* list */}
          <div className="flex flex-col gap-4 justify-between items-center py-2">
            <div className="flex border border-gray-300 w-full relative rounded-[4px]">
              <div className="w-[183px] h-[183px] bg-gray-200 mr-2">
                <img
                  src="/src/assets/product/product1.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-[20px]">
                <div className="absolute top-[20px] right-[20px]">
                  <button className="">
                    <i className="lni lni-trash-can text-xl text-red-500"></i>
                  </button>
                </div>
                <p className="font-semibold text-xl mb-2">Smartwatch X1</p>
                <p className="font-semibold text-brand mb-2">Rp 399.999</p>
                <div className="flex items-center gap-2">
                  Warna :{" "}
                  <span className="bg-[#34d14e] inline-block rounded-full w-[25px] h-[25px]"></span>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <p>Stok</p>
                  <select
                    name="stock"
                    id="stock"
                    className="border border-gray-300 rounded-md px-3 py-1 cursor-pointer focus:outline-none text-xs"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex border border-gray-300 w-full relative rounded-[4px]">
              <div className="w-[183px] h-[183px] bg-gray-200 mr-2">
                <img
                  src="/src/assets/product/product2.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-[20px]">
                <div className="absolute top-[20px] right-[20px]">
                  <button className="">
                    <i className="lni lni-trash-can text-xl text-red-500"></i>
                  </button>
                </div>
                <p className="font-semibold text-xl mb-2">Smartwatch X2</p>
                <p className="font-semibold text-brand mb-2">Rp 899.999</p>
                <div className="flex items-center gap-2">
                  Warna :{" "}
                  <span className="bg-[#e0e0e0] inline-block rounded-full w-[25px] h-[25px]"></span>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <p>Stok</p>
                  <select
                    name="stock"
                    id="stock"
                    className="border border-gray-300 rounded-md px-3 py-1 cursor-pointer focus:outline-none text-xs"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          {/* Accordion Kupon Diskon */}
          <div className="border border-gray-300 rounded-[4px] p-4 mb-4 w-full mt-14">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Kupon Diskon</h3>
            </div>
            <div className="flex flex-col  mt-4 gap-3">
              <input
                type="text"
                placeholder="Masukan kupon anda"
                className="border border-gray-400 rounded-[4px] placeholder-gray-600 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
              />
              <ButtonSecondary>Gunakan</ButtonSecondary>
            </div>
          </div>

          {/* Summary Transaksi */}
          <div className="border border-gray-300 rounded-[4px] p-4 mb-4 w-full">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Ringkasan Belanja</h3>
            </div>
            <div className="flex flex-col mt-4 gap-3">
              <div className="flex justify-between items-center">
                <p className="text-second">Total Harga (2 Produk)</p>
                <p className="text-brand">1.299.998</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-second">Ongkos Kirim</p>
                <p className="text-brand">Rp 0</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-second">Total Diskon</p>
                <p className="text-brand">Rp 0</p>
              </div>
              <div className="flex justify-between items-center border-t border-gray-300 pt-4">
                <p className="text-second">Total Bayar</p>
                <p className="text-brand">1.299.998</p>
              </div>

              <ButtonPrimary>
                Konfirmasi
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Cart;
