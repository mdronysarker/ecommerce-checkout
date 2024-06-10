import Flex from "../components/layout/Flex";
import { ImCross } from "react-icons/im";

const Cart = () => {
  return (
    <div className="max-w-container mx-auto p-2.5">
      <h2 className="mb-10 text-4xl font-bold font-dm">Cart</h2>
      <div className="bg-[#F5F7F7] py-[34px] px-5 ">
        <Flex className="flex justify-between">
          <div className="w-[23%]">Product</div>
          <div className="w-[23%]">Price</div>
          <div className="w-[23%]">Quantity</div>
          <div className="w-[23%]">Total</div>
        </Flex>
      </div>
      <div className="py-[34px] px-5">
        <Flex className="flex items-center justify-between">
          <div className="w-[23%] relative">
            <Flex className="flex items-center justify-between">
              <ImCross className="cursor-pointer font-xl w-[100%]" />
              <div className="w-[100%] mb-6">
                <img src="" alt="hello" />
              </div>
              <h3 className="font-dm font-bold text-sm text-primary w-[100%]">
                product name
              </h3>
            </Flex>
          </div>
          <div className="w-[23%]">product.price</div>
          <div className="w-[23%] ">
            <span className=" font-dm text-[16px] border border-[#767676] py-[3px] px-[21px]">
              <button>-</button>
              <span className="mx-[10px]"> product.quantity</span>
              <button>+</button>
            </span>
          </div>
          <div className="w-[23%] font-dm text-[#262626] font-bold text-2xl ">
            product.price * product.quantity
          </div>
        </Flex>
      </div>

      <>
        <div>
          <h3 className="flex justify-end text-xl font-bold font-dm">
            Cart Totals
          </h3>
        </div>
        <div className="mt-8 ">
          <Flex className="flex justify-end gap-x-8 ">
            <h4>Total Price </h4>
            <p>$ totalPrice</p>
          </Flex>
        </div>
        <div className="flex justify-end mt-4">
          <button className="px-24 py-4 text-sm font-bold text-white bg-primary font-dm">
            Checkout
          </button>
        </div>
      </>
    </div>
  );
};

export default Cart;
