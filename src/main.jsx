import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//redux
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";

  const router = createBrowserRouter([
    {
      path:'/',
      element:<App />,
      errorElement: <h1>Nemam ovu stranicu sprii!!</h1>,
      children:[
        {
          path:'/',
          element:<HomePage />
        },
        {
          path:'/products',
          element:<ProductsPage />
        }
      ]
    }
  ])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
);
