import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import './Navbar.css'
import { Link, Element } from 'react-scroll';
const Navbar = () => {

  const [sticky,setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])

  return (
    <div className={`position-fixed start-0 end-0 top-0 z-3 ${sticky ? 'dark-nav' : ''}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand  d-flex justify-content-center " href="#">
            <img src={assets.logo} alt="" style={{ height: `40px` }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-white-lg"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item mx-lg-3 ">
                <Link className="nav-link text-white fw-normal" aria-current="page"  to='landing' smooth={true} offset={0} duration={0}>
                  Home
                </Link>
              </li>
              <li className="nav-item mx-lg-3 ">
                <Link className="nav-link text-white fw-normal" to='program' smooth={true} offset={-10} duration={0}>
                  Program
                </Link>
              </li>
              <li className="nav-item mx-lg-3 ">
                <Link className="nav-link text-white fw-normal" to='about' smooth={true} offset={-20} duration={0}>
                  About us
                </Link>
              </li>
              <li className="nav-item mx-lg-3 ">
                <Link className="nav-link text-white fw-normal" to='campus' smooth={true} offset={0} duration={0}>
                  Campus
                </Link>
              </li>
              <li className="nav-item mx-lg-3 ">
                <Link className="nav-link text-white fw-normal" to='testimonials' smooth={true} offset={-70} duration={0}>
                  Testimonials
                </Link>
              </li>
              <li className="nav-item mx-lg-3  bg-white rounded-pill px-3">
                <Link className="nav-link" to='contact' smooth={true} offset={-50} duration={0}>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
