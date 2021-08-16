import React, { useEffect } from 'react'
import './styles/navbar.scss'
import Logo from "./img/logo.png";
import Search from "./img/search-icon.png";

const MyNav = () =>{
 
    useEffect(() => {
      document
        .querySelector(".search-switch")
        .addEventListener("click", function () {
          document.querySelector(".search-model").classList.add("fade-out");
        });
    }, []);

    return (
      <div>
        <header className="header-section">
          <div className="container">
            <ul className="main-menu-left site-menu-style">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About the Brand </a>
              </li>
              <li>
                <a href="portfolio.html">Portfolio</a>
              </li>
            </ul>
            <a href="index.html" className="site-logo">
              <img src={Logo} alt="logo.png" />
            </a>
            <ul className="main-menu-right site-menu-style">
              <li>
                <a href="elements.html">Shop </a>
              </li>
              <li>
                <a href="blog.html">News</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div className="search-switch">
            <img src={Search} alt="search-icon.png" />
          </div>
        </header>
        <div className="search-model">
          <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="search-close-switch">+</div>
            <form className="search-model-form">
              <input
                type="text"
                id="search-input"
                placeholder="Search here....."
              />
            </form>
          </div>
        </div>
      </div>
    );
}

export default MyNav
