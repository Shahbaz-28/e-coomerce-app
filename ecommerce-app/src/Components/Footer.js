import React from "react";
import "../styles/footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram from "../Assets/instagram_icon.png";
import pintrest from "../Assets/pintester_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-social-icons-container">
          <img src={instagram} alt="" />
        </div>

        <div className="footer-social-icons-container">
          <img src={pintrest} alt="" />
        </div>

        <div className="footer-social-icons-container">
          <img src={whatsapp} alt="" />
        </div>
      </div>
     
     <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2023 - All Reserved</p>
     </div>


    </div>
  );
};

export default Footer;
