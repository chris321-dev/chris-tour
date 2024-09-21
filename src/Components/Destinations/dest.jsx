import React, { useEffect, useState } from 'react';
import destinationData from './destination'; // Import destination data
import './dest.css';

// AOS library
import Aos from 'aos';
import 'aos/dist/aos.css';

// Imported icons
import { MdLocationPin } from 'react-icons/md';
import { BsFillCreditCardFill, BsFillCalendarDateFill } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { TiLocation } from 'react-icons/ti';

// Spinner Component
const Spinner = () => {
  return <div className="spinner"></div>;
};

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [category, setCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(false); // Spinner state

  // Fetch images from Unsplash API and map them to the destinations
  const fetchImage = async (destinationName) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${destinationName}&client_id=-Gqtdl1r_DRW8qzZMwlGLUbqv4TWXYl88U5A5n6kn8E`
      );
      const data = await response.json();
      return data.results[0]?.urls?.regular || 'https://placehold.co/600x400/png'; // Default placeholder
    } catch (error) {
      console.error('Error fetching image:', error);
      return 'https://placehold.co/600x400/png'; // Fallback image
    }
  };

  useEffect(() => {
    const loadImages = async () => {
      setIsLoading(true); // Start spinner
      const updatedDestinations = await Promise.all(
        destinationData.map(async (dest) => {
          const img = await fetchImage(dest.name);
          return { ...dest, img };
        })
      );
  
      // Select 8 random destinations and set it to filteredData initially
      const randomData = updatedDestinations.sort(() => 0.5 - Math.random()).slice(0, 8);
      
      setDestinations(updatedDestinations); // Set all destinations
      setFilteredData(randomData); // Set initial display to 8 random destinations
      setIsLoading(false); // Stop spinner
    };
    loadImages();
    Aos.init({ duration: 1000 });
  }, []);


  // Handle search input change and suggestions
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    if (value.length > 1) {
      const filteredSuggestions = destinations.filter((dest) =>
        dest.location.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = () => {
    // Check if all fields are filled
    if (!searchInput.trim() || !document.querySelector('input[type="text"][placeholder="Budget"]').value.trim() || !document.querySelector('input[type="date"]').value.trim()) {
      alert('Please fill in all fields before searching.');
      return; // Exit if any field is empty
    }

    setIsLoading(true); // Start spinner
    // Perform search
    const results = destinations.filter((dest) =>
      dest.location.toLowerCase().includes(searchInput.toLowerCase())
    );
  
    // If no results are found, display a message
    if (results.length === 0) {
      setFilteredData([]); // Clear previous results
      alert('Sorry, Not available for now.');
    } else {
      setFilteredData(results);
    }

    setIsLoading(false); // Stop spinner
    setSuggestions([]); // Hide suggestions after search
  };
  


  // Handle category filter
  const handleFilter = (filterCategory) => {
    setIsLoading(true); // Start spinner
    if (filterCategory === 'All') {
      const randomData = destinations.sort(() => 0.5 - Math.random()).slice(0, 8); // 8 random results
      setFilteredData(randomData);
    } else if (filterCategory === 'Recommended') {
      const randomData = destinations.sort(() => 0.5 - Math.random()).slice(0, 6); // 6 random results
      setFilteredData(randomData);
    } else {
      const filtered = destinations.filter((dest) => dest.category === filterCategory);
      setFilteredData(filtered);
    }
    setCategory(filterCategory); // Set active category 
    setSearchInput(''); // Clear input field
    
    // Clear budget and date input fields
    document.querySelector('input[placeholder="Budget"]').value = ''; // Clear Budget
    document.querySelector('input[type="date"]').value = ''; // Clear Date
    
    setIsLoading(false); // Stop spinner
    setSuggestions([]); // Hide suggestions
  };


  //for budget input format
  const formatBudget = (value) => {
    // Remove any non-digit characters
    const cleanValue = value.replace(/\D/g, '');
    
    // Add commas at every 3 digits
    return cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  
  const handleBudgetChange = (e) => {
    const formattedValue = formatBudget(e.target.value);
    e.target.value = formattedValue; // Update input value with commas
  };


  return (
    <div className='destination section container'>
      <div className='secContainer'>
        <div className='secTitle'>
          <span className='redText'>EXPLORE NOW</span>
          <h3 data-aos='slide-up'>Find Your Dream Destinations</h3>
          <p data-aos='slide-up'>Fill in the fields below to find the best spot for your next tour.</p>
        </div>

        <div className='searchField grid'>
          <div className='inputField flex' data-aos='slide-up'>
            <MdLocationPin className='icon' />
            <input
              required
              type='text'
              placeholder='Location'
              value={searchInput}
              onChange={handleSearchChange}
              style={{ width: '100%' }} //equal width with the suggestions
            />
            {/* Dropdown suggestions */}
            {suggestions.length > 0 && (
              <ul className='suggestions' style={{ width: '100%' }}>
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion.id}
                    className='suggestion-item'
                    onClick={() => {
                      setSearchInput(suggestion.location); // Set selected suggestion
                      setSuggestions([]); // Hide suggestions
                    }}
                    style={{ cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    {suggestion.location}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className='inputField flex' data-aos='slide-up'>
            <BsFillCreditCardFill className='icon' />
            <input required type='text' placeholder='Budget'
             onInput={handleBudgetChange} // Call handleBudgetChange on input 
             />
          </div>

          <div className='inputField flex' data-aos='slide-up'>
            <BsFillCalendarDateFill className='icon' />
            <input required type='date' placeholder='Date' />
          </div>

          <button className='btn flex' data-aos='slide-up' onClick={handleSearch}>
            <BiSearchAlt className='icon' /> Search
          </button>
        </div>

        <div className='secMenu'>
          <ul className='flex' data-aos='slide-up'>
            <li className={category === 'All' ? 'active' : ''} onClick={() => handleFilter('All')}>
              All
            </li>
            <li className={category === 'Recommended' ? 'active' : ''} onClick={() => handleFilter('Recommended')}>
              Recommended
            </li>
            <li className={category === 'Beach' ? 'active' : ''} onClick={() => handleFilter('Beach')}>
              Beach
            </li>
            <li className={category === 'Park' ? 'active' : ''} onClick={() => handleFilter('Park')}>
              Park
            </li>
            <li className={category === 'Nature' ? 'active' : ''} onClick={() => handleFilter('Nature')}>
              Nature
            </li>
            <li className={category === 'Mountain' ? 'active' : ''} onClick={() => handleFilter('Mountain')}>
              Mountain
            </li>
          </ul>
        </div>

        <div className='destinationContainer grid'>
          {isLoading ? (
              <Spinner /> // Display the spinner while loading
            ) : (
              filteredData.map((destination) => (
            <div className='singleDestination' key={destination.id} >
              <div className='imgDiv' data-aos='slide-up'>
                <img src={destination.img} alt='Destination Image' />
                <div className='descInfo flex'>
                  <div className='text'>
                    <span className='name'>{destination.name}</span>
                    <p className='flex'>
                      <TiLocation className='icon' />
                      {destination.location}
                    </p>
                  </div>
                  <span className='rating'>{destination.rating}</span>
                </div>
              </div>
            </div>
          ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
