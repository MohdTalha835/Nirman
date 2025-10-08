import React from 'react';

const Review = () => {
  return (
<div id="reviews" className="page">
  <section className="css-56 css-4">
    <div className="css-7 css-8 css-9">
      <div className="css-33 css-57">
        <h1 className="css-58 css-36 css-17 css-59">Customer Reviews</h1>
        <p className="css-20 css-60">What our clients say about us</p>
      </div>
      {/* Rating Summary */}
      <div className="css-1 css-25 css-88 css-57">
        <div className="css-33">
          <div className="css-34 css-36 text-accent css-50">4.8</div>
          <div className="css-11 css-89 text-accent css-38 css-50">
            ⭐⭐⭐⭐⭐
          </div>
          <p className="css-20">Based on 247 reviews</p>
        </div>
      </div>
      {/* Reviews List */}
      <div className="space-y-6">
        <div className="css-4 css-25 css-53 border-gray-200 css-41">
          <div className="css-11 css-12 css-13 css-59">
            <div className="css-11 css-12 space-x-4">
              <div className="w-12 h-12 css-79 css-76 css-11 css-12 css-89">
                <span className="css-22 css-36">RS</span>
              </div>
              <div>
                <h4 className="css-36 css-17">Rajesh Sharma</h4>
                <p className="css-20 css-48">2 weeks ago</p>
              </div>
            </div>
            <div className="css-11 text-accent">⭐⭐⭐⭐⭐</div>
          </div>
          <p className="css-20">
            Excellent service from Premier Properties! They helped us find our
            dream home in Gurgaon. The team was professional, knowledgeable, and
            made the entire process seamless.
          </p>
        </div>
        <div className="css-4 css-25 css-53 border-gray-200 css-41">
          <div className="css-11 css-12 css-13 css-59">
            <div className="css-11 css-12 space-x-4">
              <div className="w-12 h-12 css-79 css-76 css-11 css-12 css-89">
                <span className="css-22 css-36">PG</span>
              </div>
              <div>
                <h4 className="css-36 css-17">Priya Gupta</h4>
                <p className="css-20 css-48">1 month ago</p>
              </div>
            </div>
            <div className="css-11 text-accent">⭐⭐⭐⭐⭐</div>
          </div>
          <p className="css-20">
            Outstanding experience! They showed us multiple options within our
            budget and helped us negotiate the best price. Great value for
            money!
          </p>
        </div>
      </div>
    </div>
  </section>
</div>

  );
};

export default Review;