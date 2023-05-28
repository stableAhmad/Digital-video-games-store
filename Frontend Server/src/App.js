import React from "react";
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home.jsx";
import Games from "./Components/Games/Games.jsx";
import Software from "./Components/Software/Software.jsx";
import Cart from "./Components/cart/cart.jsx";
import SideBar from "./Components/SideBar/SideBar";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import NotFound from "./Components/NotFound/NotFound";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import PopularNow from "./Components/PopularNow/PopularNow";


function App() {

  let routers = createBrowserRouter([{
    path: "", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "/games", element: <Games /> },
      { path: "/software", element: <Software /> },
      { path: "/cart", element: <Cart /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/PopularNow", element: <PopularNow /> },

      { path: "*", element: <NotFound /> },
    ]
  }])
  return (
    <>
      <ToastContainer ></ToastContainer>
      <RouterProvider router={routers} />
    </>
  );

}

export default App;
