import { useLocation } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import {HiOutlineDotsVertical} from 'react-icons/hi'


export default function WishList() {
  const location = useLocation();
  const fullPath = location.pathname;

    return(
      <div className="py-[50px] px-[1rem] sm:px-[5rem]">
        <Breadcrumb relativePath={fullPath} />
        <div className="outline outline-[1px] outline-slate-400 rounded shadow-[0px_5px_10px_lightgray] h-[75vh] p-[1rem] flex flex-wrap">
          {
            Array.from(Array(10)).map(()=>{
              return(
                <div className="relative outline outline-[1px] outline-blue-200 w-[150px] h-[150px] m-[1rem] rounded cursor-pointer hover:shadow-[0px_5px_10px_lightgray]">
                  <div className="h-[80%] ">

                  </div>
                  <div className="h-[20%] bg-blue-100 flex items-center justify-center text-[0.7rem] font-semibold">
                    <h1>Folder name</h1>
                  </div>
                  <div className="absolute top-0 right-0 bg-gray-100 w-[25px] h-[25px] rounded-full flex items-center justify-center ">
                    <HiOutlineDotsVertical size='15px'/>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
  