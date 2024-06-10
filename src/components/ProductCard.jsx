import React from "react";
import Flex from "./layout/Flex";
import { AiFillHeart } from "react-icons/ai";
import { BiSolidCart } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  console.log(item);
  return (
    <div key={item?.bookName} className="md:w-[49%] lg:w-[32%] mb-6">
      <div className="group relative overflow-y-hidden">
        <img src={item?.image} alt="" />
        <div className="h-40 bg-white absolute bottom-[-44%] group-hover:bottom-0 left-0 w-full py-6 px-7 ">
          <Flex className="flex justify-end items-center gap-x-1 sm:gap-x-4">
            <button className="font-regular font-dm text-base text-[#6d6d6d]">
              Add to Wish List
            </button>
            <AiFillHeart className="text-base" />
          </Flex>
          <Flex className="flex justify-end items-center gap-x-1 sm:gap-x-4 mt-5">
            <button className="font-regular font-dm text-base text-[#6d6d6d]">
              Add to Cart
            </button>
            <BiSolidCart className="text-base" />
          </Flex>
        </div>
      </div>
      <div className="mb-12 md:mb-0">
        <Flex className="flex justify-between mt-0 md:mt-6">
          <Link
            to={`/book/singleProduct/${item?._id}`}
            className="font-dm text-xl font-bold"
          >
            {item?.bookName}
          </Link>
          <p className="font-dm text-base font-regular text-[#767676]">
            ${item?.price}
          </p>
        </Flex>
        <p className="font-dm text-base font-regular text-[#767676] mt-1 md:mt-4">
          {item?.bookAuthor}
        </p>
        <p className="font-dm text-base font-regular text-[#767676] mt-1 md:mt-4">
          Category: {item?.category}
        </p>
        <p className="font-dm text-base font-regular text-[#767676] mt-1 md:mt-4">
          Quntity: {item?.bookQuantity}
        </p>
      </div>
    </div>
  );
}
