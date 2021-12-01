import React from "react";
import "./About.css";
import aboutImg from "../../img/my-bg2.jpg";
function About() {
  return (
    <div className="about component__space" id="about">
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <div>
            <img src={aboutImg} alt="" className="about__img img-fluid" />
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Hi, This is Md. Jahirul Islam, I am a fullstack web developer. I have good Knowledge about HTML5, CSS3,
                JavaScript, React, Bootstrap, Material UI, Firebase, Node Js, Express Js, MongoDB, React
                Router, React Hook Form etc
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>

    {/* UP TO TOP BTN */}
    <div className="up__to__top__btn">
      <a href="#home" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
      </a>
    </div>
  </div>
  );
}

export default About;
