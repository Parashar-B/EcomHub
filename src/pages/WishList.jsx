import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { RootContext } from "../App";
import Breadcrumb from "../components/Breadcrumb";
import {HiOutlineDotsVertical} from 'react-icons/hi'
import {IoArrowBack} from 'react-icons/io5'
import {FcRating} from 'react-icons/fc'


export default function WishList() {
  const location = useLocation();
  const fullPath = location.pathname;
  const {rootWishList} = useContext(RootContext);
  const [openFolder, setOpenFolder] = useState(false);
  const [selectedList, setSelectedList] = useState(null);

  console.log(selectedList)

    return(
      <div className="py-[50px] px-[1rem] sm:px-[5rem]">
        <Breadcrumb relativePath={fullPath} />
        <div className="outline outline-[1px] outline-slate-400 rounded shadow-[0px_5px_10px_lightgray] min-h-[75vh] p-[1rem] flex flex-wrap">
          {
            openFolder 
            ?
              <div className=" w-full h-full">
                <div className="h-[6%]">
                  <button
                      className="hover:bg-gray-300 p-[0.5rem] rounded-[50%]"
                      onClick={() => {
                        setOpenFolder(false)
                      }}
                    >
                    <IoArrowBack />
                  </button>
                </div>
                <div className="h-[94%] grid md:grid-cols-3 xl:grid-cols-4 justify-items-center">
                  {
                    selectedList?.products?.map((product,index)=>{
                      return(
                        <div key={index} className="bg-white relative h-[350px] my-[10px] max-sm:w-full sm:w-[90%] sm:mx-[1rem] outline outline-[1px] outline-slate-400 rounded active:shadow-none hover:shadow-[0px_5px_10px_black] cursor-pointer">
                          <Link to={`/productDetails/${product.id}`}>
                            <div className="h-[50%] flex items-end">
                              <img
                                src={product?.images[0]}
                                alt="img"
                                className="w-full h-[95%] object-contain"
                              />
                            </div>
                            <div className="h-[50%] px-[0.6rem] bg-gray-100">
                              <div className="h-[70%] py-[0.5rem]">
                                <h6 className="text-[0.6rem] text-[gray] font-bold h-[10%] flex items-center">
                                  {product?.brand}
                                </h6>
                                <div className="flex justify-between items-center h-[22%]">
                                  <h1 className="w-[80%] h-full pr-[0.5rem] font-semibold text-ellipsis overflow-hidden ...">
                                    {product?.title}
                                  </h1>
                                  <h6 className="text-[0.7rem] w-[20%] bg-gray-300 font-semibold flex outline outline-1 outline-green-800 rounded-lg">
                                    <span className="w-[65%] flex justify-center items-center">
                                      {product?.rating}
                                    </span>
                                    <span className="w-[35%] flex justify-start items-center">
                                      <FcRating className="w-full h-[80%]" />
                                    </span>
                                  </h6>
                                </div>
                                <h4 className="py-[0.2rem] text-[0.7rem] h-[51%] text-justify text-ellipsis overflow-hidden ...  ">
                                  {product?.description}
                                </h4>
                                <div className="h-[17%] py-[0.7rem] flex items-center">
                                  <h2 className="text-[0.8rem] font-semibold">
                                    ₹{product?.price}
                                    <span className="text-[gray] ml-[0.3rem] line-through">
                                      {(
                                        (product.price * 100) /
                                        (100 - product?.discountPercentage)
                                      ).toFixed(2)}
                                    </span>
                                  </h2>
                                  <h2 className="text-[0.8rem] font-semibold ml-[0.5rem] text-green-900">
                                    {product?.discountPercentage}% off
                                  </h2>
                                </div>
                              </div>
                              
                            </div>
                          </Link>
                          <div className="absolute bottom-2 right-2 flex items-center justify-end">
                                <button className="text-[0.8rem] text-white bg-green-900 px-[0.7rem] py-[0.3rem] rounded"
                                  onClick={(e)=>{
                                    e.stopPropagation();
                                  }}  
                                >
                                  Add To Cart
                                </button>
                          </div>
                        </div>
                      )
                      
                    })
                  }
                </div>
              </div>
            :
              rootWishList.length > 0 ?
                rootWishList.map((list,index)=>{
                  return(
                    <div key={index} className="relative outline outline-[1px] outline-blue-200 w-[150px] h-[150px] m-[1rem] rounded cursor-pointer hover:shadow-[0px_5px_10px_lightgray]"
                      onClick={()=>{
                        setSelectedList(list);
                        setOpenFolder(true)
                      }}
                    >
                      <div className="h-[80%] ">
                        <img 
                          src={list.products[list.products.length-1].thumbnail} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="h-[20%] bg-blue-100 flex items-center justify-center text-[0.7rem] font-semibold">
                        <h1>{list.name}</h1>
                      </div>
                      <div className="absolute top-0 right-0 bg-gray-100 w-[25px] h-[25px] rounded-full flex items-center justify-center ">
                        <HiOutlineDotsVertical size='15px'/>
                      </div>
                    </div>
                  )
                })
              :
              <div className="h-full w-full flex items-center justify-center">
                <h1 className="text-gray-500"> Nothing on WishList</h1>
              </div>
          }
        </div>
      </div>
    )
  }
  