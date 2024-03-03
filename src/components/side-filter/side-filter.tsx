import { useState } from "react";
import { Button } from "..";
import { BiMenu, BiX } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import clsx from "clsx";
import { Category, User } from "../../types";

export default function SideFilter({ categories, user }: { categories?: Array<Category>, user?: User }) {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = () => setToggle(prev => !prev)
  return (
    <>
      <div className="hidden lg:block min-w-60 w-1/3 flex flex-col p-5 gap-5 rounded-lg border-[1px]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center h-40 w-40 bg-gray-200 rounded-lg">
            <div className="relative w-full h-full bg-gray-200 rounded-xl wrap-hidden">
              <img
                src={`data:image/png;base64,${user?.image}`}
                alt=""
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
          <span>
            {user?.name}
          </span>
        </div>
        <div>
          <ul>
            {categories?.map((category, index) => (
              <li key={index} className="flex items-center justify-between p-2 text-sm hover:bg-gray-100 cursor-pointer">
                {category.nameOfCategory} <FiChevronDown />
              </li>
            ))}
          </ul>
        </div>
        <Button className="w-full">
          Apply filter
        </Button>
      </div>


      <div className="lg:hidden block border-[1px] rounded-lg py-5 px-2">
        <BiMenu size={28} className="cursor-pointer" onClick={handleToggle} />
      </div>


      <div className={clsx(
        "lg:hidden absolute top-0 z-10 h-screen bg-white overflow-hidden",
        "transition-all ease-in-out items-center",
        { 'w-0 -left-10': !toggle, 'w-[70%] left-0': toggle },
      )}>
        <div className="w-full flex flex-col p-5 gap-5">
          <div className="flex flex-col gap-2">
            <div className="h-52 bg-gray-300 w-52 rounded-lg p-5">
              <div className="relative w-full h-full bg-gray-200 rounded-xl wrap-hidden">
                <img
                  src={`data:image/png;base64,${user?.image}`}
                  alt=""
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            </div>
            <span>
              {user?.name}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <ul className="gap-2">
              {categories?.map((category, index) => (
                <li key={index} className="flex items-center justify-between p-2 text-sm hover:bg-gray-100 cursor-pointer">
                  {category.nameOfCategory} <FiChevronDown />
                </li>
              ))}
            </ul>
          </div>
          <Button className="w-full" onClick={handleToggle}>
            Apply filter
          </Button>
          <BiX size={28} className="cursor-pointer absolute top-4 right-4 text-primary-500"
            onClick={handleToggle} />
        </div>
      </div>
      <div className={clsx(
        "absolute top-0 left-0 h-screen w-full bg-black opacity-[25%]",
        { 'hidden': !toggle, 'block': toggle }
      )}
        onClick={handleToggle}
      ></div>
    </>
  );
}
