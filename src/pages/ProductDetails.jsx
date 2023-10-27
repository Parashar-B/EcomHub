import { useLocation } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

export default function ProductDetails() {
  const location = useLocation();
  const fullPath = location.pathname;
  return (
    <div className="">
      <Breadcrumb relativePath={fullPath} />
    </div>
  );
}
