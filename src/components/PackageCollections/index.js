import React from 'react';
import { Link } from 'react-router-dom';
import { TbPackages } from "react-icons/tb";

const PackageCollection = () => {
  const packageCollections = [
    {
      id: 1,
      title: 'Beach Paradise',
      packages: [
        { id: 1, destination: 'Maldives', price: '$1500', image: 'https://tinyurl.com/48s4xy3s' },
        { id: 2, destination: 'Hawaii', price: '$1200', image: 'https://tinyurl.com/49nvc34b' },
        { id: 3, destination: 'Bahamas', price: '$1300', image: 'https://tinyurl.com/yped4j66' },
      ]
    },
    {
      id: 2,
      title: 'Mountain Adventure',
      packages: [
        { id: 4, destination: 'Swiss Alps', price: '$1800', image: 'https://tinyurl.com/2s3dyzxa' },
        { id: 5, destination: 'Rocky Mountains', price: '$1600', image: 'https://tinyurl.com/3htmuxbb' },
        { id: 6, destination: 'Himalayas', price: '$2000', image: 'https://tinyurl.com/yeypvj4s' },
      ]
    },
    {
      id: 3,
      title: 'City Exploration',
      packages: [
        { id: 7, destination: 'Paris', price: '$1000', image: 'https://tinyurl.com/4sdn9d63' },
        { id: 8, destination: 'New York', price: '$1300', image: 'https://tinyurl.com/26e89jps' },
        { id: 9, destination: 'Tokyo', price: '$1400', image: 'https://tinyurl.com/5amzktp4' },
      ]
    },
    {
      id: 4,
      title: 'Safari Adventure',
      packages: [
        { id: 10, destination: 'African Safari', price: '$2000', image: 'https://tinyurl.com/4rsmjpxt' },
        { id: 11, destination: 'Australian Outback', price: '$1800', image: 'https://tinyurl.com/rx75a8hh' },
        { id: 12, destination: 'South American Rainforest', price: '$1900', image: 'https://tinyurl.com/4cas7rfp' },
      ]
    },
    {
      id: 5,
      title: 'Cultural Exploration',
      packages: [
        { id: 13, destination: 'Rome', price: '$1100', image: 'https://tinyurl.com/5b8yu2tw' },
        { id: 14, destination: 'Kyoto', price: '$1400', image: 'https://tinyurl.com/58m2vtdt' },
        { id: 15, destination: 'Machu Picchu', price: '$1700', image: 'https://tinyurl.com/293c5hvb' },
      ]
    },
  ];

  return (
    <div>
        <TbPackages size={40} color="blue"/>
      <h1 className='flight-booking-heading'>Package Collections</h1>
      <Link to={`/`} className="flight-link">
                <div className="home-button">
                  <button className="button">Home</button>
                </div>
              </Link>
      {packageCollections.map(collection => (
        <ul key={collection.id}  >
          <h1 className="booking-heading">{collection.title}</h1>
          <ul className='flights-list'>
            {collection.packages.map(eachPackage => (
              <li key={eachPackage.id} className='flight'>
                <img src={eachPackage.image} alt={eachPackage.destination} className='flight-image'/>
                <h1 className="flight-name">{eachPackage.destination}</h1>
                <p className="from">Price: <span className='flight-from'>{eachPackage.price}</span></p>
              </li>
            ))}
          </ul>
        </ul>
      ))}
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

export default PackageCollection;
