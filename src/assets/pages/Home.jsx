import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaCar, FaSwimmer, FaDumbbell, FaBuilding, FaStore  } from 'react-icons/fa';
import { FaMapPin } from "react-icons/fa";

import {  FaCity, FaDraftingCompass } from 'react-icons/fa';



const Home= () => {
  const navigate = useNavigate();

    const showPage = (page) => {
    navigate(`/${page}`);
  };

    const showPropertyDetail = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div id="home" className="page active">
  {/* Hero Section */}
  <section className="css-28 css-29 css-30 css-31 css-22 css-32">
    
    <div className="css-7 css-8 css-9 css-33">
      <h1 className="css-34 css-35 css-36 css-37">Find Your Dream Home</h1>
      <p className="css-38 css-39">
        Discover premium properties in prime locations across the city
      </p>
      {/* Search Bar */}
      <div className="css-40 css-8 css-4 css-25 css-41 css-42">
        <div className="css-43 css-44 css-45 css-46">
          <div>
            <label className="css-47 css-20 css-48 css-49 css-50">
              Location
            </label>
            <select className="css-51 css-52 css-53 css-54 css-25 focus:ring-2 focus:ring-primary">
              <option>Select Location</option>
              <option>Gurgaon</option>
              <option>Noida</option>
              <option>Delhi</option>
            </select>
          </div>
          <div>
            <label className="css-47 css-20 css-48 css-49 css-50">
              Property Type
            </label>
            <select className="css-51 css-52 css-53 css-54 css-25 focus:ring-2 focus:ring-primary">
              <option>All Types</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Commercial</option>
            </select>
          </div>
          <div>
            <label className="css-47 css-20 css-48 css-49 css-50">Budget</label>
            <select className="css-51 css-52 css-53 css-54 css-25 focus:ring-2 focus:ring-primary">
              <option>Any Budget</option>
              <option>₹50L - ₹1Cr</option>
              <option>₹1Cr - ₹2Cr</option>
              <option>₹2Cr+</option>
            </select>
          </div>
          <div className="css-11 css-55">
            <button
              className="css-51 css-21 css-22 css-52 css-25 css-26 css-27"
              onClick={() => showPage('category')}
            >
              Search Properties
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Featured Properties */}
  <section className="css-56 css-4">
    <div className="css-7 css-8 css-9">
      <div className="css-33 css-57">
        <h2 className="css-58 css-36 css-17 css-59">Featured Properties</h2>
        <p className="css-20 css-60">
          Handpicked premium properties just for you
        </p>
      </div>
      <div className="css-43 css-44 css-61 css-62">
        {/* Property Card 1 */}
        <div
          className="css-4 css-63 css-5 overflow-css-14 hover:css-42 css-27 css-66"
          onClick={() => showPropertyDetail('luxury-villa-gurgaon')}
        >
          <div className="css-28">
            <div className="css-67 css-68 css-69 css-70" />
            <div className="css-71 css-72 css-73 css-21 css-22 css-74 css-75 css-76 css-48 css-49">
              Featured
            </div>
            <div className="css-71 css-72 css-77 css-4 css-17 css-74 css-75 css-76 css-48 css-49">
              3 BHK
            </div>
          </div>
          <div className="css-41">
            <h3 className="css-38 css-36 css-17 css-50">
              Luxury Villa in Gurgaon
            </h3>
            
           
<p className="css-20 css-59 css-60  flex items-center gap-2">
          <FaMapPin className="text-red-500" />
          Sector 45, Gurgaon
        </p>
            <div className="css-11 css-13 css-12 css-59">
              <span className="css-78 css-36 text-accent">₹2.5 Cr</span>
              <div className="css-11 text-accent">
                ⭐⭐⭐⭐⭐ <span className="css-20 ml-1">(4.8)</span>
              </div>
            </div>
            <div className="css-11 css-13 css-48 css-20 css-59">
        <span>
  <FaHome className="inline mr-1 text-2xl text-blue-600" /> 2500 sq ft
</span>
<span>
  <FaCar className="inline mr-1 text-2xl text-green-600" /> 2 Parking
</span>
<span>
  <FaSwimmer className="inline mr-1 text-2xl text-teal-600" /> Pool
</span>


            </div>
          <button
  className="css-51 css-79 css-22 css-80 css-25 css-81 css-19"
  onClick={(e) => {
    e.stopPropagation(); // prevents card click from firing too
    showPropertyDetail('luxury-villa-gurgaon');
  }}
>
  View Details
</button>

          </div>
        </div>
        {/* Property Card 2 */}
        <div
          className="css-4 css-63 css-5 overflow-css-14 hover:css-42 css-27 css-66"
          
          onClick={() => showPropertyDetail('modern-apartment-noida')}
        >
          <div className="css-28">
            <div className="css-67 css-68 css-82 css-83" />
            <div className="css-71 css-72 css-73 css-84 css-22 css-74 css-75 css-76 css-48 css-49">
              Hot Deal
            </div>
            <div className="css-71 css-72 css-77 css-4 css-17 css-74 css-75 css-76 css-48 css-49">
              2 BHK
            </div>
          </div>
          <div className="css-41">
            <h3 className="css-38 css-36 css-17 css-50">Modern Apartment</h3>
           
          <p className="css-20 css-59 css-60 flex items-center gap-2">
          <FaMapPin className="text-red-500" />
          Sector 62, Noida
          </p>
            <div className="css-11 css-13 css-12 css-59">
              <span className="css-78 css-36 text-accent">₹85 L</span>
              <div className="css-11 text-accent">
                ⭐⭐⭐⭐⭐ <span className="css-20 ml-1">(4.6)</span>
              </div>
            </div>
            <div className="css-11 css-13 css-48 css-20 css-59 ">
         <span className="inline-flex items-center">
        <FaBuilding className="text-blue-600 mr-2 text-2xl" />
        1200 sq ft
      </span>
      <span className="inline-flex items-center">
        <FaCar className="text-green-600 mr-2 text-2xl" />
        1 Parking
      </span>
      <span className="inline-flex items-center">
        <FaDumbbell className="text-purple-600 mr-2 text-2xl" />
        Gym
      </span>
            </div>
          <button
  className="css-51 css-79 css-22 css-80 css-25 css-81 css-19"
  onClick={(e) => {
    e.stopPropagation(); // prevents card click from firing too
    showPropertyDetail('luxury-villa-gurgaon');
  }}
