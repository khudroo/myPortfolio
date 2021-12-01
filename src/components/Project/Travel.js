import React from "react";

import screen4 from "../../img/screen4.jpg";
import screen5 from "../../img/screen5.jpg";
import screen6 from "../../img/screen6.jpg";

const Travel = () => {
  return (
    <div className="container">
      <div className="">
        <h1 className="text-center text-dark p-4">
          Sky-Traveler - Turism Website
        </h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={screen4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-dark ">Our Packages</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={screen5} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title  text-dark ">What Our Client Say</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={screen6} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-dark ">Our Gallery</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <h4 className="card-title text-dark">Project Overview</h4>
        <ul className="list-group">
          <li className="list-group-item">
            Responsive MERN Stack App and Implementation Page.
          </li>
          <li className="list-group-item">
            Implemented Authentication System With Firebase.
          </li>
          <li className="list-group-item">You can Place your order here</li>
          <li className="list-group-item">Firebase</li>
          <li className="list-group-item">React Hook Form</li>
        </ul>
      </div>
      <div className="py-5 d-flex">
        <div
          className="btn-group align-item-center"
          role="group"
          aria-label="Basic outlined example"
        >
          <button type="button" className="btn">
            <a
              className="text-white text-decoration-none"
              href="https://hw-health-care-10.web.app/"
              target="_blank"
            >
              Live 
            </a>
          </button>
          <button type="button" className="btn">
            <a
              className="text-white text-decoration-none"
              href="https://github.com/khudroo/tourism-website"
              target="_blank"
            >
              Client-S
            </a>
          </button>
          <button type="button" className="btn">
            <a
              className="text-white text-decoration-none"
              href="https://github.com/khudroo/tourism-website-server"
              target="_blank"
            >
              Server-S
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Travel;
