import React from "react";

import { loader as HomeLoader } from "./pages/Home";
import { loader as HeadphonesLoader } from "./pages/Headphones"
import { loader as SpeakersLoader } from "./pages/Speakers"
import { loader as EarphonesLoader } from "./pages/Earphones"
import { loader as SingleProductLoader } from "./pages/SingleProduct"
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Headphones,
  Speakers,
  Earphones,
  Checkout,
  Home,
  Trash,
  SingleProduct,
} from "./pages";
import Error from "./pages/Error";
import Login from "./pages/Login";



function App() {


  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: "/headphones",
          element: <Headphones />,
          loader: HeadphonesLoader
        },
        {
          path: "/speakers",
          element: <Speakers />,
          loader: SpeakersLoader
        },
        {
          path: "/earphones",
          element: <Earphones />,
          loader: EarphonesLoader
        },
        {
          path: "/product/:slug",
          element: <SingleProduct />,
          loader: SingleProductLoader
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/trash",
          element: <Trash />,
        },  
        {
          path: "/login",
          element: <Login />,
        },

      ],
    },
    
  ]);
  
  return <>{ <RouterProvider router={routes}/>}</>
}

export default App;
