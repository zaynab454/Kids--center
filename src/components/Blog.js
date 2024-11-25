import React from "react";

const Blog = () => (
  <section className="py-5">
    <div className="container text-center">
      <h2 className="mb-4">Latest News and Blog</h2>
      <p className="mb-5">Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura.</p>
      <img src="/images/hdg-01.png"
              alt="" className="mb-5"/>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card border border-success border-thick shadow-lg p-3">
            <img src="/images/blog-01.jpg" className="card-img-top" alt="Blog 1" />
            <div class="d-flex gap-3 mt-3 text-muted small">

              <div class="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm11 3H1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3zm-1 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5z" />
                </svg>
                <span class="ms-1">15 Sep 2016</span>
              </div>


              <div class="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                  <path d="M8 15s-1-.606-2-1.48C4.319 12.745 2 11.198 2 8.5 2 6.67 3.344 5.5 4.615 5.5c.81 0 1.635.413 2.385 1.206C7.752 5.833 8.54 5.5 9.385 5.5 10.656 5.5 12 6.67 12 8.5c0 2.698-2.319 4.245-4 5.02-.999.874-2 1.48-2 1.48z" />
                </svg>
                <span class="ms-1">17</span>
              </div>


              <div class="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                  <path d="M4.904 1.687A7.495 7.495 0 0 1 8 1.5c4.136 0 7.5 3.261 7.5 7.3 0 1.744-.91 3.31-2.301 4.423a.5.5 0 0 1 .001.778A8.488 8.488 0 0 1 8 15.5a7.456 7.456 0 0 1-3.095-.658L.875 16l.5-3.947a8.402 8.402 0 0 1-.442-.877A7.5 7.5 0 0 1 4.904 1.687zM1.5 8.8a6.5 6.5 0 0 0 12.478 2.587.5.5 0 0 1 .399-.58 5.988 5.988 0 0 0 1.123-3.314c0-3.439-3.153-6.3-7-6.3a6.479 6.479 0 0 0-2.647.53A6.519 6.519 0 0 0 1.5 8.8z" />
                </svg>
                <span class="ms-1">4</span>
              </div>
            </div>

            <div className="card-body text-start">
              <h5 className="card-title">How kids think about Earth</h5>
              <p className="card-text">Lorem Ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsumnibh id elit.</p>          
              </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card custom-border shadow p-3">
            <img src="/images/blog-02.jpg" className="card-img-top" alt="Blog 2" />
            <div class="d-flex gap-3 mt-3 text-muted small">

<div class="d-flex align-items-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm11 3H1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3zm-1 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5z" />
  </svg>
  <span class="ms-1">15 Sep 2016</span>
</div>


<div class="d-flex align-items-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
    <path d="M8 15s-1-.606-2-1.48C4.319 12.745 2 11.198 2 8.5 2 6.67 3.344 5.5 4.615 5.5c.81 0 1.635.413 2.385 1.206C7.752 5.833 8.54 5.5 9.385 5.5 10.656 5.5 12 6.67 12 8.5c0 2.698-2.319 4.245-4 5.02-.999.874-2 1.48-2 1.48z" />
  </svg>
  <span class="ms-1">17</span>
</div>


<div class="d-flex align-items-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
    <path d="M4.904 1.687A7.495 7.495 0 0 1 8 1.5c4.136 0 7.5 3.261 7.5 7.3 0 1.744-.91 3.31-2.301 4.423a.5.5 0 0 1 .001.778A8.488 8.488 0 0 1 8 15.5a7.456 7.456 0 0 1-3.095-.658L.875 16l.5-3.947a8.402 8.402 0 0 1-.442-.877A7.5 7.5 0 0 1 4.904 1.687zM1.5 8.8a6.5 6.5 0 0 0 12.478 2.587.5.5 0 0 1 .399-.58 5.988 5.988 0 0 0 1.123-3.314c0-3.439-3.153-6.3-7-6.3a6.479 6.479 0 0 0-2.647.53A6.519 6.519 0 0 0 1.5 8.8z" />
  </svg>
  <span class="ms-1">4</span>
</div>
</div>
            <div className="card-body text-start">
              <h5 className="card-title">Interactive Learning Techniques</h5>
              <p className="card-text">Lorem Ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsumnibh id elit.</p>           
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="card custom-border shadow p-3">
            <img src="/images/blog-03.jpg" className="card-img-top" alt="Blog 3" />
            <div class="d-flex gap-3 mt-3 text-muted small">

<div class="d-flex align-items-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm11 3H1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3zm-1 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5z" />
  </svg>
  <span class="ms-1">15 Sep 2016</span>
</div>


<div class="d-flex align-items-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
    <path d="M8 15s-1-.606-2-1.48C4.319 12.745 2 11.198 2 8.5 2 6.67 3.344 5.5 4.615 5.5c.81 0 1.635.413 2.385 1.206C7.752 5.833 8.54 5.5 9.385 5.5 10.656 5.5 12 6.67 12 8.5c0 2.698-2.319 4.245-4 5.02-.999.874-2 1.48-2 1.48z" />
  </svg>
  <span class="ms-1">17</span>
</div>


<div class="d-flex align-items-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
    <path d="M4.904 1.687A7.495 7.495 0 0 1 8 1.5c4.136 0 7.5 3.261 7.5 7.3 0 1.744-.91 3.31-2.301 4.423a.5.5 0 0 1 .001.778A8.488 8.488 0 0 1 8 15.5a7.456 7.456 0 0 1-3.095-.658L.875 16l.5-3.947a8.402 8.402 0 0 1-.442-.877A7.5 7.5 0 0 1 4.904 1.687zM1.5 8.8a6.5 6.5 0 0 0 12.478 2.587.5.5 0 0 1 .399-.58 5.988 5.988 0 0 0 1.123-3.314c0-3.439-3.153-6.3-7-6.3a6.479 6.479 0 0 0-2.647.53A6.519 6.519 0 0 0 1.5 8.8z" />
  </svg>
  <span class="ms-1">4</span>
</div>
</div>
            <div className="card-body text-start">
              <h5 className="card-title">The Future of Education</h5>
              <p className="card-text">Lorem Ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsumnibh id elit.</p>           
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Blog;
