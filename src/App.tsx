import React, { useState } from "react";
import { Layout } from "@/components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Shop } from "./pages";
import { mainContext } from "./context/mainContext";

const App: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [mode, setMode] = useState(
    JSON.parse(localStorage.getItem("mode") + "")
  );
  const [productID, setProductID] = useState(0)

  const contextValues = {
    modal,
    setModal,
    mode,
    setMode,
    productID,
    setProductID
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/shopping/:slug",
          element: <Shop />,
        },
      ],
    },
  ]);
  return (
    <mainContext.Provider value={contextValues}>
      <RouterProvider router={router} />
    </mainContext.Provider>
  );
};

export default App;
