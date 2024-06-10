import React, { useState } from "react";
import Flex from "../components/layout/Flex";
import LeftSideBar from "../components/LeftSideBar";
import Pagination from "../components/Pagination";
import ProductList from "../components/ProductList";

export default function ProductListingPage() {
  const [showNumber, setShowNumber] = useState(12);

  return (
    <>
      <div className="max-w-container mx-auto p-2.5">
        <Flex className="flex gap-x-10 ">
          <div className="w-[25%]  mt-[102px]">
            <LeftSideBar />
          </div>
          <div className="w-[75%] relative">
            <ProductList />
            <Pagination itemsPerPage={showNumber} />
          </div>
        </Flex>
      </div>
    </>
  );
}
