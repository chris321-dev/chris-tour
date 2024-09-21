// import React, { useState, useEffect } from 'react';
// import './Navbar.css';
// import { AiFillCloseCircle } from 'react-icons/ai';
// import { PiDotsNineBold } from 'react-icons/pi';
// import imageLogo from '../../Assets/chrisDev-logo.png';

// const Navbar = () => {
//   const [navBar, setNavBar] = useState("menu");
//   const [activeSection, setActiveSection] = useState('');

//   // Function to show navbar
//   const showNavBar = () => {
//     setNavBar("menu showNavbar");
//   };

//   // Function to remove navbar
//   const removeNavBar = () => {
//     setNavBar("menu");
//   };

//   // Track the current scroll position to update active link
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll('section');
//       let currentSection = '';

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop - 100; // Adjust for navbar height
//         if (window.scrollY >= sectionTop) {
//           currentSection = section.getAttribute('id');
//         }
//       });

//       setActiveSection(currentSection);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Function to handle click and smooth scroll
//   const handleClick = (e, section) => {
//     e.preventDefault();
//     document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
//     setActiveSection(section);
//   };

//   return (
//     <div className='navBar'>
//       <div className='logoDiv'>
//         <a href='https://chris321-dev.github.io/Chris.Dev-Portfolio/' target='_blank'>
//           <img src={imageLogo} alt='logo' className='logo1' />
//         </a>
//         <span>Chris-Tour</span>
//       </div>

//       <div className={navBar}>
//         <ul>
//           <li className={`navList ${activeSection === 'destinations' ? 'active' : ''}`}>
//             <a href="#destinations" className='link11' onClick={(e) => handleClick(e, 'destinations')}>
//               Destinations
//             </a>
//           </li>
//           <li className={`navList ${activeSection === 'portfolio' ? 'active' : ''}`}>
//             <a href="#portfolio" className='link11' onClick={(e) => handleClick(e, 'portfolio')}>
//               About Us
//             </a>
//           </li>
//           <li className={`navList ${activeSection === 'questions' ? 'active' : ''}`}>
//             <a href="#questions" className='link11' onClick={(e) => handleClick(e, 'questions')}>
//               FAQ
//             </a>
//           </li>
//           <li className={`navList ${activeSection === 'footer' ? 'active' : ''}`}>
//             <a href="#footer" className='link11' onClick={(e) => handleClick(e, 'footer')}>
//               Contact
//             </a>
//           </li>
//         </ul>
//         <AiFillCloseCircle className='icon closeIcon' onClick={removeNavBar} />
//       </div>

//       <button className='signUpBtn btn'>
//         <a href="#subscribe" className='btn11' onClick={(e) => handleClick(e, 'subscribe')}>
//           Book Now
//         </a>
//       </button>

//       <PiDotsNineBold className='icon menuIcon' onClick={showNavBar} />
//     </div>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect } from 'react';
// import './Navbar.css'; // Ensure you import CSS correctly
// import { AiFillCloseCircle } from 'react-icons/ai';
// import { PiDotsNineBold } from 'react-icons/pi';
// import imageLogo from '../../Assets/chrisDev-logo.png';

// const Navbar = () => {
//   const [navBar, setNavBar] = useState("menu");
//   const [activeSection, setActiveSection] = useState('');

//   const showNavBar = () => {
//     setNavBar("menu showNavbar");
//   };

//   const removeNavBar = () => {
//     setNavBar("menu");
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll('section');
//       let currentSection = '';

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop - 80; // Adjust for navbar height
//         if (window.scrollY >= sectionTop) {
//           currentSection = section.getAttribute('id');
//         }
//       });

//       console.log('Current Section:', currentSection); // Debugging
//       setActiveSection(currentSection);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleClick = (e, section) => {
//     e.preventDefault();
//     console.log('Navigating to section:', section); // Debugging
//     document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
//     setActiveSection(section);
//     if (window.innerWidth <= 767) {
//       removeNavBar(); // Close navbar on mobile after click
//     }
//   };

