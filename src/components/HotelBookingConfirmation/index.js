import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TiTick } from "react-icons/ti";
import hotelsData from '../HotelsData'; 
import './index.css';

const HotelBookingConfirmation = () => {
  const { bookingId } = useParams();
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false); 
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    email: '',
    phoneNumber: '',
    checkInDate: '',
    checkOutDate: ''
  });

  const hotel = hotelsData.find(hotel => hotel.id === parseInt(bookingId));

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleConfirmBooking = (event) => {
    event.preventDefault();
    console.log('Booking confirmed');
    setIsBookingConfirmed(true); 
  };

  return (
    <div className="booking-confirmation">
      <h1 className="booking-heading">Booking Confirmation</h1>
      <div className='flight-user-details'>
      {hotel ? (
        <div>
            <img src={hotel.image} className='flight-image' alt={hotel.name} />
          <h1 className="flight-details">Hotel Details</h1>
          <h1 className='flight-name'>{hotel.name}</h1>
          
            <p className="from">Location: <span className='flight-from'>{hotel.location}</span></p>
            <p className="from">Price: <span className='flight-from'>{hotel.price}</span></p>
        
        </div>
      ) : (
        <p>Hotel not found</p>
      )}
      {isBookingConfirmed ? (
        <div className="submission-message">
          <div className="submission-tick">
            <TiTick size={60}/>
          </div>
          <h1 className='flight-booked'>Your hotel is booked!</h1>
        </div>
      ) : (
        <div>
          <h1 className='user-details'>User Details</h1>
          <form onSubmit={handleConfirmBooking} className='user-input-container'>
  <div className="user-input-name">
    <label className='user-input'>Name</label>
    <input type="text" name="name" value={userData.name} onChange={handleInputChange} className="user-input-text" placeholder='Enter your name..' required />
  </div>
  <div className="user-input-name">
    <label className='user-input'>Age</label>
    <input type="number" name="age" value={userData.age} onChange={handleInputChange} className="user-input-text" placeholder='Enter Your age..' required />
  </div>
  <div className="user-input-name">
    <label className='user-input'>Email</label>
    <input type="email" name="email" value={userData.email} onChange={handleInputChange} className="user-input-text" placeholder='Enter your email..' required />
  </div>
  <div className="user-input-name">
    <label className='user-input'>Phone Number</label>
    <input type="tel" name="phoneNumber" value={userData.phoneNumber} onChange={handleInputChange} className="user-input-text" placeholder='Enter your phone no..' required />
  </div>
  <div className="user-input-name">
    <label className='user-input'>Check-in Date</label>
    <input type="date" name="checkInDate" value={userData.checkInDate} onChange={handleInputChange} required />
  </div>
  <div className="user-input-name">
    <label className='user-input'>Check-out Date</label>
    <input type="date" name="checkOutDate" value={userData.checkOutDate} onChange={handleInputChange} required />
  </div>
  <div className="button-container">
    <button className="button">Confirm Booking</button>
  </div>
</form>

        </div>
      )}
      </div>
      <Link to="/hotel-booking" className="flight-link">
        <div className="button-container-flights">
          <button className="button-flights">Browse Other Hotels</button>
        </div>
      </Link>
    </div>
  );
}

export default HotelBookingConfirmation;
