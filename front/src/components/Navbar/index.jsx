import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="name">
        <h1>Pulse <span>.</span></h1>
      </div>
        <div className="pages">
          <Link className="btn" to={"/"}>
            Home
          </Link>
          <Link className="btn" >
            About us
          </Link>
          <Link className="btn">
            Restaurant
          </Link>
          <Link className="btn" to={"/add"}>
            Add
          </Link>
          <Link className="btn" to={"/basket"}>
            Basket
          </Link>
          <Link className="btn" to={"/wishlist"}>
          Wishlist
        </Link>
        </div>
        <div className="number">
          <h4> <span>Reservations</span> | 652-345 3222-11</h4>
        </div>
        <div className="burger">
            <MenuIcon/>
        </div>
    </div>
  );
};

export default Navbar;
