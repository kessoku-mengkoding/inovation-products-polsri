import { ButtonPrimary } from "./components/Button";
import { useState } from "react";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
        <div className="w-[500px] text-center border shadow-md bg-white rounded-[4px] p-[40px] mx-auto my-20">
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-semibold mb-2">Masuk ke Akun Anda</h3>

            <p className="text-center text-[14px]">
              Belum punya akun?
              <a
                href="login.html"
                className="ml-1 hover:underline text-brand font-medium"
              >
                Daftar
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 mt-7 w-full">
            <div className="relative w-full">
              <button className="flex items-center border border-gray-400 justify-center w-full rounded-[4px] px-4 py-2 text-second focus:outline-none font-semibold hover:border-gray-800">
                <img
                  src="/src/assets/google.svg"
                  className="w-[20px] h-[20px] absolute bottom-3 left-4"
                  alt="google"
                />
                Google
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center my-5 w-full">
            <div className="border-t border-gray-300 w-full"></div>
            <span className="mx-4 text-xs text-gray-500 block min-w-[130px]">
              Atau masuk dengan
            </span>
            <div className="border-t border-gray-300 w-full"></div>
          </div>

          <div className="flex flex-col gap-5">
            <input
              type="email"
              placeholder="Masukan email anda"
              className="border border-gray-400 w-full rounded-[4px] placeholder-gray-600 text-second px-4 py-2  bg-transparent focus:outline-none focus:border-brand"
            />
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Masukkan password Anda"
                className="border border-gray-400 w-full rounded-[4px] placeholder-gray-600 text-second px-4 py-2 bg-transparent focus:outline-none focus:border-brand"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="absolute right-2 top-2 h-6 w-6 text-gray-600"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? 
                <img src="/src/assets/eye-slash.svg" alt="Eye"/> : <img src="/src/assets/eye.svg" alt="Eye"/>
                }
              </button>
            </div>
            <div>
              <div className="flex flex-col gap-4 w-full mt-1">
                <ButtonPrimary>Masuk</ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Login;
