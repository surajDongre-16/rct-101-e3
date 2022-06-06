import React from "react";
import { useContext } from "react";
import Products from "../components/Products/Products"
import { AuthContext } from "../context/AuthContext";
const Home = () => {
  const {isAutherized}=useContext(AuthContext)

  if(isAutherized){
    return(
    
      <div>
        <Products/>
      </div>
    )
  }
  
};

export default Home;
