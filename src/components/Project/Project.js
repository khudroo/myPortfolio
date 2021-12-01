import React from "react";
import "./Project.css";
import Project1 from "../../img/project-1.jpg";
import Project2 from "../../img/project-2.jpg";
import Project3 from "../../img/project-3.jpg";
import { Link } from "react-router-dom";

function Project() {
  return (
    <div className="project component__space" id="project">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading">
              <h1 className="about__heading text-center">My Latest Projects</h1>
              <p className="heading text-center pb-5 p__color">
                The projects that I have recently completed.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-5">
          <div className="col-md-4">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">
                  Haba Kids Toys - Product Sales
                </h5>
                <h4 className="project__text">Buying Toys Related Website</h4>
                <Link
                  to="haba"
                  className="project__btn text-white text-decoration-none"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Sky Traveler - Turism Website</h5>
                <h4 className="project__text">Turism Related Website</h4>
                <Link
                  to="travel"
                  className="project__btn  text-white text-decoration-none"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Bavaian Internation School </h5>
                <h4 className="project__text">Education Related Website</h4>
                <Link
                  to="education"
                  className="project__btn  text-white text-decoration-none"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
