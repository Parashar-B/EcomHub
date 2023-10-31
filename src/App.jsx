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

  const [wishlist, setWishList] = useState([]);

  return (
    <div className="relative">
      <RootContext.Provider value={{wishlist, setWishList}}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/products/:slug"} element={<Products />} />
            <Route path={"/wishlist"} element={<WishList />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/productDetails/:id"} element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
      </RootContext.Provider>
    </div>
  );
}
