 import React from 'react';
 import { useParams } from 'react-router-dom';
 import { FaMapPin } from "react-icons/fa";
 import { FaBed, FaRulerCombined, FaCar, FaBuilding } from 'react-icons/fa';
 const Details = () => {
    
    const { id } = useParams();

   return (
     <div id="property-detail" className="page">
  <section className="py-8 css-4">
    <div className="css-7 css-8 css-9">
      {/* Image Gallery */}
      <div className="css-39">
        <div className="css-43 css-44 css-95 css-46">
          <div className="lg:col-span-2">
            <div className="h-96 css-68 css-69 css  -70 css-25" />
          </div>
          <div className="space-y-4">
            <div className="h-44 css-68 css-82 css-83 css-25" />
            <div className="h-44 css-68 css-85 css-86 css-25" />
          </div>
        </div>
      </div>
      <div className="css-43 css-44 css-95 css-62">
        {/* Property Details */}
        <div className="lg:col-span-2">
          <div className="css-37">
            <h1 className="css-58 css-36 css-17 css-59">
              Luxury Villa in Gurgaon
            </h1>
          <p className="css-20 css-59 css-60 flex items-center gap-2">
                    <FaMapPin className="text-red-500" />
                    Sector 45, Gurgaon, Haryana
                  </p>
            <div className="css-11 css-12 space-x-6">
              <span className="text-3xl css-36 text-accent">₹2.5 Cr</span>
              <div className="css-11 text-accent">
                ⭐⭐⭐⭐⭐{" "}
                <span className="css-20 ml-2">(4.8 rating • 24 reviews)</span>
              </div>
            </div>
          </div>
          {/* Key Features */}
      


        <div className="css-1 css-25 css-41 css-39">
          <h3 className="css-38 css-36 css-17 css-59">Key Features</h3>
          <div className="css-43 css-96 css-45 css-46">

            {/* 3 BHK */}
            <div className="css-33">
              <div className="w-12 h-12 bg-[#1E3A8A] rounded-full flex items-center justify-center css-79 css-76 css-11 css-12 css-89 css-8 css-50">
                <span className="css-22">
                  <FaBed className="text-rose-400 text-xl" />
                </span>
              </div>
              <p className="css-17 css-49">3 BHK</p>
            </div>

            {/* Area */}
            <div className="css-33">
              <div className="w-12 h-12  rounded-full flex items-center justify-center css-79 css-76 css-11 css-12 css-89 css-8 css-50">
                <span className="css-22">
                  <FaRulerCombined className="text-lime-300 text-xl" />
                </span>
              </div>
              <p className="css-17 css-49">2500 sq ft</p>
            </div>

            {/* Parking */}
            <div className="css-33">
              <div className="w-12 h-12 rounded-full flex items-center justify-center css-79 css-76 css-11 css-12 css-89 css-8 css-50">
                <span className="css-22">
                  <FaCar className="text-yellow-300 text-xl" />
                </span>
              </div>
              <p className="css-17 css-49">2 Parking</p>
            </div>

            {/* Floors */}
            <div className="css-33">
              <div className="w-12 h-12  rounded-full flex items-center justify-center css-79 css-76 css-11 css-12 css-89 css-8 css-50">
                <span className="css-22">
                  <FaBuilding className="text-orange-300 text-xl" />
                </span>
              </div>
              <p className="css-17 css-49">3 Floors</p>
            </div>

          </div>
        </div>

          {/* Description */}
          <div className="css-39">
            <h3 className="css-38 css-36 css-17 css-59">Description</h3>
            <p className="css-20 leading-relaxed">
              This stunning luxury villa offers the perfect blend of modern
              amenities and elegant design. Located in the prestigious Sector 45
              of Gurgaon, this property features spacious rooms, premium
              finishes, and world-class facilities.
            </p>
          </div>
        </div>
        {/* Contact Form */}
        <div className="lg:col-span-1">
          <div className="css-4 css-63 css-5 css-41 css-2 top-24">
            <h3 className="css-38 css-36 css-17 css-37">Contact Agent</h3>
            <form className="space-y-4">
              <div>
                <label className="css-47 css-20 css-48 css-49 css-50">
                  Full Name
                </label>
                <input
                  type="text"
                  className="css-51 css-52 css-53 css-54 css-25 focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="css-47 css-20 css-48 css-49 css-50">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="css-51 css-52 css-53 css-54 css-25 focus:ring-2 focus:ring-primary"
                  placeholder="Enter your phone"
                />
              </div>
              <div>
                <label className="css-47 css-20 css-48 css-49 css-50">
                  Email
                </label>
                <input
                  type="email"
                  className="css-51 css-52 css-53 css-54 css-25 focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                className="css-51 css-79 css-22 css-80 css-25 css-81 css-19"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

   );
 };
 
 export default Details ;