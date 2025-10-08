import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

import { FaMapPin } from "react-icons/fa";
const Contact = () => {
  return (
    <div id="contact" className="page">
      <section className="css-56 css-4">
        <div className="css-7 css-8 css-9">
          <div className="css-33 css-57">
            <h1 className="css-58 css-36 css-17 css-59">Contact Us</h1>
            <p className="css-20 css-60">Get in touch with our expert team</p>
          </div>

          <div className="css-43 css-44 lg:css-96 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="css-78 css-36 css-17 css-37">Send us a Message</h2>
              <form className="space-y-6">
                <div className="css-43 css-44 css-92 css-46">
                  <div>
                    <label className="css-47 css-20 css-48 css-49 css-50">First Name *</label>
                    <input
                      type="text"
                      required
                      className="css-51 css-52 css-53 css-54 css-25 focus:ring-2 focus:ring-primary"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label className="css-47 css-20 css-48 css-49 css-50">Last Name *</label>
                    <input
                      type="text"
                      required
                      className="css-51 css-52 css-53 css-54 css-25 focus:ring-2 focus:ring-primary"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="css-47 css-20 css-48 css-49 css-50">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="css-51 css-52 css-53 css-54 css-25 focus:ring-2 focus:ring-primary"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="css-47 css-20 css-48 css-49 css-50">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="css-51 css-52 css-53 css-54 css-25 focus:ring-2 focus:ring-primary"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="css-47 css-20 css-48 css-49 css-50">Message *</label>
                  <textarea
                    required
                    className="css-51 css-52 css-53 css-54 css-25 focus:ring-2 focus:ring-primary h-32"
                    placeholder="Tell us about your requirements..."
                    defaultValue=""
                  />
                </div>

                <button
                  type="submit"
                  className="css-51 css-79 css-22 css-80 css-25 css-81 css-19"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="css-78 css-36 css-17 css-37">Get in Touch</h2>
              <div className="space-y-6">
                {/* Address */}
                <div className="css-1 css-25 css-41">
                  <div className="css-11 css-12 space-x-4">
                    <div className="w-12 h-12 css-79 css-76 css-11 css-12 css-89  flex items-center justify-center">
                     <FaMapPin className="text-red-500 text-xl" />
                    </div>
                    <div>
                      <h4 className="css-36 css-17 mb-1">Visit Our Office</h4>
                      <p className="css-20">
                        Shop No : 11/288, KINGS ROAD, OPP. SHYAM NAGER POLICE STATION,
                        NIRMAN NAGER, JAIPUR-302001, RAJASTHAN INDIA
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="css-1 css-25 css-41">
                  <div className="css-11 css-12 space-x-4">
                    <div className="w-12 h-12 css-21 css-76 css-11 css-12 css-89 flex items-center justify-center">
                      <FaPhoneAlt className="text-pink-600  text-lg" />
                    </div>
                    <div>
                      <h4 className="css-36 css-17 mb-1">Call Us</h4>
                      <p className="css-20">+91-141-123456</p>
                      <p className="css-20">+91-99290 40302</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="css-1 css-25 css-41">
                  <div className="css-11 css-12 space-x-4">
                    <div className="w-12 h-12 bg-green-500 css-76 css-11 css-12 css-89 flex items-center justify-center">
                      <FaEnvelope className="text-white text-lg" />
                    </div>
                    <div>
                      <h4 className="css-36 css-17 mb-1">Email Us</h4>
                      <p className="css-20">info@premierproperties.com</p>
                      <p className="css-20">sales@premierproperties.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Contact Info */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
