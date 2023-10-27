import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { BsBagHeartFill } from "react-icons/bs";

export default function NavBar() {
  return (
    <>
      <nav className="bg-gradient-to-r from-gray-600 to-gray-800 flex justify-between px-[1rem] sm:px-[5rem] py-[0.9rem] sm:py-[1rem] fixed w-full z-[1000]">
        <div className="">
          <Link to={"/"}>
            <h1 className="flex items-center bg-black px-[8px] py-[6px] text-[15px] font-semibold">
              <span className="text-white">Ecom</span>
              <span className="bg-[orange] rounded-sm px-[4px] ml-[5px]">
                Hub
              </span>
            </h1>
          </Link>
        </div>
        <div className="">
          <Link to={"/wishlist"}>
            <button className="mr-[1rem] sm:mr-[2rem] text-white px-[0.5rem] py-[0.5rem] outline outline-[0.5px] outline-slate-600 rounded-md hover:bg-gray-700 active:bg-gray-800">
              <BsBagHeartFill />
            </button>
          </Link>

          <Link to={"/cart"}>
            <button className="text-white px-[0.5rem] py-[0.5rem] outline outline-[0.5px] outline-slate-600 rounded-md hover:bg-gray-700 active:bg-gray-800 relative">
              <span className="absolute top-[-10px] right-[-10px] text-[0.6rem] sm:text-[0.7rem] bg-orange-500 px-[0.3rem] sm:px-[0.4rem] flex items-center justify-center overflow-hidden rounded-lg">
                0
              </span>
              <HiShoppingCart />
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
