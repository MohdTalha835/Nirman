import React from 'react';
import { FaMapPin } from "react-icons/fa";


const Event = () => {
  return (
<div id="events" className="page">
  <section className="css-56 css-4">
    <div className="css-7 css-8 css-9">
      <div className="css-33 css-57">
        <h1 className="css-58 css-36 css-17 css-59">Upcoming Events</h1>
        <p className="css-20 css-60">
          Join our exclusive property events and site visits
        </p>
      </div>
      <div className="css-43 css-44 css-92 css-95 css-62">
        {/* Event Card 1 */}
        <div className="css-4 css-63 css-5 overflow-css-14 hover:css-42 css-27">
          <div className="h-48 css-68 css-30 css-31 css-28">
            <div className=" css-99 css-71 css-72 css-73 css-100 css-22 css-74 css-75 css-76 css-48 css-49">
              Site Visit
            </div>
            <div className="css-71 bottom-4 css-73 css-22">
              <h3 className="css-38 css-36 mb-1">Dec 15, 2024</h3>
              <p className="css-48 opacity-90">10:00 AM - 4:00 PM</p>
            </div>
          </div>
          <div className="css-41">
            <h3 className="css-38 css-36 css-17 css-50">
              Luxury Villa Site Visit - Gurgaon
            </h3>
            <p className="css-20 css-59 flex items-center gap-2">
          <FaMapPin className="text-red-500" />
          Sector 45, Gurgaon
        </p>


            <p className="css-20 css-48 css-59">
              Exclusive site visit to premium villas. Meet our experts and
              explore world-class amenities.
            </p>
            <div className="css-11 css-13 css-12">
              <span className="text-accent css-49">Free Entry</span>
              <button className="css-79 css-22 css-9 css-24 css-25 css-81 css-19">
                Register
              </button>
            </div>
          </div>
        </div>
        {/* Event Card 2 */}
        <div className="css-4 css-63 css-5 overflow-css-14 hover:css-42 css-27">
          <div className="h-48 css-68 from-accent bg-yellow-600 css-28">
            <div className="css-71 css-72 css-73 css-4 text-accent css-74 css-75 css-76 css-48 css-49">
              Seminar
            </div>
            <div className="css-71 bottom-4 css-73 css-22">
              <h3 className="css-38 css-36 mb-1">Dec 20, 2024</h3>
              <p className="css-48 opacity-90">2:00 PM - 6:00 PM</p>
            </div>
          </div>
          <div className="css-41">
            <h3 className="css-38 css-36 css-17 css-50">
              Property Investment Seminar
            </h3>
            <p className="css-20 css-59 flex items-center gap-2">
  <FaMapPin className="text-red-500" />
  Hotel Taj, Gurgaon
</p>
            <p className="css-20 css-48 css-59">
              Learn about smart property investments, market trends, and
              financing options from industry experts.
            </p>
            <div className="css-11 css-13 css-12">
              <span className="text-accent css-49">Free Entry</span>
              <button className="css-79 css-22 css-9 css-24 css-25 css-81 css-19">
                Register
              </button>
            </div>
          </div>
        </div>
        {/* Event Card 3 */}
        <div className="css-4 css-63 css-5 overflow-css-14 hover:css-42 css-27">
          <div className="h-48 css-68  bg-green-500 css-28">
            <div className="css-71 css-72 css-73 css-4 text-green-600 css-74 css-75 css-76 css-48 css-49">
              Expo
            </div>
            <div className="css-71 bottom-4 css-73 css-22">
              <h3 className="css-38 css-36 mb-1">Dec 25, 2024</h3>
              <p className="css-48 opacity-90">11:00 AM - 7:00 PM</p>
            </div>
          </div>
          <div className="css-41">
            <h3 className="css-38 css-36 css-17 css-50">Property Expo 2024</h3>
           <p className="css-20 css-59 flex items-center gap-2">
  <FaMapPin className="text-red-500" />
  India Expo Mart, India
</p>
            <p className="css-20 css-48 css-59">
              Biggest property exhibition featuring 100+ projects from top
              developers across NCR.
            </p>
            <div className="css-11 css-13 css-12">
              <span className="text-accent css-49">Free Entry</span>
              <button className="css-79 css-22 css-9 css-24 css-25 css-81 css-19">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


  );
};

export default Event;