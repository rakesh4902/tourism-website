import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import './index.css'

const Home = () => {
  return (
    <>
    <FaHome size={40} color="blue"/>
    <h1 className='flight-booking-heading'>Welcome to Travel Booking Portal</h1>
    <div className='home-list'>
      
      <div className='flight'>
        <Link to="/flight-booking" className="flight-link " >
          <img src="https://tinyurl.com/4nrw365s" alt="Flights"className='flight-image' />
          <h1 className="flight-name">Flights</h1>
          <p className='flight-from'>Find and book flights to your desired destinations.</p>
        </Link>
      </div>
      <div className='flight'>
        <Link to="/hotel-booking" className="flight-link">
          <img src="https://tinyurl.com/4ej4ncwz" alt="Hotels" className='flight-image'/>
          <h1 className="flight-name">Hotels</h1>
          <p className='flight-from'>Discover and book accommodations for your travels.</p>
        </Link>
      </div>
      <div className='flight'>
        <Link to="/holiday-packages" className="flight-link">
          <img src="https://tinyurl.com/ye8zb7u7" alt="Holiday Packages" className='flight-image'/>
          <h1 className="flight-name">Holiday Packages</h1>
          <p className='flight-from'>Explore exciting holiday packages for your next vacation.</p>
        </Link>
      </div>
      <div className='flight'>
        <Link to="/package-collection" className="flight-link">
          <img src="https://tinyurl.com/mpkkr7p4" alt="Package Collections"className='flight-image' />
          <h1 className="flight-name">Package Collections</h1>
          <p className='flight-from'>Discover curated collections of travel packages for unique experiences.</p>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Home;
