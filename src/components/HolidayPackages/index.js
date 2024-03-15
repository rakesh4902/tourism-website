import React from 'react';
import { Link } from 'react-router-dom';
import { GiModernCity } from "react-icons/gi";
import './index.css'

const HolidayPackages = () => {
  
  const holidayPackages = [
    { id: 1, destination: 'Paris', price: '$1000', image: 'https://tinyurl.com/44zcas8y' },
    { id: 2, destination: 'Maldives', price: '$1500', image: 'https://tinyurl.com/mpnd3ss6' },
    { id: 3, destination: 'New York', price: '$1200', image: 'https://tinyurl.com/28fnrhyt' },
    { id: 4, destination: 'Tokyo', price: '$1600', image: 'https://tinyurl.com/upsa84ec' },
    { id: 5, destination: 'Sydney', price: '$1300', image: 'https://tinyurl.com/yksydyff' },
    { id: 6, destination: 'Rome', price: '$1100', image: 'https://tinyurl.com/ysdtpdae' },
    { id: 7, destination: 'Dubai', price: '$1400', image: 'https://tinyurl.com/y4fmn838' },
    { id: 8, destination: 'London', price: '$1100', image: 'https://tinyurl.com/55uzksck' },
    { id: 9, destination: 'Cancun', price: '$1700', image: 'https://tinyurl.com/bdd35zny' },
    { id: 10, destination: 'Bali', price: '$1200', image: 'https://tinyurl.com/yc8cd3ct' },
   
  ];

  return (
    <div className="holiday-packages">
      <GiModernCity size={40} color="blue"/>
      <h1 className='flight-booking-heading'>Holiday Packages</h1>
      <Link to={`/`} className="flight-link">
                <div className="home-button">
                  <button className="button">Home</button>
                </div>
              </Link>
      <ul className='flights-list'>
        {holidayPackages.map(eachPackage => (
          <li key={eachPackage.id} className='flight'>
            <img src={eachPackage.image} alt={eachPackage.destination} className='flight-image' />
            <h1 className="flight-name">{eachPackage.destination}</h1>
            <p className="from">Price: <span className='flight-from'>{eachPackage.price}</span></p>
          </li>
        ))}
      </ul>
      <div className="browse-booking">
        <h2 className='flight-booking-heading'>Want to book these holiday packages?</h2>
        <div className='browse-buttons'>
        <Link to="/flight-booking" className='flight-link'>
         
          <div className="button-container">
                  <button className="button"> Browse Flights</button>
                </div>
        </Link>
        <Link to="/hotel-booking" className='flight-link'>
          
          <div className="button-container">
                  <button className="button">Browse Hotels</button>
                </div>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default HolidayPackages;


