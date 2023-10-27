import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumb from "../components/Breadcrumb";
import { AiFillHeart } from "react-icons/ai";
import { FcRating } from "react-icons/fc";
import AddToWishList from "../components/AddToWishList";

export default function Products() {
  const location = useLocation();
  let { slug } = useParams();
  const fullPath = location.pathname;
  const [showModal, setShowModal] = useState(false);

  const [allProducts, setAllproducts] = useState([]);
  const getProducts = async () => {
    let response = await axios({
      url: `https://dummyjson.com/products/category/${slug}`,
      method: "GET"
    });

    setAllproducts(response.data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="py-[50px] px-[1rem] sm:px-[5rem] flex flex-col items-center">
      <Breadcrumb relativePath={fullPath} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center outline outline-[1px] outline-slate-400 py-[1rem] px-[1.5rem] w-full rounded shadow-[0px_5px_10px_lightgray]">
        {allProducts?.length
          ? allProducts.map((product, index) => {
              return (
                <div className="bg-white relative h-[350px] my-[10px] max-sm:w-full sm:w-[90%] sm:mx-[1rem] outline outline-[1px] outline-slate-400 rounded active:shadow-none hover:shadow-[0px_5px_10px_black] cursor-pointer">
                  <Link to={"/productDetails"}>
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
                      <div className="h-[30%] flex items-center justify-end">
                        <button className="text-[0.8rem] text-white bg-green-900 px-[0.7rem] py-[0.3rem] rounded">
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </Link>
                  <div
                    className="absolute bg-gray-100 rounded top-2 right-2 w-[22px] h-[22px] flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <AiFillHeart
                      className="w-[20px] h-[20px] text-[gray] hover:text-red-400"
                      onClick={() => {
                        setShowModal(true);
                      }}
                    />
                  </div>
                </div>
              );
            })
          : Array.from(Array(5)).map((index) => {
              return (
                <div
                  key={index}
                  className="h-[350px] my-[10px] max-sm:w-full sm:w-[90%] outline outline-[1px] outline-slate-400 bg-white rounded"
                >
                  <div className="relative h-[50%] bg-gray-200 flex items-end"></div>
                  <div className="h-[50%] px-[0.6rem] bg-gray-100">
                    <div className="h-[70%] py-[0.5rem]">
                      <h6 className="text-[0.6rem] text-[gray] font-bold h-[10%] flex items-center">
                        <span className="w-[40%] h-full bg-gray-300"></span>
                      </h6>
                      <div className="flex justify-between items-center h-[22%]">
                        <h1 className="w-[60%] bg-gray-300 h-[50%] pr-[0.5rem] font-semibold text-ellipsis overflow-hidden ...">
                          <span className="w-full h-full "></span>
                        </h1>
                        <h6 className="text-[0.7rem] w-[20%] bg-gray-300 font-semibold flex outline outline-1 outline-green-800 rounded-lg">
                          <span className="h-full flex justify-center items-center"></span>
                        </h6>
                      </div>
                      <h4 className="py-[0.2rem] text-[0.7rem] h-[51%] text-justify text-ellipsis overflow-hidden ...  ">
                        <p className="w-full h-[10px] bg-gray-300 my-[5px]"></p>
                        <p className="w-full h-[10px] bg-gray-300 my-[5px]"></p>
                        <p className="w-full h-[10px] bg-gray-300 my-[5px]"></p>
                      </h4>
                      <div className="h-[15%] w-[60%] bg-gray-300">
                        <span className="text-[0.8rem] w-[80%] h-full bg-gray-300 font-semibold"></span>
                      </div>
                    </div>
                    <div className="h-[30%] flex items-center justify-end">
                      <span className="w-[50%] h-[50%] bg-gray-300"></span>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
      {showModal && <AddToWishList handleShowModal={setShowModal} />}
    </div>
  );
}
