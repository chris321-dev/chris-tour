import React, { useEffect } from 'react';
import './Destinations.css';

//AOS library
import Aos from 'aos';
import 'aos/dist/aos.css';

//imported icons
import {MdLocationPin} from 'react-icons/md';
import {BsFillCreditCardFill} from 'react-icons/bs';
import {BsFillCalendarDateFill} from 'react-icons/bs';
import {BiSearchAlt} from 'react-icons/bi';
import {TiLocation} from 'react-icons/ti';

// imported images
// import image1 from '../../Assets/image11.png';
// import image2 from '../../Assets/image12.png';
// import image3 from '../../Assets/image13.png';
// import image4 from '../../Assets/image14.png';
// import image5 from '../../Assets/image15.png';
// import image6 from '../../Assets/image16.png';
// import image7 from '../../Assets/image17.png';
// import image8 from '../../Assets/image18.png';

//lets create an array that will contain all destination data and we loop through

const destination = [
  {
    id: 1,
    // img: image1,
    name: 'Seychelles Island',
    location: 'Indian Ocean',
    rating: 4.7,
  },
  {
    id: 2,
    // img: image2,
    name: 'Bora Island',
    location: 'Polynesia',
    rating: 4.3,
  },
  {
    id: 3,
    // img: image3,
    name: 'Seychelles Island',
    location: 'Indian Ocean',
    rating: 4.7,
  },
  {
    id: 4,
    // img: image4,
    name: 'Seychelles Island',
    location: 'Indian Ocean',
    rating: 4.7,
  },
  {
    id: 5,
    // img: image5,
    name: 'Seychelles Island',
    location: 'Indian Ocean',
    rating: 4.7,
  },
  {
    id: 6,
    // img: image6,
    name: 'Seychelles Island',
    location: 'Indian Ocean',
    rating: 4.7,
  },
  {
    id: 7,
    // img: image7,
    name: 'Capri Island',
    location: 'Italy',
    rating: 4.7,
  },
  {
    id: 8,
    // img: image8,
    name: 'Fiji Island',
    location: 'South Pacific',
    rating: 4.4,
  }
]


const Destinations = () => {

  useEffect( () => {
    Aos.init({duration: 1000})
  }, [])

  return (
    <div className='destination section container'>
      <div className='secContainer'>
        <div className='secTitle'>
          <span className='redText'>EXPLORE NOW</span>
          <h3 data-aos='slide-up'>Find Your Dream Destinations</h3>
          <p data-aos='slide-up'>
            Fill in the fields below to find the best spot for your next tour.
          </p>
        </div>

        <div className='searchField grid'>
          <div className='inputField flex' data-aos='slide-up'>
            <MdLocationPin className='icon' />
            <input type='text' placeholder='Location' />
          </div>

          <div className='inputField flex' data-aos='slide-up'>
            <BsFillCreditCardFill className='icon' />
            <input type='text' placeholder='Budget' />
          </div>

          <div className='inputField flex' data-aos='slide-up'>
            <BsFillCalendarDateFill className='icon' />
            <input type='date' placeholder='Date' />
          </div>

          <button className='btn flex' data-aos='slide-up'>
            <BiSearchAlt className='icon' /> Search
          </button>
        </div>

        <div className='secMenu'>
          <ul className='flex' data-aos='slide-up'>
            <li className='active'> All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>

        <div className='destinationContainer grid'>        
          {destination.map((destination) => {
            return (            
              <div className='singleDestination' key={destination.id} data-aos='slide-up'>
                <div className='imgDiv' data-aos='slide-up'>
                  {/* <img src={destination.img} alt='Destination Image' /> */}
                  
                  <img src='https://placehold.co/600x400/png' alt='Destination Image' />

                  <div className='descInfo flex'>
                    <div className='text'>
                      <span className='name'>
                        {destination.name} Island
                      </span>
                      <p className='flex'>
                        <TiLocation className='icon' />
                        {destination.location}
                      </p>
                    </div>
                    <span className='rating'>{destination.rating}</span>
                  </div>
                  
                </div>
              </div>
            );
          })}

        </div>


      </div>

    </div>
  );
}

export default Destinations;
