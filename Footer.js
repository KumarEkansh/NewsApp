import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/ekansh-kumar-2975651a7">
          Ekansh Kumar
        </a>
      </span>
      <hr style={{ width: "70%" }} />
      <div className="iconContainer">
        <a href="https://www.facebook.com/ekansh.kumar.37/" target="__blank">
        <i className="fab fa-facebook-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/ekansh-kumar-2975651a7" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/KumarEkansh" target="___blank">
        <i className="fab fa-github fa-2x"></i>
        </a>
       
        
      </div>
    </div>
  );
};

export default Footer;