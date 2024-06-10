import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ProductListingPage from "./pages/ProductListingPage";
import RootLayout from "./Layout/RootLayout";
import Cart from "./pages/Cart";
import Checkout from "./pages/CheckoutPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<ProductListingPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}
