import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const {isAutherized , logout}=useContext(AuthContext)
  const {addItem}=useContext(CartContext)
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/">LOGO</Link>
      <span data-cy="navbar-cart-items-count">Cart : {addItem  }</span>
      <button data-cy="navbar-login-logout-button" onClick={logout} >{ isAutherized ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
