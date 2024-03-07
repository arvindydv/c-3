import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <nav>
      <div className="first">
        <div className="flex">
          <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
          <h2>GeekFoods</h2>
        </div>
      </div>

      <div className="second">
        <ul className="flex">
          <li>Home</li>
          <li>Quote</li>
          <li>Resturants</li>
          <li>Foods</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="thrid">
        <button>Get started</button>
      </div>
    </nav>
  );
};
