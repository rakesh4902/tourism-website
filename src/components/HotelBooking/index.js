import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiHotelFill } from "react-icons/ri";
import hotelsData from '../HotelsData';
import './index.css';

function HotelBooking() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredHotels = hotelsData.filter(hotel =>
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flight-booking">
      <>
      <RiHotelFill size={40} color="blue"/>
        <h1 className='flight-booking-heading'>Hotel Booking</h1>
      </>
      <Link to={`/`} className="flight-link">
                <div className="home-button">
                  <button className="button">Home</button>
                </div>
              </Link>
      <input
        type="text"
        placeholder="Search hotels..."
        value={searchTerm}
        onChange={handleSearch}
        className='search-item'
      />
      <ul className='flights-list'>
        {(searchTerm === '' ? hotelsData : filteredHotels).map(hotel => (
          <Link to={`/hotel-booking/${hotel.id}`} key={hotel.id} className='flight-link'>
            <li key={hotel.id} className='flight'>
              <img src={hotel.image} className='flight-image' alt={hotel.name} />
              <h1 className="flight-name">{hotel.name}</h1>
              <p className="from">Location: <span className='flight-from'>{hotel.location}</span></p>
              <p className="from">Price: <span className='flight-from'>{hotel.price}</span></p>
              <Link to={`/hotel-booking/${hotel.id}`} className="flight-link">
                <div className="button-container">
                  <button className="button">Book</button>
                </div>
              </Link>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default HotelBooking;
