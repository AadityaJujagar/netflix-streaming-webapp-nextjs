import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-[319px] bg-[#080808] flex justify-between items-center">
      <div className="flex flex-col p-[49px] my-auto justify-start">
        <p className="text-[#fff] mb-[24px] text-[40px] font-extrabold leading-6">
          Stay Connected
        </p>
        <p className="text-[#fff] pt-[25px] mb-[53px] text-[15px] leading-7 font-light">
          From cult classics to modern masterpieces.
          <br />
          Stay updated with the latest movies, news and articles from INDI.
        </p>
        <div className="flex gap-6 justify-start items-center">
          <input
            className="text-[#fff] bg-inherit border-b-2 w-[250px] h-[34px] font-light text-[15px] leading-7 focus:outline-none"
            type="text"
            placeholder="Your Email"
          />
          <button className="text-white px-[30px] py-[7.25px] border border-gray-100 rounded-full hover:bg-slate-700 transition-all duration-200">
            Submit
          </button>
        </div>
      </div>
      <Image
        height={500}
        width={386}
        src="/assets/homepage/footerImg.png"
        alt="footer-image"
      />
    </footer>
  );
}
