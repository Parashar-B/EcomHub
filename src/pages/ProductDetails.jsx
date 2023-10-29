import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Breadcrumb from "../components/Breadcrumb";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";
import {FcRating} from 'react-icons/fc'

export default function ProductDetails() {
  const location = useLocation();
  let { id } = useParams();
  const fullPath = location.pathname;
  const [showGotoCart, setShowGotoCart] = useState(false);
  const [product, setProduct] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  const getProductDetails = async ()=>{
    let response = await axios({
      url:`https://dummyjson.com/products/${id}`,
      method:'GET'
    })

    setProduct(response.data);
    setSelectedImg(response.data.images[0])
  }

  useEffect(()=>{
    getProductDetails();
  },[])

  return (
    <div className="py-[50px] px-[1rem] sm:px-[5rem]">
      <Breadcrumb relativePath={`/products/${product?.category}/${product?.title}`} />
      <div className="outline outline-1 outline-gray-300 h-[70vh] flex">
        <div className="w-[45%] flex p-[0.5rem]">
          <div className="w-[20%] h-[90%] border-[1px] border-gray-300">
            <button className="w-full h-[7%] bg-gray-300 flex items-center justify-center ">
              <IoIosArrowUp size="2rem" className="text-gray-400" />
            </button>
            <div className="h-[86%] p-[0.1rem] overflow-hidden">
              {product?.images?.map((pic,index) => {
                return(
                  <div key={index} className={`bg-gray-200 h-[75px] my-[0.1rem] cursor-pointer ${pic === selectedImg?'border-2 border-blue-800':'border-none'}`}
                    onClick={()=>{
                      setSelectedImg(pic)
                    }}
                  >
                    <img
                      src={pic}
                      alt="img"
                      className="w-full h-full object-contain"
                    />
                  </div>
                );
              })}
            </div>
            <button className="w-full h-[7%] bg-gray-300 flex items-center justify-center">
              <IoIosArrowDown size="2rem" />
            </button>
          </div>
          <div className="w-[80%] p-[0.2rem]">
            <div className="outline outline-1 outline-gray-300 h-[90%] flex items-center">
              <img
                src={selectedImg}
                alt="img"
                className="w-full h-full object-contain hover:cursor-crosshair"
              />
            </div>
            <div className=" h-[10%] flex justify-between items-end">
              {showGotoCart ? (
                <button className="bg-blue-500 text-white w-[49%] h-[90%]">
                  Go to Cart
                </button>
              ) : (
                <button className="bg-green-600 text-white w-[49%] h-[90%] flex justify-center items-center">
                  <HiShoppingCart className="mr-[0.5rem]" />
                  Add to Cart
                </button>
              )}
              <button className="bg-orange-500 text-white w-[49%] h-[90%] flex justify-center items-center">
                <IoBagCheckOutline className="mr-[0.5rem]" />
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-[55%] bg-blue-100 px-[0.5rem]">
          <div className="h-[5%] bg-green-200 flex items-center">
            <h1 className="font-semibold text-gray-700 text-[0.9rem]">{product?.brand?.toUpperCase()}</h1>
          </div>
          <div className="h-[15%] bg-gray-300 flex flex-col justify-around">
            <h3 className="text-[1.3rem]">{product?.title}</h3>
            <h6 className="text-[0.7rem] w-[48px] h-[25%] bg-gray-300 font-semibold flex outline outline-1 outline-green-800 rounded-xl">
              <span className="w-[60%] flex justify-center items-center">
                {product?.rating}
              </span>
              <span className="w-[40%] flex justify-start items-center">
                <FcRating className="w-full h-[80%]" />
              </span>
            </h6>
          </div>
          <div className="h-[80%] bg-yellow-100"></div>

          {/* div to show zoomed details of the selected img */}
          {/* <div className="bg-red-100 absolute top-0 left-0 w-full h-full">

          </div> */}
        </div>
      </div>
    </div>
  );
}
