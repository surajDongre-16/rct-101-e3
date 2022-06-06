import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const [value,setValue]=useState({username:"abcd@gmail.com", password:"1234"})
    const {isAutherized,login,logout} =useContext(AuthContext)
   
  return (
    <div>
      <input data-cy="login-email" value={value.username} onChange={(e)=>setValue(e.target.value)} placeholder="enter email" />
      <input data-cy="login-password" type="password" value={value.password} onChange={(e)=>setValue(e.target.value)} placeholder="enter password" />
      <button data-cy="login-submit" onClick={()=>{
        if(isAutherized) {
          logout()
          console.log("logout ")
        }
        else {
          console.log("userlogin")
          login(value.username,value.password)
          
        }
      }}>Login</button>
    </div>
  );
};

export default Login;
