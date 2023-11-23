import Image from "next/image";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";

export default function Sidebar() {
  return (
    <nav className="h-full flex flex-col pt-[34px] pb-[34px] gap-[32px] justify-start items-center bg-[#131313]">
      <Link href={`/`}>
        <Image
          src="assets/navbar/logo.svg"
          width={39.587}
          height={31.49}
          alt="logo-image"
        />
      </Link>
      <Link href={`/searchSection`}>
        <SearchIcon className="text-[#fff] w-[24px]" />
      </Link>
    </nav>
  );
}
