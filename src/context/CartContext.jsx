import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const userId = "659eb8ff065e9d74893c8196";
  const [key, setKey] = useState(0); // Add a key state

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!userId) {
          return;
        }

        const response = await axios.post(
          "http://localhost:5000/findCartItem",
          { userId }
        );

        const allData = response.data;
        const newData = allData.map((data) => ({ ...data, quantity: 1 }));
        setProductList(newData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [userId, key]);

  const contextValue = {
    productList,
    setProductList,
    loading,
    setLoading,
    refreshCart: () => setKey((prevKey) => prevKey + 1), // Function to force a remount
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
