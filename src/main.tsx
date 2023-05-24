import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PokemonCard from "./components/PokemonCard/index.tsx";
import Home from "./pages/Home/index.tsx";

const router = createBrowserRouter([
  {
    path: "/Pokedex",
    element: <PokemonCard />,
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
