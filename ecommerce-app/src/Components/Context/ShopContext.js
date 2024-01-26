import React, { createContext, useState } from "react";
import allProduct from "../../Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < allProduct.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setcartItem] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = allProduct.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItem[item];
      }

      console.log("item", totalAmount);
    }

    return totalAmount;
  };

 const getTotalCartItem = ()=>{
    let totalItem = 0 ;
    for(const i in cartItem)
    {
      if(cartItem[i]>0){
        totalItem+= cartItem[i]
      }
    }

    return totalItem
 }



  const contextValue = {
    getTotalCartAmount,
    allProduct,
    cartItem,
    addToCart,
    removeFromCart,
    getTotalCartItem
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
