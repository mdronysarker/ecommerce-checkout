import { useEffect, useState } from "react";
import axios from "axios";
import List from "./layout/List";

const LeftSideBar = () => {
  const [allCategory, setAllCategory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getAllCategory")
      .then((res) => {
        setAllCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(allCategory);

  return (
    <div className="mb-[20px]">
      <h3> Book by Category </h3>
      <List className=" mt-6 w-[263px] text-[#767676] font-regular font-dm text-sm z-50">
        {allCategory.map((category) => (
          <li
            key={category._id}
            className="py-4  hover:px-3 border-b border-solid border-[#2d2d2d] duration-100 ease-in cursor-pointer  "
          >
            {category.category}
          </li>
        ))}
      </List>
    </div>
  );
};

export default LeftSideBar;