>
  View Details
</button>

          </div>
        </div>
        {/* Property Card 3 */}
        <div
          className="css-4 css-63 css-5 overflow-css-14 hover:css-42 css-27 css-66"
      
          onClick={() => showPropertyDetail('commercial-space-delhi')}
        >
          <div className="css-28">
            <div className="css-67 css-68 css-85 css-86" />
            <div className="css-71 css-72 css-73 css-21 css-22 css-74 css-75 css-76 css-48 css-49">
              New Launch
            </div>
            <div className="css-71 css-72 css-77 css-4 css-17 css-74 css-75 css-76 css-48 css-49">
              Office
            </div>
          </div>
          <div className="css-41">
            <h3 className="css-38 css-36 css-17 css-50">Commercial Space</h3>
            
          <p className="css-20 css-59 css-60 flex items-center gap-2">
          <FaMapPin className="text-red-500" />
          Connaught Place, Delhi
        </p>
            <div className="css-11 css-13 css-12 css-59">
              <span className="css-78 css-36 text-accent">₹5.2 Cr</span>
              <div className="css-11 text-accent">
                ⭐⭐⭐⭐⭐ <span className="css-20 ml-1">(4.9)</span>
              </div>
            </div>
            <div className="css-11 css-13 css-48 css-20 css-59">
               <span className="flex items-center">
        <FaCity  className="text-blue-600 mr-2 text-2xl" />
        3000 sq ft
      </span>
      <span className="flex items-center">
        <FaCar className="text-green-600 mr-2 text-2xl" />
        5 Parking
      </span>
      <span className="flex items-center">
        <FaStore className="text-yellow-600 mr-2 text-2xl" />
        Prime Location
      </span>
            </div>
       <button
  className="css-51 css-79 css-22 css-80 css-25 css-81 css-19"
  onClick={(e) => {
    e.stopPropagation(); // prevents card click from firing too
    showPropertyDetail('luxury-villa-gurgaon');
  }}
>
  View Details
</button>

          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Category Cards */}
  <section className="css-56 css-1">
    <div className="css-7 css-8 css-9">
      <div className="css-33 css-57">
        <h2 className="css-58 css-36 css-17 css-59">Browse by Category</h2>
        <p className="css-20 css-60">
          Find the perfect property type for your needs
        </p>
      </div>
      <div className="css-43 css-44 css-45 css-87">
        <div
          className="css-4 css-63 css-88 css-33 css-5 hover:css-42 css-27 css-66"
       onClick={() => showPage('category')}
        >
    <div className="w-16 h-16 css-79 css-76 css-11 css-12 css-89 css-8 css-59">
      <FaBuilding className="text-blue-200 text-3xl" />
    </div>
              <h3 className="css-38 css-36 css-17 css-50">Apartments</h3>
          <p className="css-20 css-59">Modern living spaces</p>
          <span className="text-accent css-49">250+ Properties</span>
        </div>
        <div
          className="css-4 css-63 css-88 css-33 css-5 hover:css-42 css-27 css-66"
          onClick={() => showPage('category')}
        >
        <div className="w-16 h-16 css-79 css-76 css-11 css-12 css-89 css-8 css-59">
          <FaHome className="text-green-400 text-3xl" />
        </div>

          <h3 className="css-38 css-36 css-17 css-50">Villas</h3>
          <p className="css-20 css-59">Luxury independent homes</p>
          <span className="text-accent css-49">120+ Properties</span>
        </div>
        <div
          className="css-4 css-63 css-88 css-33 css-5 hover:css-42 css-27 css-66"
           onClick={() => showPage('category')}
          
        >
       <div className="w-16 h-16 css-79 css-76 css-11 css-12 css-89 css-8 css-59">
          <FaCity className="text-yellow-400 text-3xl" />
      </div>
          <h3 className="css-38 css-36 css-17 css-50">Commercial</h3>
          <p className="css-20 css-59">Office &amp; retail spaces</p>
          <span className="text-accent css-49">80+ Properties</span>
        </div>
        <div
          className="css-4 css-63 css-88 css-33 css-5 hover:css-42 css-27 css-66"
          onClick={() => showPage('category')}
        >
          <div className="w-16 h-16 css-79 css-76 css-11 css-12 css-89 css-8 css-59">
        <FaDraftingCompass className="text-purple-400 text-3xl" />
      </div>
          <h3 className="css-38 css-36 css-17 css-50">Plots</h3>
          <p className="css-20 css-59">Build your dream home</p>
          <span className="text-accent css-49">60+ Properties</span>
        </div>
      </div>
    </div>
  </section>
</div>

  );
};

export default Home;