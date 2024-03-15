import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlightBooking from './components/FlightBooking';
import BookingConfirmation from './components/BookingConfirmation';
import HotelBooking from './components/HotelBooking';
import HotelBookingConfirmation from './components/HotelBookingConfirmation';
import HolidayPackages from './components/HolidayPackages';
import PackageCollection from './components/PackageCollections';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/flight-booking/:flightId" element={<BookingConfirmation />} />
        <Route path="/flight-booking" element={<FlightBooking />} />
        <Route path="/hotel-booking/:bookingId" element={<HotelBookingConfirmation />} />
        <Route path="/hotel-booking" element={<HotelBooking />} />
        <Route path="/holiday-packages" element={<HolidayPackages />} />
        <Route path="/package-collection" element={<PackageCollection />} />
      </Routes>
    </Router>
  );
}

export default App;
