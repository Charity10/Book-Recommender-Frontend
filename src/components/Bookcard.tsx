import { RiStarFill } from "react-icons/ri";
const Bookcard = () => {
  return (
    <div className="w-[420px] h-[250px] shadow-lg bg-gray-200 rounded-[20px] flex relative">
      <div className="bg-red-200 w-[45%] rounded-l-[20px]"></div>
      <div className="mt-15 mx-5">
        <h1 className="flex flex-col font-bold text-2xl">Rich Dad Poor Dad</h1>
        <span>Robert Kyosaki</span>
        <div>
          <RiStarFill size={25} />
        </div>
      </div>
      <button className="border text-xs px-4 py-1 rounded-[20px] absolute right-4 top-2 ">
        Business & Money
      </button>
    </div>
  );
};

export default Bookcard;
