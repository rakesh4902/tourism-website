import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TiTick } from "react-icons/ti";
import flightsData from '../FlightsData';
import './index.css'

const BookingConfirmation = () => {
  const { flightId } = useParams();
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false); 

  const flight = flightsData.find(flight => flight.id === parseInt(flightId));

  const handleConfirmBooking = (event) => {
    event.preventDefault();
    console.log('Booking confirmed');
    setIsBookingConfirmed(true); 
  };

  return (
    <div className="booking-confirmation">
      
      <h1 className="booking-heading">Booking Confirmation</h1>
      <div className='flight-user-details'>
      {flight ? (
        <div >
          <img src={flight.img} className='flight-image' alt={flight.name}/>
          <h1 className="flight-details">Flight Details</h1>
          <h1 className='flight-name'>{flight.name}</h1>
          <div className='from-to'>
          <p className="from">From: <span className='flight-from'>{flight.from}</span></p>
          <p className="from">To: <span className='flight-from'>{flight.to}</span></p>
          
          </div>
          <p className="from">Departure: <span className='flight-from'>{flight.departure}</span></p>
          <p className="from">Arrival: <span className='flight-from'>{flight.arrival}</span></p>
          <p className="from">Price: <span className='flight-from'>{flight.price}</span></p>
        </div>
      ) : (
        <p>Flight not found</p>
      )}
      {isBookingConfirmed ? (
        
        <div className="submission-message">
                <div className="submission-tick" >
                <TiTick size={60}/>
            </div>
            <h1 className='flight-booked'>Your flight is booked!</h1></div>
        
      ) : (
        <div>
          <h1 className='user-details'>User Details</h1>
          <form onSubmit={handleConfirmBooking} className='user-input-container'>
            <div className="user-input-name">
            <label className='user-input'>Name</label><input type="text" className="user-input-text" placeholder='Enter your name..' required /></div>
            <div className="user-input-name">
            <label className='user-input'>Age</label><input type="number"className="user-input-text" placeholder='Enter Your age..' required />
            </div>
            <div className="user-input-name">
            <label className='user-input'>Email </label><input type="email" className="user-input-text" placeholder='Enter your email..'required /></div>
            <div className="user-input-name">
            <label className='user-input'>Phone Number </label><input type="tel" className="user-input-text" placeholder='Enter your phone no..' required /></div>
            <div className="button-container">
  <button className="button">Confirm Booking</button>
</div>

          </form>
        </div>
      )}
      </div>
      <Link to="/flight-booking" className="flight-link">
        
        <div className="button-container-flights">
  <button className="button-flights">Browse Other Flights</button>
</div>

      </Link>
      
    </div>
  );
}

export default BookingConfirmation;
