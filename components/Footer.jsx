import React from 'react';
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-wrap'>
        <div className="footer-column footer-first">
          {/* <Image src="/team-assets/team.svg" width={70} height={70} alt="brand"/> */}
          <h2>team<span className='brand-dot'>.</span></h2>
          <p>Collaboration platform for modern teams</p>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <p>Product</p>
          <p>Blog</p>
          <p>Support</p>
        </div>

        <div className="footer-column">
          <h4>Features</h4>
          <p>Screen Sharing</p>
          <p>iOS & Android Apps</p>
          <p>File Sharing</p>
          <p>User Management</p>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>info@teamapp.com</p>
          <p>1-800-200-300</p>
          <p>1010 Sunset Blvd. Palo Alto, CA</p>
        </div>

        <div className="footer-column">
          <h4>Stay up to date</h4>
          <p>Subscribe to our newsletter</p>
          <div className="input-field">
            <input type="text" placeholder='Email'/>
            <FiArrowRight className='input-icon'/>
          </div>
        </div>

      </div>
      <div className="copyright">
        <p>&#169; Copyright TEAM inc.</p>
      </div>
    </footer>
  )
}

export default Footer