import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Products from "./pages/Products";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

export const RootContext = createContext();

export default function App() {

  const [rootWishList, setRootWishList] = useState([]);

  function createNewWishList(newWishListObj){
    rootWishList.length > 0 ? 
    setRootWishList([
      ...rootWishList,
      newWishListObj
    ])
    :
    setRootWishList([
      newWishListObj
    ])
  }

  function addToExistingList(selectedList, newProduct){
      const updatedList = rootWishList.map((list,index)=>{
        if(list.name === selectedList){
          list.products.push(newProduct)
        }
        return list
      })

      setRootWishList(updatedList);
  }

  console.log("Root ",rootWishList)

  return (
    <div className="relative">
      
        <BrowserRouter>
        <RootContext.Provider value={{rootWishList, createNewWishList, addToExistingList}}>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/products/:slug"} element={<Products />} />
            <Route path={"/wishlist"} element={<WishList />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/productDetails/:id"} element={<ProductDetails />} />
          </Routes>
        </RootContext.Provider>
        </BrowserRouter>
    </div>
  );
}
