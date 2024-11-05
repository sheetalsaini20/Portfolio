import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import CommonHeading from "../utills/CommonHeading";
import { MdOutlineEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { Button, Form } from "react-bootstrap";

export default function Contact({ id }) {
  return (
    <div className="contact_sec py-90" id={id}>
      <CommonHeading
        heading="CONTACT"
        icon={<MdOutlineMailOutline />}
        dataAos="fade-up"
      />
      <h1 data-aos="fade-up" className="main-heading">
        Let's Work <span className="theme-txt"> Together!</span>
      </h1>
      <h1 class="text_L mb-4">sheetalsaini1610@gmail.com
      </h1>
      <div className="contact-info pt-5">
        <div className="row">
          <div className="col-md-6" data-aos="zoom-in-right" data-aos-duration="10000">
            <div className="card-box">
              <span className="icon">
                <FiMapPin />
              </span>
              <div className="div">
                <h3>
                  My Address
                </h3>
                <p className="mb-0 mt-0">Naraingarh,Abala,Haryana 134203</p>
              </div>
            </div>
          </div>
          {/* <div className="col-md-6" data-aos="zoom-in-left" data-aos-duration="10000">
            <div className="card-box">
              <span className="icon">
                <IoShareSocialOutline />
              </span>
              <div className="div">
                <h3>
                  Social Info
                </h3>
                <p className="mb-0 mt-0">Lorem </p></div>
            </div>
          </div> */}
          <div className="col-md-6" data-aos="zoom-in-right" data-aos-duration="10000">
            <div className="card-box">
              <span className="icon">
                <MdOutlineEmail />
              </span>
              <div className="div">
                <h3>
                  Email Me
                </h3>
                <p className="mb-0 mt-0">sheetalsaini1610@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="zoom-in-left" data-aos-duration="10000">
            <div className="card-box">
              <span className="icon">
                <IoCallOutline />
              </span>
              <div className="div">
                <h3>
                  Call Me
                </h3>
                <p className="mb-0 mt-0">8221834366 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form py-5 mt-5" data-aos="zoom-in" data-aos-duration="10000">
        <Form className="row">
          <Form.Group className="mb-4 col-md-6" controlId="formBasicName">
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>
          <Form.Group className="mb-4 col-md-6" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Your Email" autoComplete="off" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="subject">
            <Form.Control type="text" placeholder="Your Subject" autoComplete="off" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="meaasge">
            <Form.Control as="textarea" placeholder="Your Message" rows={3} />
          </Form.Group>
          <button className="theme-btn btn">
            Send Message
          </button>
        </Form>
      </div>
    </div>
  );
}
