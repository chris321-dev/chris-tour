import React, { useEffect } from 'react';
import './Portfolio.css';

//AOS library
import Aos from 'aos';
import 'aos/dist/aos.css';

//import assets
import icon1 from '../../Assets/protection.png';
import icon2 from '../../Assets/destination.png';
import icon3 from '../../Assets/online-chat.png';
import image from '../../Assets/img5.jpg';

const Portfolio = () => {

  useEffect( () => {
    Aos.init({duration: 1000})
  }, [])

  return (
    <div className='portfolio section container'>
      <div className='secContainer grid'>
        <div className='leftContent'>
          <div className='secHeading'>
            <h3  data-aos='slide-up'>Why Should You Choose Us</h3>
            <p data-aos='slide-up'>
              We have extensive knowledge and experience in the travel industry.
            </p>
          </div>

          <div className='grid'>
            <div className='singlePortfolio flex'>
              <div className='iconDiv' data-aos='slide-up'>
                <img src={icon1} alt='Icon image' />
              </div>

              <div className='infor' data-aos='slide-up'>
                <h4>Safety and support</h4>
                <p>
                  Our top priority is the safety and well-being of our clients. 
                  We maintain high safety standards and have emergency support avaliable during the trip.
                </p>
              </div>
            </div>

            <div className='singlePortfolio flex' data-aos='slide-up'>
              <div className='iconDiv'>
                <img src={icon2} alt='Icon image' />
              </div>

              <div className='infor' data-aos='slide-up'>
                <h4>Diverse Range of Destinations</h4>
                <p>
                  Whether it's a domestic tour or an international adventure, we cover wide range of destinations to cater to different interests and preferences.
                </p>
              </div>
            </div>

            <div className='singlePortfolio flex' data-aos='slide-up'>
              <div className='iconDiv'>
                <img src={icon3} alt='Icon image' />
              </div>

              <div className='infor' data-aos='slide-up'>
                <h4>24/7 Customer Support</h4>
                <p>
                  Our dedicated Customer support team is avaliable round the clock to address any queries or concerns before, during, and after the trip.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className='rightContent' data-aos='slide-down'>
          <img src={image} alt='Image' />
        </div>
      </div>

    </div>
  );
}

export default Portfolio;


