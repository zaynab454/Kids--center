import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* About Us */}
          <div className="col-md-3">
            <h5>About Us</h5>
            <p>Kids Center is a place where children can learn, grow, and have fun in a safe and nurturing environment.</p>
            <div className="d-flex gap-3">
              <p className="text-light bg-dark"><i className="fab fa-facebook"></i></p>
              <p className="text-light bg-dark"><i className="fab fa-twitter"></i></p>
              <p className="text-light bg-dark"><i className="fab fa-instagram"></i></p>
              <p className="text-light bg-dark"><i className="fab fa-youtube"></i></p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><p className="text-light bg-dark">Home</p></li>
              <li><p className="text-light bg-dark">About Us</p></li>
              <li><p className="text-light bg-dark">Courses</p></li>
              <li><p className="text-light bg-dark">Events</p></li>
              <li><p className="text-light bg-dark">Contact</p></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <h5>Contact Info</h5>
            <p><i className="fas fa-phone"></i> +1 (123) 456-7890</p>
            <p><i className="fas fa-envelope"></i> info@kidscenter.com</p>
            <p><i className="fas fa-map-marker-alt"></i> 123 Kids Street, Playful City, PC 12345</p>
          </div>

          {/* Newsletter */}
          <div className="col-md-3">
            <h5>Newsletter</h5>
            <p>Subscribe to our newsletter for updates and special offers.</p>
            <form>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                />
                <button className="btn btn-success" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="text-center">
          <p>© 2024 Kids Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
