import React from 'react';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';

const Accordion = ({ title, desc, active, setActive }) => {
  // Function to toggle the accordion
  const handleToggle = () => {
    if (active === title) {
      setActive(null); // If already active, set to null to close it
    } else {
      setActive(title); // Otherwise, set it to active
    }
  };

  return (
    <div className='accordionContainer'>
      <div className={`title flex ${active === title ? 'activeTitle' : ''}`} onClick={handleToggle}>
        {title}
        <span>
          {active === title ? (
            <BsArrowDownCircle className='icon' />
          ) : (
            <BsArrowUpCircle className='icon' />
          )}
        </span>
      </div>
      <p className={`description ${active === title ? 'show' : ''}`}>
        {desc}
      </p>
    </div>
  );
};

export default Accordion;
