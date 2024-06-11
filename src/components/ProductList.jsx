import { useContext, useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import axios from "axios";

export default function BookList() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:5000/getProductData")
      .then((res) => setProductData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(productData);

  return (
    <div className="md:flex md:flex-wrap md:justify-between">
      {productData.map((item) => (
        <ProductCard key={item._id} item={item} />
      ))}
    </div>
  );
}
