import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../components/Products/Products";
import Cart from "../components/Cart/Cart";
export let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
