import React from "react";

const Sponsors = () => {
  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="mb-4">Our Sponsors</h2>
        <p className="mb-5">Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura.</p>
        <img src="/images/hdg-01.png"
              alt="" className="mb-5"/>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <img
              src="/images/brand-01.jpg"
              alt=""
              className="img-fluid mb-3"
            />
          </div>
          <div className="col-md-3 col-sm-6">
            <img
              src="/images/brand-02.jpg"
              alt="Sponsor 2"
              className="img-fluid mb-3"
            />
          </div>
          <div className="col-md-3 col-sm-6">
            <img
              src="/images/brand-03.jpg"
              alt="Sponsor 3"
              className="img-fluid mb-3"
            />
          </div>
          <div className="col-md-3 col-sm-6">
            <img
              src="/images/brand-04.jpg"
              alt="Sponsor 4"
              className="img-fluid mb-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
