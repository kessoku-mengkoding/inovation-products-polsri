export function Footer() {
  return(
    <>
    <footer className="flex flex-col px-4 lg:px-[80px]  items-center justify-center py-10 bg-brand bg-opacity-10 mt-[80px] ">
      <div className="flex flex-col lg:flex-row justify-between w-full gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl lg:text-2xl font-semibold">Techio</h1>
          <p className="text-sm text-gray-700">Jl. Raya Bogor KM 26, Jakarta Timur</p>
          <p className="text-sm text-gray-700">+62 812 3456 7890</p>
          <p className="text-sm text-gray-700">
            <a href="mailto:techio@gmail.com" className="hover:text-brand">
              cs@techio.com
            </a>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[80px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl lg:text-2xl font-semibold">Product</h1>
          <p className="text-sm text-gray-700">Smartwatch X1</p>
          <p className="text-sm text-gray-700">Smartwatch Neo3</p>
          <p className="text-sm text-gray-700">SmartWatch X2</p>
          <p className="text-sm text-gray-700">Smartwatch Pro</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl lg:text-2xl font-semibold">About</h1>
          <p className="text-sm text-gray-700">About Us</p>
          <p className="text-sm text-gray-700">Our Story</p>
          <p className="text-sm text-gray-700">Contact Us</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl lg:text-2xl font-semibold">Follow Us</h1>
          <div className="flex gap-4 text-brand">
          <i className="lni lni-facebook-original"></i>
        <i className="lni lni-instagram-original"></i>
        <i className="lni lni-twitter-original"></i>
          </div>
        </div>
        </div>

      </div>
      <div className="pt-10 border-t border-gray-400 w-full text-center mt-14">
        <p className="text-xs text-gray-600">
      Copyright &copy; 2023. Techio. All rights reserved.
        </p>
      </div>
    </footer>
    </>
  )
}