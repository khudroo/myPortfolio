import React from "react";

import screen7 from "../../img/screen7.jpg";
import screen8 from "../../img/screen8.jpg";
import screen9 from "../../img/screen9.jpg";

const Education = () => {
  return (
    <div className="container">
      <div className="">
        <h1 className="text-center p-4">
        Bavaian Internation School
        </h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={screen7} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-dark ">All Arrangements </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={screen8} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title  text-dark ">Our Services</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={screen9} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-dark ">Education News</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <h4 className="card-title">Project Overview</h4>
        <ul className="list-group">
          <li className="list-group-item">Responsive MERN Stack App and Implementation Page.</li>
          <li className="list-group-item">React, React Router</li>
          <li className="list-group-item">Implemented System With Firebase Hosting.</li>
          <li className="list-group-item">React Hook Form</li>
          <li className="list-group-item">You can Place your admission here.</li>
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
              href="https://review-website-khudroo.netlify.app/"
              target="_blank"
            >
              Live
            </a>
          </button>
          <button type="button" className="btn">
            <a
              className="text-white text-decoration-none"
              href="https://github.com/khudroo/review-website"
              target="_blank"
            >
              Client
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Education;
