import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/vecteezy_book-read-library-study-solid-icon-vector-illustration_6064882.jpg";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import login from '../Login/Login';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  const navigation = useNavigate();
    const handleClick = () => {
        navigation('/login');
    }

  return (
    <div>
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>Library</span>
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "book" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = "about" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'>about</Link></li>
            <li className='nav-item'>
              <button onClick = {handleClick} className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'>Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Routes>
            <Route path="/login" component={login} />
        </Routes>
    </div>
  )
}

export default Navbar