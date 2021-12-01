import React from "react";
import footerImg from "../../img/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ backgroundColor: "#000", padding: "10px 20px", zIndex: "100" }}
    >
      <img
        src={footerImg}
        style={{ width: "50px" }}
        alt=""
        className="footer__img pointer"
      />
      <span
        className="copyright"
        style={{ color: "white", fontSize: "14px", opacity: "0.75" }}
      >
        Copyright © 2021 programmer Md. Jahirul Islam. All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;
