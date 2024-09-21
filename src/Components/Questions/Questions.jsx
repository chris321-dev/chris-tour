import React, { useState, useEffect } from 'react';
import './Questions.css';
import Accordion from './Accordion';

//AOS library
import Aos from 'aos';
import 'aos/dist/aos.css';



const Questions = () => {

  const [active, setActive] = useState('How to I choose the right travel destination for me?');
  
  useEffect( () => {
    Aos.init({duration: 1000})
  }, [])

  return (
    <div className='questions section container'>
      <div className='secHeading'>
        <h3 data-aos='slide-up'>Frequently Asked Questions</h3>
      </div>
      <div className='secContainer grid'>
        {/* we will import a component from a differnt file */}
        <div className='accordion grid' data-aos='slide-up'>
          <Accordion 
            title='How to I choose the right travel destination for me?'
            desc='Consider your interests, budget, desired experiences, and the type of env. you enjoy. Research destinations that align with...'
            active={active}
            setActive={setActive}
          />
          <Accordion 
            title='What are the best times to visit specific destinations?'
            desc='Research the climate, weather patterns, and peak tourist seasons if the destination you;re interested in. Opt for shoulder seasons...'
            active={active}
            setActive={setActive}
          />
          <Accordion 
            title='What are the off-peak seasons for visiting specific cities or countries?'
            desc='Off-peak seasons often fall in spring (March–May) or fall (September–November) when there are fewer tourists and lower prices...'
            active={active}
            setActive={setActive}
          />
          <Accordion 
            title='How do local festivals and events affect the best time to visit a city or region?'
            desc='Visiting during festivals like Mardi Gras (February) or Oktoberfest (September–October) can offer a unique cultural experience but with higher costs and larger crowds.....'
            active={active}
            setActive={setActive}
          />
          <Accordion 
            title='What months should be avoided due to extreme weather conditions like hurricanes or monsoons?'
            desc='June to November is hurricane season in the Caribbean and parts of the U.S., while monsoons affect parts of Asia from June to October....'
            active={active}
            setActive={setActive}
          />
        </div>

        <div className='form'>
          <div className='secHeading'>
            <h4 data-aos='slide-up'>Do you have any specific question?</h4>
            <p data-aos='slide-up'>
              Please fill the form below and out dedicated team will get intouch with you as sonn as possible.
            </p>
          </div>

          <div className='formContent grid' data-aos='slide-up'>
            <input type='email' placeholder='Enter email address' />
            <textarea placeholder='Enter your question here'></textarea>
            <button className='btn'>Submit Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;


