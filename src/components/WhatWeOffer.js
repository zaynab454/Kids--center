import React from "react";

const WhatWeOffer = () => (
  <section className="container py-5 text-center">
    <h2 className="mb-5 display-5">What We Offer</h2>
    <img src="/images/hdg-01.png"
              alt="" className="mb-5"/>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {/* Card 1 */}
      <div className="col">
        <div className="d-flex align-items-center">
          <img src="/images/lg1.png" alt="Healthy Food" className="rounded-circle me-3" style={{ width: "80px", height: "80px" }} />
          <div className="text-start">
            <h5>Healthy Food</h5>
            <div className="mt-2" style={{ width: "85px", height: "5px", backgroundColor: "#f64c1e", marginLeft: "0" }}></div>
            <p className="mt-2 text-muted">We provide nutritious meals to support your child's growth and development.</p>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="col">
        <div className="d-flex align-items-center">
          <img src="/images/lg2.png" alt="Positive Learning" className="rounded-circle me-3" style={{ width: "80px", height: "80px" }} />
          <div className="text-start">
            <h5>Positive Learning</h5>
            <div className="mt-2" style={{ width: "65px", height: "5px", backgroundColor: "#008dd2", marginLeft: "0" }}></div>
            <p className="mt-2 text-muted">Our curriculum is designed to foster a love for learning in every child.</p>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="col">
        <div className="d-flex align-items-center">
          <img src="/images/lg3.png" alt="Love & Care" className="rounded-circle me-3" style={{ width: "80px", height: "80px" }} />
          <div className="text-start">
            <h5>Love & Care</h5>
            <div className="mt-2" style={{ width: "80px", height: "5px", backgroundColor: "#fc0018", marginLeft: "0" }}></div>
            <p className="mt-2 text-muted">We create a nurturing environment where every child feels valued and supported.</p>
          </div>
        </div>
      </div>
      {/* Card 4 */}
      <div className="col">
        <div className="d-flex align-items-center">
          <img src="/images/lg4.png" alt="Multi Language" className="rounded-circle me-3" style={{ width: "80px", height: "80px" }} />
          <div className="text-start">
            <h5>Multi Language</h5>
            <div className="mt-2" style={{ width: "50px", height: "5px", backgroundColor: "#80cd33", marginLeft: "0" }}></div>
            <p className="mt-2 text-muted">We introduce children to multiple languages, preparing them for a global world.</p>
          </div>
        </div>
      </div>
      {/* Card 5 */}
      <div className="col">
        <div className="d-flex align-items-center">
          <img src="/images/lg5.png" alt="Indoor/Outdoor Games" className="rounded-circle me-3" style={{ width: "80px", height: "80px" }} />
          <div className="text-start">
            <h5>Indoor/Outdoor Games</h5>
            <div className="mt-2" style={{ width: "70px", height: "5px", backgroundColor: "#efc336", marginLeft: "0" }}></div>
            <p className="mt-2 text-muted">We balance indoor and outdoor activities to promote physical and mental well-being.</p>
          </div>
        </div>
      </div>
      {/* Card 6 */}
      <div className="col">
        <div className="d-flex align-items-center">
          <img src="/images/lg6.png" alt="Bus Service" className="rounded-circle me-3" style={{ width: "80px", height: "80px" }} />
          <div className="text-start">
            <h5>Bus Service</h5>
            <div className="mt-2 " style={{ width: "55px", height: "5px", backgroundColor: "#896ac3", marginLeft: "0" }}></div>
            <p className="mt-2 text-muted">We offer safe and reliable transportation for your convenience.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhatWeOffer;
