import React from 'react';

const PopularCourses = () => {
  return (
    <div className="container my-5">
      {/* Title Section */}
      <div className="text-center mb-5">
        <h1 className="display-4">POPULAR COURSES</h1>
        <p className="text-muted">Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* Header Image */}
      <div className="text-center mb-5">
        <img src="/images/hdg-01.png" alt="Kids Center Milestones" className="img-fluid" />
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3">
  {/* Dropdown Button Replaced with Select */}
  <div className="form-group">
    <select className="form-select" aria-label="Select Courses" defaultValue="">
      <option value="" disabled selected>All Courses</option>
      <option value="new">New Courses</option>
      <option value="special">Special Courses</option>
      <option value="famous">Famous Courses</option>
    </select>
  </div>

  {/* Search Input */}
  <div className="d-flex">
    <input
      type="text"
      className="form-control"
      placeholder="Search for courses"
    />
    <button className="btn btn-success ms-2">
      SEARCH
    </button>
  </div>
</div>

      {/* Courses Grid */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {/* Course 1 */}
        <div className="col">
          <div className="card h-100">
            <img src="/images/latest-course-01.jpg" className="card-img-top" alt="Course 1" />
            <div className="card-body">
              <h5 className="card-title">Ask For What You Want</h5>
              <p className="card-text">Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
              <div>
                <img src="/images/latest-course-author.png" alt="Author" className="rounded-circle" width="30" height="30" />
                <span className="ms-2">John Smith</span>
              </div>
              <button className="btn btn-outline-success">Apply</button>
            </div>
          </div>
        </div>

        {/* Course 2 */}
        <div className="col">
          <div className="card h-100">
            <img src="./images/latest-course-02.jpg" className="card-img-top" alt="Course 2" />
            <div className="card-body">
              <h5 className="card-title">Little Singer Courses</h5>
              <p className="card-text">Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
              <div>
                <img src="/images/latest-course-author.png" alt="Author" className="rounded-circle" width="30" height="30" />
                <span className="ms-2">Stephen Johns</span>
              </div>
              <button className="btn btn-outline-success">Apply</button>
            </div>
          </div>
        </div>

        {/* Course 3 */}
        <div className="col">
          <div className="card h-100">
            <img src="/images/latest-course-03.jpg" className="card-img-top" alt="Course 3" />
            <div className="card-body">
              <h5 className="card-title">Designing with Type</h5>
              <p className="card-text">Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
              <div>
                <img src="/images/latest-course-author.png" alt="Author" className="rounded-circle" width="30" height="30" />
                <span className="ms-2">James Stewart</span>
              </div>
              <button className="btn btn-outline-success">Apply</button>
            </div>
          </div>
        </div>
      </div>

      {/* Load More Button */}
      <div className="text-center mt-5">
        <button className="btn btn-outline-success">LOAD MORE</button>
      </div>
    </div>
  );
}

export default PopularCourses;
