import React, { useState } from "react";
import { assets } from "../assets/assets";
const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3b84335f-ace8-4484-8976-e5bc57e8c75d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    };

  return (
    <div className="container-fluid contact">
      <div className="my-3 py-3">
        <p className="text-center fw-bold" style={{ color: `#212ea0` }}>
          CONTACT US
        </p>
        <h3 className="text-center fs-1 fw-bold">Get in Touch</h3>
      </div>
      <div className="container">
        <div className="row justify-content-center gap-3">
          <div className="col-lg-5 col-12">
            <div className="d-flex gap-3 align-items-center">
              <h3>Send a message</h3>
              <img src={assets.msg_icon} alt="" style={{ width: `35px` }} />
            </div>
            <p className="text-secondary">
              Feel free to reach out through contact form or find our contact
              information below. Your feedback, questions, and suggestions are
              important to us as we strive to provide exceptional service to our
              university community.
            </p>
            <div className="d-flex gap-3 align-items-center my-3 text-secondary">
              <img src={assets.mail_icon} alt="" style={{ width: `25px` }} />
              Contact@GreatStack.dev
            </div>
            <div className="d-flex gap-3 align-items-center my-3 text-secondary">
              <img src={assets.phone_icon} alt="" style={{ width: `25px` }} />
              +1 123-456-7890
            </div>
            <div className="d-flex gap-3 align-items-center my-3 text-secondary">
              <img
                src={assets.location_icon}
                alt=""
                style={{ width: `25px` }}
              />
              Contact@GreatStack.dev
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label for="name" className="form-label text-secondary">
                 Your name
                </label>
                <input
                placeholder="Enter your name"
                  type="text"
                  className="form-control bg-light"
                  id="name"
                  aria-describedby="emailHelp"
                /> 
              </div>

              <div className="mb-3">
                <label for="phone" className="form-label text-secondary">
                  Phone Number
                </label>
                <input
                placeholder="Enter your mobile number"
                  type="text"
                  className="form-control bg-light"
                  id="phone"
                  aria-describedby="emailHelp"
                /> 
              </div>

              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label text-secondary">
                 Your Email 
                </label>
                <input
                placeholder="Enter your email id"
                  type="email"
                  className="form-control bg-light"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                /> 
              </div>

              <div className  ="mb-3">
                <label for="message" className="form-label text-secondary">
                  Write your message here
                </label>
             <textarea placeholder="Enter your message" name="message" className="form-control bg-light" id="message" ></textarea>
              </div>
             
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <span className="d-block mb-3">{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
