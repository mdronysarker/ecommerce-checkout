import Flex from "./layout/Flex";
import List from "./layout/List";
import ListItem from "./layout/ListItem";
import { AiOutlineBars } from "react-icons/ai";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Search from "./Search";

const NavBar = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    function scrollWidth() {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }

    window.addEventListener("resize", scrollWidth);
  }, []);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <nav className="py-8">
      <div className="max-w-container mx-auto p-2">
        <Flex className="lg:flex lg:items-center">
          <div className="lg:w-3/12">hello</div>
          <div className="w-auto lg:w-[600px] relative">
            <Search
              className="w-full py-4 px-5 placeholder:text[#c4c4c4] font-dm text-sm"
              placeholder="Search Book"
            />
            <FaSearch className="absolute top-4 right-4" />
          </div>
          <div className="lg:w-9/12 w-full ">
            <AiOutlineBars
              onClick={handleShow}
              className="block lg:hidden ml-auto absolute top-2.5 right-2.5 "
            />
            {show && (
              <List className="lg:flex lg:justify-end lg:gap-x-10 mt-5 lg:mt-0">
                <ListItem
                  className="font-dm text-sm font-regular  hover:font-bold my-2.5 lg:my-0"
                  itemname={"Home"}
                  href="/"
                />
                <ListItem
                  className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0"
                  itemname={"shop"}
                  href="/shop"
                />
                <ListItem
                  className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0"
                  itemname={"About"}
                  href="/about"
                />

                <ListItem
                  className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0"
                  itemname={"Contact"}
                  href="/contact"
                />
              </List>
            )}
          </div>
        </Flex>
      </div>
    </nav>
  );
};

export default NavBar;
