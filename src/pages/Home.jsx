import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Home() {
  const [productCategories, setProductCategories] = useState([]);
  const location = useLocation();
  const fullPath = location.pathname;

  const getProductCategories = async () => {
    let response = await axios({
      url: "https://dummyjson.com/products/categories",
      method: "GET"
    });

    setProductCategories(response.data);
  };

  useEffect(() => {
    getProductCategories();
  }, []);

  return (
    <>
      <div className="pt-[50px] pb-[30px] px-[7px] sm:px-[50px] flex flex-col items-center">
        <div className="w-[95%]">
          <h3 className="text-[15px] font-semibold pb-[1rem] pt-[2rem]">
            Select a product category from below
          </h3>
        </div>
        {productCategories?.length === 0 ? (
          <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 outline outline-[1px] outline-slate-400 p-[1rem] w-[95%] rounded shadow-[0px_5px_10px_lightgray]">
            <h1 className="sm:text-[2rem] font-bold ">
              Hold tight & keep Clam, we are fetching the data
            </h1>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-gray-500 to-orange-300 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 justify-items-center outline outline-[1px] outline-slate-400 p-[1rem] w-[95%] rounded shadow-[0px_5px_10px_lightgray]">
            {productCategories?.map((category, index) => {
              return (
                <Link key={index} to={`/products/${category}`}>
                  <div className="flex items-center justify-center w-[130px] max-sm:text-[0.6rem] sm:w-[200px] h-[80px] sm:h-[100px] my-[10px] outline outline-[1px] outline-slate-400 bg-white rounded active:shadow-none hover:shadow-[0px_5px_10px_black] cursor-pointer">
                    {category.toUpperCase()}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
