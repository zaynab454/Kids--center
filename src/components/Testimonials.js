import React from "react";

const Testimonials = () => (
  <section className="py-5" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/banner-05.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
    
    <div className="container text-center">
      <h2 className="text-center mb-4 text-light">What Our Clients Say</h2>
      <img src="/images/hdg-01.png"
              alt="" className="mb-5"/>
      <div className="row gy-4">
        {/* Carte 1 */}
        <div className="col-md-4">
          <div className="card testimonial-card shadow-lg border-0 rounded-lg">
            <div className="card-body d-flex align-items-center">
              <img 
                src="/images/comment-01.jpg" 
                alt="Stephen Johns" 
                className="rounded-circle me-3" 
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
              <div>
                <p className="mb-2">"Kids Center has changed my child's life. Amazing teachers!"</p>
                <h5 className="fw-bold text-dark">Stephen Johns</h5>
                <p className="text-muted">Software Engineer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carte 2 */}
        <div className="col-md-4">
          <div className="card testimonial-card shadow-lg border-0 rounded-lg">
            <div className="card-body d-flex align-items-center">
              <img 
                src="/images/comment-02.jpg" 
                alt="James Stewart" 
                className="rounded-circle me-3" 
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
              <div>
                <p className="mb-2">"Great environment for kids. Highly recommend!"</p>
                <h5 className="fw-bold text-dark">James Stewart</h5>
                <p className="text-muted">Marketing Director</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carte 3 */}
        <div className="col-md-4">
          <div className="card testimonial-card shadow-lg border-0 rounded-lg">
            <div className="card-body d-flex align-items-center">
              <img 
                src="/images/comment-03.jpg" 
                alt="Rachel Kalib" 
                className="rounded-circle me-3" 
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
              <div>
                <p className="mb-2">"My kids love it here! The staff is wonderful."</p>
                <h5 className="fw-bold text-dark">Rachel Kalib</h5>
                <p className="text-muted">Doctor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
