import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Products from "./pages/Products";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <div className="relative">
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
    </div>
  );
}
