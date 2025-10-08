import React, { useEffect, useState } from 'react';
import { FaClock, FaSmile, FaHome, FaUsers } from 'react-icons/fa';

const About = () => {
 const stats = [
  { label: 'Years Experience', end: 14, icon: <FaClock className="text-yellow-300 text-4xl" /> },
  { label: 'Happy Families', end: 5000, icon: <FaSmile className="text-pink-300 text-4xl" /> },
  { label: 'Properties Sold', end: 500, icon: <FaHome className="text-green-300 text-4xl" /> },
  { label: 'Expert Team', end: 50, icon: <FaUsers className="text-orange-300 text-4xl" /> },
];


  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const updatedCounts = stats.map((stat) =>
        Math.floor(stat.end * progress)
      );
      setCounts(updatedCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div id="about" className="page">
      <section className="css-56 css-4">
        <div className="css-7 css-8 css-9">
        
          <div className="css-33 mb-16">
            <h1 className="css-58 css-36 css-17 css-37">About Premier Properties</h1>
            <p className="css-38 css-20 max-w-3xl css-8 leading-relaxed">
              With over a decade of excellence in real estate, Premier Properties
              has been the trusted partner for thousands of families in finding
              their dream homes.
            </p>
          </div>

          
          <div className="css-29 css-30 css-31 css-25 p-12 mb-16">
            <div className="css-43 css-96 css-45 css-62 css-33 css-22">
             {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-2">
            {stat.icon}
            <div className="css-58 css-36 css-50">
              {counts[index]}+
            </div>
            <p className="css-48 opacity-90">{stat.label}</p>
          </div>
        ))}

            </div>
          </div>

          
          <div className="mb-16">
            <h2 className="text-3xl css-36 css-17 css-33 css-57">
              Meet Our Leadership Team
            </h2>
            <div className="css-43 css-44 css-61 css-62">
              <div className="css-33">
                <div className="w-32 h-32 css-79 css-76 css-11 css-12 css-89 css-8 css-59">
                  <span className="css-22 text-3xl css-36">RK</span>
                </div>
                <h4 className="css-38 css-36 css-17 css-50">Rajesh Kumar</h4>
                <p className="text-accent css-49 css-50">Founder & CEO</p>
                <p className="css-20 css-48">
                  15+ years in real estate with expertise in luxury properties and
                  investment advisory.
                </p>
              </div>

              <div className="css-33">
                <div className="w-32 h-32 css-79 css-76 css-11 css-12 css-89 css-8 css-59">
                  <span className="css-22 text-3xl css-36">SM</span>
                </div>
                <h4 className="css-38 css-36 css-17 css-50">Sneha Mehta</h4>
                <p className="text-accent css-49 css-50">Head of Sales</p>
                <p className="css-20 css-48">
                  12+ years experience in residential sales with a track record of
                  2000+ successful deals.
                </p>
              </div>

              <div className="css-33">
                <div className="w-32 h-32 css-79 css-76 css-11 css-12 css-89 css-8 css-59">
                  <span className="css-22 text-3xl css-36">AK</span>
                </div>
                <h4 className="css-38 css-36 css-17 css-50">Arjun Kapoor</h4>
                <p className="text-accent css-49 css-50">Head of Operations</p>
                <p className="css-20 css-48">
                  10+ years in operations management ensuring smooth property
                  transactions and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
