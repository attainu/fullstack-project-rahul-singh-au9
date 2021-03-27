import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          URBAN SERVICES
        </p>
      </section>

      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/auth'>How it works</Link>
            <Link to={{pathname: 'https://www.linkedin.com/in/rahul-singh-7b48901b1/'}} target='_blank'>Careers</Link>
            <Link to={{pathname: 'https://www.linkedin.com/in/rahul-singh-7b48901b1/'}} target='_blank'>Investors</Link>
          </div>

          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to={{pathname: 'https://www.linkedin.com/in/rahul-singh-7b48901b1/'}} target='_blank'>Contact</Link>
            <Link to={{pathname: 'https://www.linkedin.com/in/rahul-singh-7b48901b1/'}} target='_blank'>Support</Link>
            <Link to={{pathname: 'https://www.linkedin.com/in/rahul-singh-7b48901b1/'}} target='_blank'>Destinations</Link>
          </div>
        </div>

        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to={{pathname: 'https://github.com/rahul-singh-au9'}} target='_blank'>Instagram</Link>
            <Link to={{pathname: 'https://github.com/rahul-singh-au9'}} target='_blank'>Facebook</Link>
            <Link to={{pathname: 'https://github.com/rahul-singh-au9'}} target='_blank'>Twitter</Link>
          </div>
        </div>

      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>URBAN SERVICES © 2021-22</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;