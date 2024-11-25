import React from "react";

const Header = () => (
  <header className="bg-light py-3 shadow-sm">
    <div className="container d-flex justify-content-between align-items-center">
      <img src="/images/logo.png" alt="Kids Center" className="w-25" />

      <div className="d-none d-lg-flex space-x-4 gap-4">
        <p className="text-dark text-muted">HOME</p>
        <p className="text-dark text-muted">ABOUT US</p>
        <p className="text-dark text-muted">COURSES</p>
        <p className="text-dark text-muted">EVENTS</p>
        <p className="text-dark text-muted">NEWS</p>
        <p className="text-dark text-muted">TEAM</p>
        <p className="text-dark text-muted">PAGES</p>
        <p className="text-dark text-muted">CONTACT US</p>
      </div>

      <div className="d-lg-none">
        <button className="btn btn-outline-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i> 
        </button>
      </div>


      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <p className="text-dark text-muted">HOME</p>
          <p className="text-dark text-muted">ABOUT US</p>
          <p className="text-dark text-muted">COURSES</p>
          <p className="text-dark text-muted">EVENTS</p>
          <p className="text-dark text-muted">NEWS</p>
          <p className="text-dark text-muted">TEAM</p>
          <p className="text-dark text-muted">PAGES</p>
          <p className="text-dark text-muted">CONTACT US</p>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
