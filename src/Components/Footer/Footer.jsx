import React from 'react';
import './Footer.css';

//AOS library
import Aos from 'aos';
import 'aos/dist/aos.css';

//imported icons 
// import { BiLogoMediumOld } from 'react-icons/bi';
import { ImFacebook } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

import imageLogo from '../../Assets/chrisDev-logo.png'

const Footer = () => {

  return (
    <div className='footer'>
      <div className='secContainer container grid'>

        <div className='logoDiv'>
          <div className='footerLogo'  >
            <a href='https://chris321-dev.github.io/Chris.Dev-Portfolio/' target='_blank'>
            <img  src={imageLogo} alt='logo' className='logo1'/>
            </a>
          </div>        

          <div className='socials flex' >
            <ImFacebook className='icon' />
            <BsTwitter className='icon' />
            <AiFillInstagram className='icon' />
          </div>
        </div>  

        <div className='footerLinks'>
          <span className='linkTitle'>Information</span>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Explore</a>
          </li>
          <li>
            <a href='#'>Travel</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
        </div>

        <div className='footerLinks'>
          <span className='linkTitle'>
            Helpful Links
          </span>
          <li>
            <a href='#'>Destination</a>
          </li>
          <li>
            <a href='#'>Support</a>
          </li>
          <li>
            <a href='#'>Travel & Condition</a>
          </li>
          <li>
            <a href='#'>Privacy</a>
          </li>
        </div>

        <div className='footerLinks'>
          <span className='linkTitle'>Contact Details</span>
          <span className='phone'>+123 456 7890</span>
          <span className='email'>email@gmail.com</span>
        </div>

        {/* </div> */}
      </div>
    </div>
  )
}

export default Footer;
