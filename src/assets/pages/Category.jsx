import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapPin } from "react-icons/fa";
const Category = () => {
  const navigate = useNavigate();

  // ✅ Handle property card click
  const showPropertyDetail = (slug) => {
    navigate(`/property/${slug}`);
  };

  return (
    <div id="category" className="page">
      <section className="css-56 css-4">
        <div className="css-7 css-8 css-9">
          <div className="css-39">
            <h1 className="css-58 css-36 css-17 css-59">Properties in Gurgaon</h1>
            <p className="css-20">Showing 250 properties</p>
          </div>
          <div className="css-11 css-90 css-91 css-62">
            {/* Filter Sidebar */}
            <div className="lg:w-1/4">
              <div className="css-1 css-25 css-41 css-2 top-24">
                <h3 className="css-38 css-36 css-17 css-37">Filters</h3>
                <div className="css-37">
                  <label className="css-47 css-17 css-49 mb-3">Price Range</label>
                  <div className="space-y-2">
                    <label className="css-11 css-12">
                      <input type="checkbox" className="mr-2" /> ₹50L - ₹1Cr
                    </label>
                    <label className="css-11 css-12">
                      <input type="checkbox" className="mr-2" /> ₹1Cr - ₹2Cr
                    </label>
                    <label className="css-11 css-12">
                      <input type="checkbox" className="mr-2" /> ₹2Cr+
                    </label>
                  </div>
                </div>
                <div className="css-37">
                  <label className="css-47 css-17 css-49 mb-3">BHK</label>
                  <div className="space-y-2">
                    <label className="css-11 css-12">
                      <input type="checkbox" className="mr-2" /> 1 BHK
                    </label>
                    <label className="css-11 css-12">
                      <input type="checkbox" className="mr-2" /> 2 BHK
                    </label>
                    <label className="css-11 css-12">
                      <input type="checkbox" className="mr-2" /> 3 BHK
                    </label>
                    <label className="css-11 css-12">
                      <input type="checkbox" className="mr-2" /> 4+ BHK
                    </label>
                  </div>
                </div>
                <button className="css-51 css-79 css-22 css-80 css-25 css-81 css-19">
                  Apply Filters
                </button>
              </div>
            </div>

            {/* Property Grid */}
            <div className="lg:w-3/4">
              <div className="css-43 css-44 css-92 css-93 css-87">
                {/* Property Card 1 */}
                <div
                  className="css-4 css-63 css-5 overflow-css-14 hover:css-42 css-27 css-66"
                  onClick={() => showPropertyDetail('luxury-villa-gurgaon')}
                >
                  <div className="css-28">
                    <div className="h-48 css-68 css-69 css-70" />
                    <div className="css-71 css-72 css-73 css-21 css-22 css-74 css-75 css-76 css-48 css-49">
                      Featured
                    </div>
                  </div>
                  <div className="css-94">
                    <h3 className="css-60 css-36 css-17 css-50">
                      Luxury Villa in Gurgaon
                    </h3>
                   
                   <p className="css-20 css-59 flex items-center gap-2">
                             <FaMapPin className="text-red-500" />
                             Sector 45, Gurgaon
                           </p>
                    <div className="css-11 css-13 css-12 mb-3">
                      <span className="css-38 css-36 text-accent">₹2.5 Cr</span>
                      <div className="css-11 text-accent css-48">⭐⭐⭐⭐⭐ (4.8)</div>
                    </div>
                    <button className="css-51 css-79 css-22 css-24 css-25 css-81 css-19 css-48">
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
                    <div className="h-48 css-68 css-82 css-83" />
                    <div className="css-71 css-72 css-73 css-84 css-22 css-74 css-75 css-76 css-48 css-49">
                      Hot Deal
                    </div>
                  </div>
                  <div className="css-94">
                    <h3 className="css-60 css-36 css-17 css-50">Modern Apartment</h3>
                     <p className="css-20 css-59 flex items-center gap-2">
                             <FaMapPin className="text-red-500" />
                             Sector 62, Noida
                           </p>
                    <div className="css-11 css-13 css-12 mb-3">
                      <span className="css-38 css-36 text-accent">₹85 L</span>
                      <div className="css-11 text-accent css-48">⭐⭐⭐⭐⭐ (4.6)</div>
                    </div>
                    <button className="css-51 css-79 css-22 css-24 css-25 css-81 css-19 css-48">
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
                    <div className="h-48 css-68 css-85 css-86" />
                    <div className="css-71 css-72 css-73 css-21 css-22 css-74 css-75 css-76 css-48 css-49">
                      New Launch
                    </div>
                  </div>
                  <div className="css-94">
                    <h3 className="css-60 css-36 css-17 css-50">Commercial Space</h3>
                    <p className="css-20 css-59 flex items-center gap-2">
                             <FaMapPin className="text-red-500" />
                             Connaught Place, Delhi
                           </p>
                    <div className="css-11 css-13 css-12 mb-3">
                      <span className="css-38 css-36 text-accent">₹5.2 Cr</span>
                      <div className="css-11 text-accent css-48">⭐⭐⭐⭐⭐ (4.9)</div>
                    </div>
                    <button className="css-51 css-79 css-22 css-24 css-25 css-81 css-19 css-48">
                      View Details
                    </button>
                  </div>
                </div>
                {/* End Property Cards */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
