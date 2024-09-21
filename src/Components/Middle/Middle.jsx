import React, { useEffect, useRef } from 'react';
import './Middle.css';

// AOS library
import Aos from 'aos';
import 'aos/dist/aos.css';

const Middle = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });

    // Function to start counting animation
    const startCounting = () => {
      const countElements = sectionRef.current.querySelectorAll('.countNum');

      countElements.forEach((element) => {
        let countNumber = 0;
        const targetNumber = parseInt(element.textContent.replace(/[^0-9]/g, ''), 10);
        const updateNum = setInterval(function () {
          countNumber++;
          element.textContent = countNumber;

          if (countNumber >= targetNumber) {
            clearInterval(updateNum);
          }
        }, 5); // Adjust the interval for speed
      });
    };

    // Observer to detect when the section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
            observer.unobserve(sectionRef.current); // Optional: to count only once, remove this line to count every time section is visible
          }
        });
      },
      { threshold: 0.7 } // Adjust this value as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className='middle section' ref={sectionRef} >
      <div className='secContainer container'>
        <div className='grid'>
          <span className='flex' data-aos='slide-up'>
            <h1><span className='countNum'>10</span></h1>
            <p>World Of Experiences</p>
          </span>

          <span className='flex' data-aos='slide-up'>
            <h1><span className='countNum'>390</span>K+</h1>
            <p>Fine Destinations</p>
          </span>

          <span className='flex' data-aos='slide-up'>
            <h1><span className='countNum'>170</span>K</h1>
            <p>Customer Reviews</p>
          </span>

          <span className='flex' data-aos='slide-up'>
            <h1>4.8</h1>
            <p>Overall Rating</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Middle;
