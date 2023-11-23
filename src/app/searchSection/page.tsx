import SearchIcon from "@mui/icons-material/Search";

export default function SearchSection() {
  return (
    <div className="flex flex-col h-3/5 bg-[#fff] items-center mx-auto gap-4 pt-[24px] pb-[152.44px]">
      <div className="h-[48px] flex border transition-all duration-500 hover:border-[#5753F3] justify-evenly items-center w-11/12 rounded-full">
        <SearchIcon style={{ color: "#6C6685", fontSize: 24 }} />
        <input
          className="w-10/12 h-full focus:outline-none"
          type="text"
          placeholder="Explore the Shows and Movies..."
        />
        <button className="pl-[12px] hover:text-[#131313] h-full leading-4 text-[16px] font-normal text-[#6C6685] border-l">
          Search
        </button>
      </div>
    </div>
  );
}
