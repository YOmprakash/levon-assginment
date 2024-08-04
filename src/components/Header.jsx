
import { FaBars } from 'react-icons/fa';

import { FiSearch } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";

const Header = ({ toggleSidebar }) => (
    <header className=" mx-4 bg-transparent text-black sticky p-4 flex justify-between rounded-xl items-center backdrop-blur-xl top-4 :">
    <div className="flex flex-col space-x-3">
        <FaBars className="block md:hidden  cursor-pointer" onClick={toggleSidebar} />
        <h1 className="text-3xl font-bold  capitalize text-[#1B253B] hover:underline  hidden md:block ">Main Dashboard</h1>
    </div>
    <div className="flex items-center  ml-2  bg-white rounded-full p-2 max-w-[350px]">
        <div className="flex items-center">
            
        <div className="flex h-full items-center rounded-full  text-navy-700  xl:w-[145px] bg-[#f4f7fe]">
          <div className="pl-3 pr-2 text-xl">
            <FiSearch className="h-4 w-4 text-gray-400 " />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="block h-full p-2 w-full rounded-full bg-transparent text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 sm:w-fit"
          />
        </div>
        <button className="ml-4 cursor-pointer text-gray-600">
        <IoMdNotificationsOutline  />
        </button>
        <button className="ml-4 cursor-pointer text-gray-600 ">
        <RiMoonFill  />
        </button>
        <button className="ml-4 cursor-pointer text-gray-600">
        <IoMdInformationCircleOutline  />
        </button>
           

        </div>
            <div className="ml-4 cursor-pointer ">
                <img src='https://ories-horizon-admin-dashboard.vercel.app/img/avatars/avatar4.png'  alt="Avatar" className="h-10 w-10 rounded-full" />
            </div>
        </div>

    
    </header>
);

export default Header;
