import { AiOutlineSearch } from "react-icons/ai";
function Header() {
  return (
    <div className="w-full px-16">
      <div className="flex flex-col lg:flex-row items-center gap-5 my-4  lg:gap-20">
        <div className="italic text-[#FFD900] font-bold text-3xl">
          <span className="text-black">E-</span>RECOMMEND
        </div>
        <div className="border-b-1 border-gray-300 w-full lg:max-w-[500px] flex justify-between items-center">
          <input
            className="w-full text-center p-2 focus:outline-none"
            placeholder="Search by Author, Genre and ISBN"
            type="text"
            name=""
            id=""
          />
          <AiOutlineSearch size={25} />
        </div>
      </div>
    </div>
  );
}

export default Header;
