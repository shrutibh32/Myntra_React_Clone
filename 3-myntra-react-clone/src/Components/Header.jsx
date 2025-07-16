import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
   const bag = useSelector((store) => store.Bags);
  
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img
            className="myntra-logo"
            src="images/myntra_logo.webp"
            alt="Myntra_logo"
          />
        </Link>
      </div>
      <nav className="navbar-container">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search-bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          placeholder="Search for products, brands and more"
          className="desktop-searchBar"
        />
      </div>
      <div className="action-bar">
        <div className="action_container">
        <span> <CgProfile /></span> 
          <span className="desktop-userTitle action_item">Profile</span>
        </div>
        <div className="action_container">
        <span><FaRegHeart /></span>
          <span className="desktop-userTitle action_item">Whishlist</span>
        </div>
        <Link className="action_container" to="/bag">
        <span><FaShoppingBag /></span>
          <span className="desktop-userTitle action_item">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
}
