
import { FaTimes } from 'react-icons/fa';
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";


const Sidebar = ({ isOpen, toggleSidebar }) => (
    <aside className={`bg-white w-64 space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-40 flex flex-col justify-between`}>
        <div>
            <div className="flex text-navy-700 flex-col items-center px-">
            <FaTimes className="md:hidden cursor-pointer self-end" onClick={toggleSidebar} />
                <h2 className="text-2xl text-center pb-6 uppercase  text-[#1B253B] font-semibold"> <span className='font-bold pr-2'>Horizon</span>Free</h2>
                
            </div>
            <div className='border border-1 border-gray-300 border-solid  w-full '></div>
            <nav className='mt-6'>
                <ul>
                    <li className="flex items-center py-2 px-4 hover:bg-gray-100 font-medium text-gray-600 cursor-pointer">
                        <MdHome className="mr-2 h-6 w-6" />
                        <a href="/">Home</a>
                    </li>
                    <li className="flex items-center py-2 px-4 hover:bg-gray-100 font-medium text-gray-600 cursor-pointer">
                        <MdOutlineShoppingCart className="mr-2 h-6 w-6" />
                        <a href="/about">About</a>
                    </li>
                    <li className="flex items-center py-2 px-4 hover:bg-gray-100 font-medium text-gray-600 cursor-pointer">
                        <MdBarChart className="mr-2 h-6 w-6" />
                        <a href="/contact">Data Tables</a>
                    </li>
                    <li className="flex items-center py-2 px-4 hover:bg-gray-100 text-gray-600 cursor-pointer">
                        <MdPerson className="mr-2 h-6 w-6" />
                        <a href="/contact">Profile</a>
                    </li>
                    <li className="flex items-center py-2 px-4 hover:bg-gray-100 text-gray-600 cursor-pointer">
                        <MdLock className="mr-2 h-6 w-6" />
                        <a href="/sign">Sign In</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div className=" p-4 text-center rounded-2xl bg-[#131bb8] ">
            <h3 className="text-lg font-bold text-white my-2">Upgrade to PRO</h3>
            <p className="mt-1 px-4 text-center text-sm text-white">
                Improve your development process and start doing more with Horizon UI PRO!
            </p>
            <button className="bg-blue-500 text-white rounded-full hover:bg-blue-600 bg-gradient-to-b from-white/50 to-white/10 py-[12px] mt-4 px-11 text-center text-base  hover:bg-gradient-to-b hover:from-white/40">
                Upgrade to PRO
            </button>
        </div>
    </aside>
);

export default Sidebar;
