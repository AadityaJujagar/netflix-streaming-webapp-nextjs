import Image from "next/image";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export default function Navbar() {
  return (
    <nav className="h-full flex flex-col p-[34px] gap-[32px] justify-start items-center bg-[#131313]">
      <Link href={`/`}>
        <Image
          src="assets/navbar/logo.svg"
          width={39.587}
          height={31.49}
          alt="logo-image"
        />
      </Link>
      <Link href={`/search`}>
        <SearchIcon className="text-[#fff] w-[24px]" />
      </Link>
      <Link href={`/favourites`}>
        <StarBorderIcon className="text-[#fff] w-[24px]" />
      </Link>
      <Link href={`/accounts`}>
        <ManageAccountsIcon className="text-[#fff] w-[24px]" />
      </Link>
    </nav>
  );
}
