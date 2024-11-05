import React from "react";
import { PiShapesBold } from "react-icons/pi";
import CommonHeading from "../utills/CommonHeading";
import { skills } from "../utills/customData";

export default function Skills({ id }) {
  return (
    <div className="skill_sec py-90" id={id}>
      <CommonHeading
        heading="MY SKILLS"
        icon={<PiShapesBold />}
        dataAos="fade-up"
      />
      <h1 data-aos="fade-up" className="main-heading">
        My <span className="theme-txt">Advantages</span>
      </h1>
      <div class="row skills text-center">
        {skills?.map((item, index) => {
          return (
            <div class="col-md-3 col-sm-6" data-aos={item?.animation}>
              <div class="skill">
                <div class="skill-inner">
                  <img
                    decoding="async"
                    src={item?.image}
                    alt="Figma"
                    width={"60px"}
                  />
                  <h2 class="percent">{item?.precentage}%</h2>
                </div>
                <p class="name">{item?.title}</p>
              </div>
            </div>
          )
        })}
        {/* <div class="col-md-3 col-sm-6" data-aos="fade-left">
          <div class="skill">
            <div class="skill-inner">
              <img
                decoding="async"
                src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/figma.png"
                alt="Figma"
              />
              <h2 class="percent">92%</h2>
            </div>
            <p class="name">Figma</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-6" data-aos="fade-bottom">
          <div class="skill">
            <div class="skill-inner">
              <img
                decoding="async"
                src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/framer.png"
                alt="Figma"
              />
              <h2 class="percent">85%</h2>
            </div>
            <p class="name">Framer</p>
          </div>
        </div>{" "}
        <div class="col-md-3 col-sm-6" data-aos="fade-top">
          <div class="skill">
            <div class="skill-inner">
              <img
                decoding="async"
                src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/webflow.png"
                alt="Figma"
              />
              <h2 class="percent">80%</h2>
            </div>
            <p class="name">Webflow</p>
          </div>
        </div>{" "}
        <div class="col-md-3 col-sm-6" data-aos="fade-right">
          <div class="skill">
            <div class="skill-inner">
              <img
                decoding="async"
                src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/react.png"
                alt="Figma"
              />
              <h2 class="percent">90%</h2>
            </div>
            <p class="name">React</p>
          </div>
        </div>{" "}
        <div class="col-md-3 col-sm-6" data-aos="fade-left">
          <div class="skill">
            <div class="skill-inner">
              <img
                decoding="async"
                src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/wordpress.png"
                alt="Figma"
              />
              <h2 class="percent">86%</h2>
            </div>
            <p class="name">WordPress</p>
          </div>
        </div>{" "}
        <div class="col-md-3 col-sm-6" data-aos="fade-bottom">
          <div class="skill">
            <div class="skill-inner">
              <img
                decoding="async"
                src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/laravel.png"
                alt="Figma"
              />
              <h2 class="percent">70%</h2>
            </div>
            <p class="name">Laravel/PHP</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
