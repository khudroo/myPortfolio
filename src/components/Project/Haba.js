import React from "react";
import { Link } from "react-router-dom";
import screen1 from "../../img/screen1.jpg";
import screen2 from "../../img/screen2.jpg";
import screen3 from "../../img/screen3.jpg";

const Haba = () => {
  return (
    <div className="container">
      <div className="">
        <h1 className="text-center text-dark p-4">
          Haba Kids Toys - Product Sales
        </h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={screen1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-dark ">Premium Quality Toys</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={screen3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title  text-dark ">Login Option</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={screen2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-dark ">Dashboard Management</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <h4 className="card-title text-dark">Project Overview</h4>
        <ul className="list-group">
          <li className="list-group-item">Vanilla Bootstrap</li>
          <li className="list-group-item">React, React Router</li>
          <li className="list-group-item">Firebase</li>
          <li className="list-group-item">React Hook Form</li>
          <li className="list-group-item">Google fonts</li>
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
              href="https://haba-kids-toys.web.app/"
              target="_blank"
            >
              Live
            </a>
          </button>
          <button type="button" className="btn">
            <a
              className="text-white text-decoration-none"
              href="https://github.com/khudroo/haba-kids-toys-client"
              target="_blank"
            >
              Client-S
            </a>
          </button>
          <button type="button" className="btn">
            <a
              className="text-white text-decoration-none"
              href="https://github.com/khudroo/haba-kids-toys-server"
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

export default Haba;
