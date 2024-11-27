import React from 'react'
import logo from '../images/logo.svg'
import PageLinks from './PageLinks';
import { pageLinks, socialLinks } from '../data';
import SocialLinks from './SocialLinks';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}

        <ul className="nav-links">
            {pageLinks.map((link) => {
                return <PageLinks key={link.id} {...link} itemClass='nav-link' />
           })}
        </ul>

        <ul className='nav-icons'>
          {socialLinks.map((link) => {
              return <SocialLinks key={link.id} {...link} itemClass='nav-icon' />
          })}
        </ul>
        
        </div>
      </nav>
    </div>
  )
};

export default Navbar
