import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Bartoggle from '/images/icon-menu.svg';
import closeicon from "/images/icon-close.svg";
import logo from '/images/logo.svg'
export default function Navbar(props) {
  const { cartProducts } = props;
  const [showCart, setShowCart] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="nav-wrapper">
        <div className="left-nav">
          <nav className="navbar">
            <button className="menu-toggle" onClick={toggleMenu}>
              <img src={Bartoggle} />
            </button>
            <img src={logo} />
            <ul className={`menu ${isOpen ? "open" : ""}`}>
              <button className="close-menu" onClick={toggleMenu}>
                <img src={closeicon}/>
              </button>
              {/* <li>
                <Link to="/" className="sneakers">Sneakers</Link>
              </li> */}
              <li>
                <Link to="/collections">Collections</Link>
              </li>
              <li>
                <Link to="/men">Men</Link>
              </li>
              <li>
                <Link to="/women">Women</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="right-nav">
          <div className='cartImg' onClick={()=>{setShowCart(true)}}>
            <img src={'/images/icon-cart.svg'} alt="Cart" />
          {cartProducts.length > 0 && <div className='circle'><span>{cartProducts[0].noOfBuying}</span></div>}
          
          </div>
          <img className="avatar" src={'/images/image-avatar.png'} alt="Avatar" />
        </div>
      </div>
      <hr />
    </>
  );
}