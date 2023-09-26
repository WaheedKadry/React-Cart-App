import React from "react";
import { Outlet } from "react-router-dom";
import AppNavbar from "./components/navbar/Navbar";
function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Outlet />
    </div>
  );
}

export default App;
