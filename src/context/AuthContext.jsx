import React, { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate=useNavigate()
  const [isAutherized,setIsAutherized]=useState(false)
  const login=(username,password)=>{
    if(username && password)
    setIsAutherized(true)
    navigate("/products")
  }

  const logout = ()=>{
    setIsAutherized(false)
    navigate("/login")
  }


  return <AuthContext.Provider value={{isAutherized,login,logout}}>{children}</AuthContext.Provider>;
};
