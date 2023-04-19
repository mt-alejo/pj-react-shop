import React from "react";
import "../styles/Header.scss";
import icon from "../../public/icons/icon_shopping_cart.svg";
import logo from "../../public/logos/logo_yard_sale.svg";

const Header = () => {
  return (
    <nav>
      <img src={icon} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" id="logo-nav" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email">platzi@examples.com</li>
          <li className="navbar-shopping-cart">
            <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
