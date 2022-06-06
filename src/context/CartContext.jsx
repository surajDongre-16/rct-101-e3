import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems,setCartItems]=useState([])
  const [products,setProducts]=useState([])
  const [addItem, setAddItem] = useState()
 useEffect(()=>{
    axios.get("http://localhost:8080/cartItems")
    .then((res)=>{
        setCartItems(res.data)
        console.log(res.data)
    })

    axios.get("http://localhost:8080/products")
    .then((res)=>{
        setProducts(res.data)
    })

  },[])

  const addCart = () =>{
    
    setAddItem(cartItems.length+1)
  }

  return <CartContext.Provider value={{cartItems,products,addCart,addItem}}>{children}</CartContext.Provider>;
};
