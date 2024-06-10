import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ProductListingPage from "./pages/ProductListingPage";
import RootLayout from "./Layout/RootLayout";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<ProductListingPage />} />
        <Route path="about" />
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}
