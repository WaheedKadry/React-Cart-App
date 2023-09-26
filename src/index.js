import React from "react";
import ReactDOM from "react-dom/client";
// react router dom
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/RouterPage";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./RTK/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
