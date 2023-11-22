import Image from "next/image";

export default function HeroSection() {
  return (
    <div
      style={{
        background:
          "url(/assets/homepage/fallbackImg.png) lightgray 50% / cover no-repeat",
      }}
      className="h-[544px]"
    >
      <div className="flex flex-col mt-[26px] ml-[46px] justify-start">
        <p className="text-[#fff] text-[80px] font-bold leading-normal">
          SAM AWAY
        </p>
        <p className="text-[#747474] text-[12px] font-normal leading-[24px]">
          Adventure, Fantasy | 2019 | 136 Min.
        </p>
        <p className="text-[#fff] w-[450px] mt-[20px] mb-[20px] text-[15px] leading-7 font-thin">
          When a tornado hits through City of Peaceville, Samantha (Jenny
          Loifer) and her dog, Ricko, are whisked away in their house to an
          amazing journey.
        </p>
        <div className="gap-0 flex flex-col">
          <p className="text-[#fff] text-[12px] font-normal leading-7">
            Director: Todd Burns
          </p>
          <p className="text-[#fff] text-[12px] font-normal leading-7">
            Cast: Jenny Loifer, Sarah Obrien, Larry Moss Jr.
          </p>
          <button className="w-[151px] h-[44px] mt-[48px] mb-[48px] bg-[#080808] flex justify-evenly items-center text-[#ff4e4e] rounded-full border-[0.954px] border-red-500">
            <Image
              src="/assets/homepage/btn-watch.svg"
              alt="Play Icon"
              width={12}
              height={12}
            />
            <p>Watch Now</p>
          </button>
        </div>
      </div>
    </div>
  );
}
