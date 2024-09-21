import React, { useEffect } from 'react';
import './Reviews.css';

//AOS library
import Aos from 'aos';
import 'aos/dist/aos.css';

//imported icons
import { AiFillStar } from 'react-icons/ai';

//imported images
import Image1 from '../../Assets/user1.jpg';
import Image2 from '../../Assets/user2.jpg';
import Image3 from '../../Assets/user3.jpg';
import Image4 from '../../Assets/user4.jpg';
import Image5 from '../../Assets/img6.jpg';

const Reviews = () => {

  useEffect( () => {
    Aos.init({duration: 1000})
  }, [])

  return (
    <div className='review section container'>
      <div className='secContainer grid'>
        <div className='textDiv'>
          <span className='redText' data-aos='slide-up'>
            FROM OUR CLIENTS
          </span>
          <h3 data-aos='slide-up'>          
            Real Travel History From Our Beloved Clients
          </h3>
          <p data-aos='slide-up'>
            By choosing us as their tour agency, customers can expect an enriching and enjoyable travel experience, filled with unforgettable memories that will last a lifetime.
          </p>

          <span className='stars flex' data-aos='slide-up'>
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
          </span>

          <div className='clientsImages flex'>
            <img src={Image1} alt='Client Image' data-aos='slide-up' />
            <img src={Image2} alt='Client Image' data-aos='slide-up' />
            <img src={Image3} alt='Client Image' data-aos='slide-up' />
            <img src={Image4} alt='Client Image' data-aos='slide-up' />
          </div>
        </div>

        <div className='imgDiv'>
          <img src={Image5} alt='Div Image' data-aos='slide-down' />
        </div>
      </div>
    </div>
  );
}

export default Reviews;


