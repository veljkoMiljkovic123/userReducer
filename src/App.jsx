import { useEffect, useReducer } from "react";
import "./App.css";
import ProductsService from "./services/productsService";
import { INITIAL_STATE, productsReducer } from "./store/productsReducer";

function App() {
  const [state, dispatch] = useReducer(productsReducer, INITIAL_STATE);

  function handleData() {
    //fetch start
    dispatch({ type: "FETCH_START" });

    ProductsService.getAllProducts()
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", data: res.data.products });
      })
      .catch((err) => dispatch({ type: "FETCH_ERROR" }));
  }
  if(state.error===true){
    return <h2>Tihomire imas gresku</h2>
  }
  return (
    <div>
      <h2>Reducer</h2>
      <button onClick={handleData}>FetchData</button>
      {state.isLoading ? (
        <h2>Loading...</h2>
      ) : (
        state.products.map((el, i) => {
        return <div>Card</div>
        })
      )}
    </div>
  );
}

export default App;
