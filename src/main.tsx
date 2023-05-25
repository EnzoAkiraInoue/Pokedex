import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/index.tsx";
import Pokedex from "./components/Pokedex/index.tsx";

const router = createBrowserRouter([
  {
    path: "/Pokedex",
    element: <Pokedex />,
  },
  {
    path: "/",
    element:   <Home />,
   
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
