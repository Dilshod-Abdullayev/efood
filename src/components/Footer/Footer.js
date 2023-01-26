import React from "react";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { TbMessageDots } from "react-icons/tb";
import img from "../../assets/img/Logo.png";
import "../../assets/css/main.css";
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__box">
        <img
          width="100%"
          style={{ marginTop: "25px" }}
          height="40px"
          src={img}
        />
        <p>
          <CiLocationOn /> Dhaka, Bangladesh
        </p>
        <p>
          <CiPhone /> 0943833399
        </p>
        <p>
          <TbMessageDots /> support@efood.com
        </p>
        <div className="footer-socials">
          <div className="icon">
            <FiFacebook />
          </div>
          <div className="icon">
            <FiTwitter  />
          </div>
          <div className="icon">
            <FiInstagram  />
          </div>
          <div className="icon">
            <FiYoutube  />
          </div>
        </div>
      </div>
      <div className="footer__box">
        <h1 className="footer-title">Service </h1>
        <p>How it works</p>
        <p>Home delivery</p>
        <p>Prducts</p>
        <p>Menu</p>
      </div>
      <div className="footer__box">
        <h1 className="footer-title"> Company</h1>
        <p>About Us</p>
        <p>News</p>
        <p>Our trusted partner</p>
        <p>New users FAQ</p>
      </div>
      <div className="footer__box">
        <h1 className="footer-title"> Supports </h1>
        <p>Help center</p>
        <p>Feedbcak</p>
        <p>Contact us</p>
        <p>Terms conditins</p>
      </div>
      <div className="footer__box">
        <h1 className="footer-title">Resources </h1>
        <p>Download app</p>
        <p>Blog</p>
        <p>What’s new</p>
        <p>Sitemap</p>
      </div>
    </div>
  );
};

export default Footer;
