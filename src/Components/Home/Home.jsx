import React, { useEffect } from 'react';
import './Home.css';

//imported assets
import Video from '../../Assets/bgVideo.mp4';

//imported images
import image1 from '../../Assets/img1.jpg';
import image2 from '../../Assets/img2.jpg';
import image3 from '../../Assets/img3.jpg';
import image4 from '../../Assets/img4.jpg';

//AOS library
import Aos from 'aos';
import 'aos/dist/aos.css';

//imported icons
import {AiOutlineSwapRight} from 'react-icons/ai'


const Home = () => {

  useEffect( () => {
    Aos.init({duration: 1000})
  }, [])

  return (
    <div className='Home'>
      <div className='videoBg'>
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className='sectionText'>
        <h1 data-aos='slide-up'>Unlock Your Travel Dreams With Us!</h1>
        <p data-aos='slide-up'>
          Discover the world's most adventurous nature, life is so short for a trip.
        </p>
        <button className='btn flex' data-aos='slide-up'>
          GET STARTED <AiOutlineSwapRight className='icon' />
        </button>
      </div>

      <div className='popularPlaces'>
        <div className='content'>
          <h3 data-aos='slide-up'>popular Places</h3>
          <div className='images flex' data-aos='slide-up'>
            <img src={image1} alt='Destination Images' />
            <img src={image2} alt='Destination Images' />
            <img src={image3} alt='Destination Images' />
            <img src={image4} alt='Destination Images' />

          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
