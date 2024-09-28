import { useDispatch } from "react-redux";
import "./App.css";
import { handleAllProductsAction, handleSingleProductAction } from "./store/productSlice";
import { NavLink, Outlet } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(handleSingleProductAction({
      title:'Tihomir je car',
      desc:'Bingo Redux',
      price:'$9999'
    }))
  },[])

  return (
    <div className="text-center mt-4">
      <h2>REDUX TOOLKIT</h2>
      <ul className="flex gap-4 justify-center">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/products"}>Products</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default App;
