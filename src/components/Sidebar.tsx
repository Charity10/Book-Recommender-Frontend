import type React from "react";
import { sidebarCategories } from "../data";
const Sidebar: React.FC = () => {
  return (
    <div className="w-full px-4">
      <div className="w-[250px] h-full rounded-[25px] py-15 px-8 bg-gray-300  ">
        {sidebarCategories.map((category) =>
          category.isHeader ? (
            <h2 className="font-bold my-4">{category.name}</h2>
          ) : (
            <ul className="">
              <li className="my-4 text-[#6A6A6A] hover:shadow-md hover:font-bold hover:px-2 cursor-pointer ">
                {category.name}
              </li>
            </ul>
          )
        )}
      </div>
    </div>
  );
};

export default Sidebar;
