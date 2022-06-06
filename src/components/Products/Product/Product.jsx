import React from "react";
import { useEffect } from "react";
import axios from "axios"
import { useState } from "react";
import styles from "./product.module.css"
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = () => {
  // Note: this id should come from api
  // const product = { id: 1 };
  const {products,cartItems,addCart}=useContext(CartContext)

  return (
    <div className={styles.grid}>
      {products.map((pro)=>(
        <div data-cy={`product-${pro.id}`} className={styles.box}>
            <h3 data-cy="product-name">{pro.name}</h3>
            <h6 data-cy="product-description">{pro.description}</h6>
            <button data-cy="product-add-item-to-cart-button" onClick={()=>addCart()}>Add To Cart</button>
            <div>
              <button data-cy="product-increment-cart-item-count-button">+</button>
                {/* {pro.id > 3 ? <span data-cy="product-count">1</span> : ""} */}
                {cartItems.map((cart)=>{
                  if(cart.id===pro.id){
                    return <span data-cy="product-count">{cart.count}</span>
                  }
                 })} 
              
              <button data-cy="product-decrement-cart-item-count-button" >-</button>
              <button data-cy="product-remove-cart-item-button">Remove from cart</button>
            </div>
      </div>
      ))}
      
    </div>
    
  );
};

export default Product;
