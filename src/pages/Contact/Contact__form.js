import React from "react";
import { Button } from "../../components/Navbar/Login";
import "../../assets/css/main.css";

const ContactForm = () => {
  return (
    <div className="contactform">
      <div>
        <label  htmlFor="name">Full name</label>
        <br />
        <input id="name"  tpye="text" />
      </div>
      <div>
        <label htmlFor="phone">number</label>
        <br />

        <input id="phone" tpye="number" />
      </div>
      <div>
        <label htmlFor="adress">Address</label>
        <br />

        <input id="adress" tpye="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <br />

        <input id="email" tpye="email" />
      </div>
        <br />
      <Button style={{background:'#211f54',marginLeft:'30%'}}>Submit message</Button>
    </div>
  );
};

export default ContactForm;
