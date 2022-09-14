import React from 'react'
import "../style/footer.scss";
import Logo from "../assets/images/logo.svg";
import uparrow from "../assets/images/uparrow.png";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <>
      <footer className='p-2 bg-primary'>
        <div className="container">
          <div className="footer-container">
            <div className="footer-logo pb-4">
              <Link to="#">
                <img src={Logo} alt="The Chef Lane" />
              </Link>
            </div>
            <div className="footer-right mb-2">
              <div className="nav-list pe-5 text-end text-white">
                <Link className='d-block py-1 nav-link' to="#">Mission</Link>
                <Link className='d-block py-1 nav-link' to="# ">FAQ</Link>
                <Link className='d-block py-1 nav-link' to="# ">Privacy Policy</Link>
                <Link className='d-block py-1 nav-link' to="# ">Terms and Conditions</Link>
                <Link className='d-block py-1 nav-link' to="# ">Licenses & Registrations</Link>
              </div>
              <div className="contact-details">
                <p>Get in touch with us at <br /><span className='text-secondary border-bottom border-secondary'>support@thecheflane.com </span></p>
                <button className='btn text-primary py-1 fw-bold bg-white border'>Contact us</button>
              </div>
            </div>
            <img onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} className='up_arrow' src={uparrow} alt="" />
          </div>
          <p >Copyright © 2021 Specialist Foods. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer