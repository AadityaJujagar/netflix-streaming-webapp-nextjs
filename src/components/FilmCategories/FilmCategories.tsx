import { recentlyAdded, topRated } from "@/utils/data";
import Image from "next/image";

export default function RecentlyAdded() {
  return (
    <div className="w-11/12 mx-auto mt-[29px]">
      <p className="mt-[29px] mb-[29px] text-[#fff] text-[20px] font-medium leading-6">
        Recently Added Films
      </p>

      {/* recently added movies section */}
      <div className="grid grid-cols-6 gap-[18.5px]">
        {recentlyAdded.map((image) => {
          return (
            <div key={image.id}>
              <Image
                src={image.img}
                height={280}
                width={190}
                style={{ objectFit: "cover" }}
                alt="movie-thumb"
              />
            </div>
          );
        })}
      </div>

      {/* top rated movies section */}
      <div className="grid grid-cols-6 gap-[18.5px]">
        {topRated.map((image) => {
          return (
            <div key={image.id}>
              <Image
                src={image.img}
                height={280}
                width={190}
                style={{ objectFit: "cover" }}
                alt="movie-thumb"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
