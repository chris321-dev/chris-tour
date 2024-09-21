import React, { useEffect } from 'react';
import './Subscribe.css';

//AOS library
import Aos from 'aos';
import 'aos/dist/aos.css';

//imported image 
import image from '../../Assets/img7.png';

const Subscribe = () => {

  useEffect( () => {
    Aos.init({duration: 1000})
  }, [])

  return (
    <div className='subscribe section container'>
      <div className='secContainer grid'>
        <img src={image} alt='Div Image' data-aos='slide-down'/>

        <div className='textDiv'>
          <h4 data-aos='slide-up'> Best Way To Start Your Journey!</h4>
          <p data-aos='slide-up'>
            we offer personalized itineraries tailored to individual preferences and interests.
          </p>
          <button className='btn' data-aos='slide-up'>Start Here</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
