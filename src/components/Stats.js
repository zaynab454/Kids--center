import React from "react";

const KidsCenterStats = () => (
  <section
    className="py-5 absolute inset-0 bg-black opacity-70"
    style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/banner-04.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height:"600px",
    }}
  >

    <div className="container mx-auto px-4 relative z-10 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4">
        Facts and Figures About Kids Center
      </h2>
      <p className="text-base sm:text-lg text-300 text-white mb-6">
        Discover amazing achievements and milestones we have reached over the years.
      </p>
      <img src="/images/hdg-01.png"
              alt="" className="mb-5"/>


      <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">

  <div className="text-center d-flex flex-column align-items-center ">
    <div className="d-flex align-items-center gap-2">
      <h3 className="display-4 text-light">2500+</h3>
      <p className="fs-5 text-light">Students</p>
    </div>
    <div className="w-50 mt-2" style={{ height: '5px', backgroundColor: '#4CAF50' }}></div>
  </div>

  <div className="text-center d-flex flex-column align-items-center ">
    <div className="d-flex align-items-center gap-2">
      <h3 className="display-4 text-light">3000+</h3>
      <p className="fs-5 text-light">Graduates</p>
    </div>
    <div className="w-50 mt-2" style={{ height: '5px', backgroundColor: '#42A5F5'  }}></div>
  </div>

  <div className="text-center d-flex flex-column align-items-center ">
    <div className="d-flex align-items-center gap-2">
      <h3 className="display-4 text-light">3500+</h3>
      <p className="fs-5 text-light">Awards</p>
    </div>
    <div className="w-50 mt-2" style={{ height: '5px', backgroundColor: '#FF5252' }}></div>
  </div>

  <div className="text-center d-flex flex-column align-items-center ">
    <div className="d-flex align-items-center gap-2">
      <h3 className="display-4 text-light">5500+</h3>
      <p className="fs-5 text-light">Members</p>
    </div>
    <div className="w-50 mt-2" style={{ height: '5px', backgroundColor: '#FFA726' }}></div>
  </div>
</div>

{/* Boutons */}
<div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-5 mt-10">
  <button className="btn btn-outline-light btn-lg px-5">See More</button>
  <button className="btn btn-outline-light btn-lg px-5">Buy Now</button>
</div>

    </div>
  </section>
);

export default KidsCenterStats;
