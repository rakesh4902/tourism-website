import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdFlight } from "react-icons/md";
import flightsData from '../FlightsData';
import './index.css'

function FlightBooking() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredFlights = flightsData.filter(flight =>
    flight.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flight-booking">
      <>
      <MdFlight size={40} color="blue"/>
      <h1 className='flight-booking-heading'>Flight Booking</h1>
      <Link to={`/`} className="flight-link">
                <div className="home-button">
                  <button className="button">Home</button>
                </div>
              </Link>
      </>
      <input
        type="text"
        placeholder="Search flights..."
        value={searchTerm}
        onChange={handleSearch}
        className='search-item'
      />
      <ul className='flights-list'> 
        {(searchTerm === '' ? flightsData : filteredFlights).map(flight => (
          <Link to={`/flight-booking/${flight.id}`} key={flight.id} className='flight-link'>
          <li key={flight.id} className='flight'>
            <img src={flight.img} className='flight-image' alt={flight.name}/>
            <h1 className="flight-name">{flight.name}</h1>
            <p className="from">From: <span className='flight-from'>{flight.from}</span></p>
            <p className="from">To: <span className='flight-from'>{flight.to}</span></p>
            <p className="from">Departure:<span className='flight-from'> {flight.departure}</span></p>
            <p className="from">Arrival:<span className='flight-from'> {flight.arrival}</span></p>
            <p className="from">Price: <span className='flight-from'>{flight.price}</span></p>
            <Link to={`/flight-booking/${flight.id}` } className="flight-link">
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

export default FlightBooking;
