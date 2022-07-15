import React from "react";
import {
  SearchRounded,
  ShoppingCartRounded,
  BarChart,
} from "@mui/icons-material";

function Header() {
  return (
    <header>
      <img src="" alt="" />

      <div className="inputBot">
        <SearchRounded classNamr="searchIcon" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_content">
          <p>2 3</p>
        </div>
      </div>

      <div className="profileContainer">
        <div className="imgBox">
          <img src="" alt="" />
        </div>
        <h2 className="userName">Esteban Luna</h2>
      </div>

      <div className="toggleManu">
        <BarChart className="toggleIcon" />
      </div>
    </header>
  );
}

export default Header;
