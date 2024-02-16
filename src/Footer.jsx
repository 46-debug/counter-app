import React from "react";

const year = new Date().getFullYear();

const Footer = () => {
  return <>
    <div className="footer">
      <p className="foot_p" > Copyright © {year} </p>
    </div>
  </>

};

export default Footer;