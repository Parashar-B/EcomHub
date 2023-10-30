import {useContext, useEffect} from 'react';
import { RootContext } from "../App";
import { IoMdClose } from "react-icons/io";
import { MdAddCircle } from "react-icons/md";
import { BsBagHeartFill } from "react-icons/bs";
import { TbListCheck } from "react-icons/tb";
import { IoArrowBack } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AddToWishList(props) {
  const [showFirstSection, setShowFirstSection] = useState(true);
  const [sectionId, setSectionId] = useState(1);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedList, setSelectedList] = useState("");
  const [newWishlistName, setNewWishlistName] = useState("");
  const [placeHolder, setPlaceHolder] = useState("select a option from list");
  const {wishList, setWishList} = useContext(RootContext);

  const existingList = [
    {
      name: "folder1",
      items: [
        {

        },
        {

        }
      ]
    }
  ];


  function generateExistingList(){
    
  }

  function handleCreateNewWishList(){
    wishList
    ?
    setWishList([
      ...wishList,
      {
        name:newWishlistName,
        products: [
          props.product
        ]
      }
    ]) 
    :
    setWishList([
      {
        name:newWishlistName,
        products: [
          props.product
        ]
      }
    ])

      props.handleShowModal(false);
  }


  useEffect(()=>{
  })

  console.log(wishList)

  return (
    <div
      className="bg-[rgba(128,128,128,0.5)] flex items-center justify-center fixed w-[100%] h-[100vh] top-[0vh]"
      onClick={() => {
        props.handleShowModal(false);
      }}
    >
      <div
        className="bg-gray-600 w-[80%] sm:w-[400px] h-[400px] outline outline-[0.5px] outline-slate-500 rounded-md px-[0.5rem] py-[0.5rem]"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="flex justify-between items-center h-[10%]">
          <BsBagHeartFill className="text-[1.2rem] text-white" />
          <IoMdClose
            className="bg-orange-200 w-[1.5rem] h-[1.5rem] rounded-xl p-1 cursor-pointer"
            onClick={() => {
              props.handleShowModal(false);
            }}
          />
        </div>
        <div className="bg-gray-100 h-[90%]">
          <h3 className="bg-gray-300 p-[1rem] h-[15%] font-semibold">
            Another wish to the
            <span className="before:bg-orange-300"> Wishlist</span>
          </h3>
          <div className="h-[85%]">
            {showFirstSection ? (
              <motion.div
                className="flex flex-col justify-center items-center h-full"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
              >
                <button
                  className="hover:bg-gray-300 flex items-center justify-center outline outline-[0.5px] outline-slate-300 rounded-md px-[0.5rem] py-[0.2rem] mb-[2rem]"
                  onClick={() => {
                    setShowFirstSection(false);
                  }}
                >
                  <TbListCheck className="text-[red] mr-[0.5rem]" /> Add to
                  Existing List
                </button>
                <button
                  className="flex hover:bg-gray-300 justify-center items-center w-fit outline outline-[0.5px] outline-slate-300 rounded-md px-[0.5rem] py-[0.2rem]"
                  onClick={() => {
                    setShowFirstSection(false);
                    setSectionId(0);
                  }}
                >
                  <MdAddCircle className="mr-[0.5rem] text-blue-800" />
                  Create New List
                </button>
              </motion.div>
            ) : (
              <motion.div
                className="h-full flex flex-col justify-center items-center"
                initial={{ x: 200 }}
                animate={{ x: 0 }}
              >
                <div className="w-full h-[15%] flex items-center px-[1rem]">
                  <button
                    className="hover:bg-gray-300 p-[0.5rem] rounded-[50%]"
                    onClick={() => {
                      setShowFirstSection(true);
                      setShowOptions(false);
                      setSelectedList(null);
                      setPlaceHolder("select a option from list");
                    }}
                  >
                    <IoArrowBack />
                  </button>
                </div>
                {sectionId ? (
                  <div className="w-full h-[85%] flex flex-col items-center">
                    <div className="relative">
                      <div
                        className="bg-gray-200 outline outline-[1px] outline-slate-400 text-[0.9rem] text-gray-700 w-[220px] h-[40px] rounded-md flex justify-between items-center px-[1rem] py-[0.2rem] cursor-pointer"
                        onClick={() => {
                          setShowOptions(!showOptions);
                        }}
                      >
                        {placeHolder}
                        <BsChevronDown
                          className={`${
                            showOptions ? "rotate-0" : "rotate-[-90deg]"
                          }`}
                        />
                      </div>
                      <div
                        className={`${
                          showOptions ? "block" : "hidden"
                        } absolute left-[5px] bg-gray-100 h-[170px] w-[210px] mt-[0.5rem] px-[0.2rem] py-[0.2rem] outline outline-[1px] outline-slate-400 overflow-y-scroll`}
                      >
                        {wishList?.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className="bg-gray-200 hover:bg-gray-300 flex items-center text-[0.8rem] h-[1.8rem] px-[0.6rem] py-[0.1rem] rounded my-[0.2rem] cursor-pointer overflow-hidden scroll-smooth"
                              onClick={() => {
                                setSelectedList(item);
                                setPlaceHolder(item);
                                setShowOptions(false);
                              }}
                            >
                              {item}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <button
                      className={`${
                        selectedList
                          ? "bg-green-700 cursor-pointer"
                          : "bg-gray-300 cursor-not-allowed"
                      } text-white mt-[2rem] px-[1rem] py-[0.2rem] rounded-md`}
                      disabled
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="w-full h-[85%] flex flex-col items-center">
                    <input
                      type="text"
                      value={newWishlistName}
                      placeholder="Enter new wishlist name"
                      className="px-[0.5rem] py-[0.3rem] outline outline-[1px] outline-slate-400 rounded"
                      onChange={(event) => {
                        setNewWishlistName(event.target.value);
                      }}
                    />
                    <button
                      className={`${
                        newWishlistName
                          ? "bg-green-700 cursor-pointer"
                          : "bg-gray-300 cursor-not-allowed"
                      } text-white mt-[2rem] px-[1rem] py-[0.2rem] rounded-md`}

                      onClick={handleCreateNewWishList}
                    >
                      Save
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
