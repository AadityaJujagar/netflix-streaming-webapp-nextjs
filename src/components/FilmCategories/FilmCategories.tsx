import { recentlyAdded, topRated } from "@/utils/data";
import Image from "next/image";

export default function RecentlyAdded() {
  return (
    <>
      {/* recently added movies section */}
      <div className="w-11/12 mx-auto mt-[29px]">
        <p className="mt-[29px] mb-[29px] text-[#fff] text-[20px] font-medium leading-6">
          Recently Added Films
        </p>
        <div className="grid grid-cols-6 gap-[18.5px]">
          {recentlyAdded.map((image) => {
            return (
              <Image
                key={image.id}
                src={image.img}
                height={280}
                width={190}
                style={{ objectFit: "cover" }}
                alt="movie-thumb"
                className="hover:cursor-pointer hover:scale-105 transition-all duration-200"
              />
            );
          })}
        </div>
      </div>

      {/* top rated movies section */}
      <div className="w-11/12 mx-auto mb-[92px] mt-[29px]">
        <p className="mt-[29px] mb-[29px] text-[#fff] text-[20px] font-medium leading-6">
          Top Rated Films
        </p>
        <div className="grid grid-cols-6 gap-[18.5px]">
          {topRated.map((image) => {
            return (
              <Image
                src={image.img}
                height={280}
                width={190}
                key={image.id}
                style={{ objectFit: "cover" }}
                alt="movie-thumb"
                className="hover:cursor-pointer hover:scale-105 transition-all duration-200"
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
