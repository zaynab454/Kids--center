import React from "react";

const Teachers = () => (
  <section className="py-5">
    <div className="container text-center">
      <h2 className="text-center mb-4">Meet Our Best Teachers</h2>
      <p className="mb-5">
        Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliquam eget nibh etlibura.
      </p>
      <img src="/images/hdg-01.png" alt="" className="mb-5" />
      
      {/* Grid des enseignants */}
      <div className="row gy-4">
        {/* Carte 1: Janifer Steel */}
        <div className="col-md-6 col-lg-3">
          <div className="card shadow-lg rounded-lg overflow-hidden transition-shadow hover:shadow-2xl">
            <div className="position-relative overflow-hidden" style={{ height: '400px' }}>
              <img
                src="/images/best-teacher-01.jpg"
                alt="Janifer Steel"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              <button className="btn btn-success btn-circle position-absolute bottom-0 end-0 m-3">🔗</button>
            </div>
            <div className="card-body text-start">
              <h3 className="text-muted small fw-semibold">Sr. Teacher</h3>
              <h2 className="card-title h5 fw-bold text-dark">Janifer Steel</h2>
              <p className="card-text text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="small">
                <p className="d-flex align-items-center mb-1">
                  <span className="fw-semibold">📞</span>&nbsp; +124 456 7858
                </p>
                <p className="d-flex align-items-center">
                  <span className="fw-semibold">✉️</span>&nbsp; janifer@kidscenter.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Carte 2: James Brown */}
        <div className="col-md-6 col-lg-3">
          <div className="card shadow-lg rounded-lg overflow-hidden transition-shadow hover:shadow-2xl">
            <div className="position-relative overflow-hidden" style={{ height: '400px' }}>
              <img
                src="/images/best-teacher-02.jpg"
                alt="James Brown"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              <button className="btn btn-success btn-circle position-absolute bottom-0 end-0 m-3">🔗</button>
            </div>
            <div className="card-body text-start">
              <h3 className="text-muted small fw-semibold">Math Teacher</h3>
              <h2 className="card-title h5 fw-bold text-dark">James Brown</h2>
              <p className="card-text text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="small">
                <p className="d-flex align-items-center mb-1">
                  <span className="fw-semibold">📞</span>&nbsp; +124 789 1234
                </p>
                <p className="d-flex align-items-center">
                  <span className="fw-semibold">✉️</span>&nbsp; james@kidscenter.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Carte 3: Sara Levens */}
        <div className="col-md-6 col-lg-3">
          <div className="card shadow-lg rounded-lg overflow-hidden transition-shadow hover:shadow-2xl">
            <div className="position-relative overflow-hidden" style={{ height: '400px' }}>
              <img
                src="/images/best-teacher-03.jpg"
                alt="Sara Levens"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              <button className="btn btn-success btn-circle position-absolute bottom-0 end-0 m-3">🔗</button>
            </div>
            <div className="card-body text-start">
              <h3 className="text-muted small fw-semibold">Science Teacher</h3>
              <h2 className="card-title h5 fw-bold text-dark">Sara Levens</h2>
              <p className="card-text text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="small">
                <p className="d-flex align-items-center mb-1">
                  <span className="fw-semibold">📞</span>&nbsp; +124 567 8910
                </p>
                <p className="d-flex align-items-center">
                  <span className="fw-semibold">✉️</span>&nbsp; sara@kidscenter.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Carte 4: Emily Wilson */}
        <div className="col-md-6 col-lg-3">
          <div className="card shadow-lg rounded-lg overflow-hidden transition-shadow hover:shadow-2xl">
            <div className="position-relative overflow-hidden" style={{ height: '400px' }}>
              <img
                src="/images/best-teacher-04.jpg"
                alt="Emily Wilson"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              <button className="btn btn-success btn-circle position-absolute bottom-0 end-0 m-3">🔗</button>
            </div>
            <div className="card-body text-start">
              <h3 className="text-muted small fw-semibold">English Teacher</h3>
              <h2 className="card-title h5 fw-bold text-dark">Emily Wilson</h2>
              <p className="card-text text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="small">
                <p className="d-flex align-items-center mb-1">
                  <span className="fw-semibold">📞</span>&nbsp; +124 654 9870
                </p>
                <p className="d-flex align-items-center">
                  <span className="fw-semibold">✉️</span>&nbsp; emily@kidscenter.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Teachers;
