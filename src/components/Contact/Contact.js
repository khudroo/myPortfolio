import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import contactImg from "../../img/my-bg3.jpg";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g9i181j",
        "template_36u63rd",
        form.current,
        "user_6XmSKCXGHGpVYEt8JYejN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <div className="contact component__space" id="contact">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="contact__box">
              <div className="contact__meta">
                <h1 className="hire__text">Hire Me.</h1>
                <p className="hire__text white">I am available for freelance work. Connect with me via phone:</p>
                <p className="hire__text white">
                  <strong>+88-01738299508</strong> or email <strong>jahirul.islam.programmer@gmail.com</strong>
                </p>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" required name="name" className="contact name" placeholder="Your name *" />
                <input type="email" required name="email" className="contact email" placeholder="Your Email *" />
                <input type="text" required name="subject" className="contact subject" placeholder="Write a Subject" />
                <textarea required name="message" id="message" placeholder="Write Your message" />
                <button className="btn contact pointer" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img src={contactImg} alt="" className="contact__img img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