//   return (
//     <div className='navBar'>
//       <div className='logoDiv'>
//         <a href='https://chris321-dev.github.io/Chris.Dev-Portfolio/' target='_blank'>
//           <img src={imageLogo} alt='logo' className='logo1' />
//         </a>
//         <span>Chris-Tour</span>
//       </div>

//       <div className={navBar}>
//         <ul>
//           <li className={`navList ${activeSection === 'destinations' ? 'active' : ''}`}>
//             <a href="#destinations" className='link11' onClick={(e) => handleClick(e, 'destinations')}>
//               Destinations
//             </a>
//           </li>
//           <li className={`navList ${activeSection === 'portfolio' ? 'active' : ''}`}>
//             <a href="#portfolio" className='link11' onClick={(e) => handleClick(e, 'portfolio')}>
//               About Us
//             </a>
//           </li>
//           <li className={`navList ${activeSection === 'questions' ? 'active' : ''}`}>
//             <a href="#questions" className='link11' onClick={(e) => handleClick(e, 'questions')}>
//               FAQ
//             </a>
//           </li>
//           <li className={`navList ${activeSection === 'footer' ? 'active' : ''}`}>
//             <a href="#footer" className='link11' onClick={(e) => handleClick(e, 'footer')}>
//               Contact
//             </a>
//           </li>
//         </ul>
//         <AiFillCloseCircle className='icon closeIcon' onClick={removeNavBar} />
//       </div>

//       <button className='signUpBtn btn'>
//         <a href="#subscribe" className='btn11' onClick={(e) => handleClick(e, 'subscribe')}>
//           Book Now
//         </a>
//       </button>

//       <PiDotsNineBold className='icon menuIcon' onClick={showNavBar} />
//     </div>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Ensure you're importing the correct file

// Imported Icons
import { AiFillCloseCircle } from 'react-icons/ai';
import { PiDotsNineBold } from 'react-icons/pi';

import imageLogo from '../../Assets/chrisDev-logo.png';

const Navbar = () => {
  // State to track and update navbar
  const [navBar, setNavBar] = useState("menu");
  const [activeSection, setActiveSection] = useState('');

  // Function to show navbar
  const showNavBar = () => {
    setNavBar("menu showNavbar");
  };

  // Function to remove navbar
  const removeNavBar = () => {
    setNavBar("menu");
  };

  // Handle scrolling to update active section
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
      if (scrollPosition >= section.offsetTop - 50 && scrollPosition < section.offsetTop + section.offsetHeight) {
        setActiveSection(section.getAttribute("id"));
      }
    });

    if (scrollPosition + window.innerHeight >= document.body.scrollHeight) {
      setActiveSection('footer');
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='navBar'>
      <div className='logoDiv'>
        <a href='https://chris321-dev.github.io/Chris.Dev-Portfolio/' target='_blank' rel='noopener noreferrer'>
          <img src={imageLogo} alt='logo' className='logo1' />
        </a>
        <span>Chris-Tour</span>
      </div>

      <div className={navBar}>
        <ul>
          <li className='navList'>
            <a href="#destinations" 
               className={activeSection === 'destinations' ? 'active' : ''}
               onClick={removeNavBar}>Destinations</a>
          </li>
          <li className='navList'>
            <a href="#portfolio" 
               className={activeSection === 'portfolio' ? 'active' : ''}
               onClick={removeNavBar}>About Us</a>
          </li>
          <li className='navList'>
            <a href="#questions" 
               className={activeSection === 'questions' ? 'active' : ''}
               onClick={removeNavBar}>FAQ</a>
          </li>
          <li className='navList'>
            <a href="#footer" 
               className={activeSection === 'footer' ? 'active' : ''}
               onClick={removeNavBar}>Contact</a>
          </li>
        </ul>
        <AiFillCloseCircle className='icon closeIcon' onClick={removeNavBar} />
      </div>

      <button className='signUpBtn btn'>
        <a href="#subscribe" className='btn11'>Book Now</a>
      </button>

      <PiDotsNineBold className='icon menuIcon' onClick={showNavBar} />
    </div>
  );
}

export default Navbar;
