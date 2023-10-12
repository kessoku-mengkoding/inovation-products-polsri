import { ButtonPrimary } from "./components/Button";
import { NavbarSecondary } from "./components/Navbar";
import { Footer } from "./components/footer";
import { Link } from "react-router-dom";

import { useState, useRef } from "react";

const PaymentSelect = () => {
  const paymentOptions = [
    {
      value: "gopay",
      label: "Gopay",
      image: "/pembayaran/gopay.png",
    },
    {
      value: "kredivo",
      label: "Kredivo",
      image: "/pembayaran/kredivo.png",
    },
    { value: "bca", label: "BCA", image: "/pembayaran/bca.png" },
    { value: "bni", label: "BNI", image: "/pembayaran/bni.png" },
    {
      value: "mandiri",
      label: "Mandiri",
      image: "/pembayaran/mandiri.png",
    },
    { value: "visa", label: "Visa", image: "/pembayaran/visa.png" },
  ];

  const [selectedPayment, setSelectedPayment] = useState(paymentOptions[0]);

  const handlePaymentChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = paymentOptions.find(
      (option) => option.value === selectedValue
    );
    setSelectedPayment(selectedOption);
  };

  return (
    <div className="relative cursor-pointer">
      <select
        onChange={handlePaymentChange}
        value={selectedPayment.value}
        className="block appearance-none w-full border border-gray-200 rounded-[4px] py-2 px-3 pr-16 bg-white focus:outline-none focus:border-brand cursor-pointer"
      >
        {paymentOptions.map((option) => (
          <option key={option.value} value={option.value} className="text-sm">
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <img
          src={selectedPayment.image}
          alt="payment-method"
          className="h-[12px] object-position"
        />
      </div>
    </div>
  );
};

function Payment() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalSuccess, setIsModalSuccess] = useState(false);
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const successModalToggle = () => {
    setIsModalSuccess(!isModalSuccess);
  };

  const handleConfirm = () => {
    setIsModalSuccess(true);

    setIsModalVisible(false);
  };

  const handleInputChange = (index, e) => {
    if (e.target.value && index < 5) {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <>
      <NavbarSecondary />

      {/* ModalSuccess Payment */}
      <div
        className={`fixed left-0 top-0 z-[80] px-4 lg:px-100 bg-gray-800 flex justify-center items-center bg-opacity-20 w-screen h-screen transition-all duration-300 ${
          isModalSuccess ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } `}
      >
        <div className="relative bg-white w-full rounded-[4px] lg:min-w-[800px] lg:max-w-[800px] flex items-center justify-center px-4 lg:px-0 pt-[60px]  py-[40px] shadow-md border border-gray-200">
          <div className="absolute top-5 right-5 text-xl">
            <button onClick={successModalToggle}>
              <i className="lni lni-close"></i>
            </button>
          </div>
          <div className="flex flex-col items-center gap-3">
             <i className="lni lni-checkmark-circle mb-2 text-green-500 text-[60px] lg:text-[100px]"></i>
            <div className="flex gap-3 flex-col text-center max-w-[450px]">
            <h4 className="text-xl font-semibold">Pembayaran Berhasil</h4>
              <p className="text-xs lg:text-base mb-1">
                Terima kasih telah melakukan pembayaran, pesanan anda akan
                segera kami proses.
              </p>
              <div
                className="flex w-full flex-col"
                onClick={successModalToggle}
              >
                <Link to="/">
                <ButtonPrimary>Selesai</ButtonPrimary>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed left-0 top-0 z-50 px-4 lg:px-100 bg-gray-800 flex justify-center items-center bg-opacity-20 w-screen h-screen transition-all duration-300 ${
          isModalVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } `}
      >
        <div className="relative bg-white w-full rounded-[4px] lg:min-w-[800px] lg:max-w-[800px] flex items-center justify-center px-4 lg:px-0 pt-[70px]  py-[40px] shadow-md border border-gray-200">
          <div className="absolute top-5 right-5 text-xl">
            <button onClick={toggleModal}>
              <i className="lni lni-close"></i>
            </button>
          </div>
          <div className="flex flex-col items-center gap-6">
            <h4 className="text-xl font-semibold">Konfirmasi Pembayaran</h4>
            <div className="flex gap-3 flex-col text-center">
              Masukan token anda
              <div className="space-x-2 token mb-2">
                {inputRefs.map((ref, index) => (
                  <input
                    key={index}
                    type="text"
                    placeholder="0"
                    className="w-10 h-10 px-3 py-2 text-center border border-second focus:outline-none focus:border-brand"
                    maxLength="1"
                    ref={ref}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                ))}
              </div>
              <div onClick={handleConfirm} className="flex flex-col">
                <ButtonPrimary>Konfirmasi</ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-[100px] px-4 lg:px-[80px] max-w-[1360px] mx-auto">
        <h3 className="text-2xl font-semibold">Checkout Pesananmu</h3>
        <div className="flex flex-col lg:flex-row gap-[80px] lg:gap-[40px] justify-between mt-6">
          <div className="flex flex-col gap-5 w-full lg:w-[600px]">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="text" className="text-[14px]">
                Nama
              </label>
              <input
                type="text"
                placeholder="Masukan nama anda"
                className="border border-gray-400 rounded-[4px] placeholder-gray-600 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="text" className="text-[14px]">
                Alamat
              </label>
              <input
                type="text"
                placeholder="Masukan alamat anda"
                className="border border-gray-400 rounded-[4px] placeholder-gray-600 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
              />
            </div>
            <div className="flex gap-[10px]">
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="text" className="text-[14px]">
                  Kota
                </label>
                <input
                  type="text"
                  placeholder="Masukan kota anda"
                  className="border border-gray-400 rounded-[4px] placeholder-gray-600 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="text" className="text-[14px]">
                  Provinsi
                </label>
                <input
                  type="text"
                  placeholder="Masukan provinsi anda"
                  className="border border-gray-400 rounded-[4px] placeholder-gray-600 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="text" className="text-[14px]">
                  Kode Pos
                </label>
                <input
                  type="text"
                  placeholder="Masukan kode pos anda"
                  className="border border-gray-400 rounded-[4px] placeholder-gray-600 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="text" className="text-[14px]">
                Nomor Telepon
              </label>
              <input
                type="text"
                placeholder="Masukan nomor telepon anda"
                className="border border-gray-400 rounded-[4px] placeholder-gray-600 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="email" className="text-[14px]">
                Email
              </label>
              <input
                type="email"
                placeholder="Masukan nomor telepon anda"
                className="border border-gray-400 rounded-[4px] placeholder-gray-600 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
              />
            </div>
            <div className="flex gap-1 w-full">
              <input type="checkbox" id="save" name="save" value="save" />
              <label htmlFor="save" className="text-[14px]">
                Simpan data untuk transaksi selanjutnya
              </label>
            </div>
          </div>
          <div className="w-full lg:w-[500px]">
            <div className="lg:border border-gray-200 lg:p-[20px] w-full flex flex-col gap-5">
              <p className="text-xl font-semibold mb-1">Ringkasan Belanja</p>

              <div className="flex flex-col gap-3 w-full">
                <div className="flex items-start gap-3">
                  <div className="overflow-hidden w-[95px] h-[95px]">
                    <img
                      src="/product/product1.png"
                      className="bg-brand bg-opacity-10 object-cover w-full h-full"
                      alt="smartwatch"
                    />
                  </div>
                  <div>
                    <p>Smartwatch X1</p>
                    <p className="font-semibold">Rp 399.999</p>
                    <p className="text-[14px]">Jumlah: 1</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="overflow-hidden w-[95px] h-[95px]">
                    <img
                      src="/product/product2.png"
                      className="bg-brand bg-opacity-10 object-cover w-full h-full"
                      alt="smartwatch"
                    />
                  </div>
                  <div>
                    <p>Smartwatch X2</p>
                    <p className="font-semibold">Rp 899.999</p>
                    <p className="text-[14px]">Jumlah: 1</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pb-5 border-b border-gray-200">
                <p className="font-semibold">Subtotal</p>
                <p className="font-semibold">Rp 1.299.998</p>
              </div>
              <div className="flex justify-between pb-5 border-b border-gray-200">
                <p className="font-semibold">Pengiriman</p>
                <p className="font-semibold">Rp 0</p>
              </div>
              <div className="flex justify-between pb-5 border-b border-gray-200">
                <p className="font-semibold">Total</p>
                <p className="font-semibold">Rp 1.299.998</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Metode Pembayaran</p>
                <div>
                  <PaymentSelect />
                </div>
              </div>
              <div className="flex w-full flex-col" onClick={toggleModal}>
                <ButtonPrimary>Bayar</ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Payment;
