import React from "react";
//images
import { FaBehance, FaEnvelope, FaLinkedinIn } from "react-icons/fa";

import { Link } from "react-router-dom";
import { ImgBaseUrl, ImgConst } from "../constants/ImgConst";
import { FaLocationPin, FaLocationPinLock } from "react-icons/fa6";

export default function MyCard() {
  const imageUrl = "./assets/images/";
  const intraction = [
    {
      id: 1,
      title: "Linked In",
      link: "",
      icon: <FaLinkedinIn />,
    },
    {
      id: 2,
      title: "Behance",
      link: "",
      icon: <FaBehance />,
      width: "22px",
    },
  ];
  return (
    <div className="per_card sidebar">
      <div className="per_card_header d-sm-flex gap-xl-4 align-items-center justify-content-between w-100">
        {/* <h1 className="text_B text-nowrap"> 
          user name
        </h1>
        <h4 class="designation text-end">
          Web Designer &amp; ReactJs Developer
        </h4> */}
        <div className="d-flex justify-content-end w-100 gap-3 theme-txt align-items-center available-heading">
          <div className="animate-pulse"></div>
          <span className="text-green-400 text-xs font-medium">Available for work</span>
        </div>
      </div>
      <div className="per_card_profile">
        <img src={imageUrl + "profile.png"} alt="" />
      </div>
      <div className="text-center">
        <h1 className="text_B mb-4 text-nowrap">Sheetal Kapoor</h1>
        {/* <p className="pro-txt">
          Web Designer & UI-UX / Frontend
          Developer (React.js)
        </p> */}

        <div className="more-links mt-5">
          <ul className="list-unstyled px-lg-5">
            <li className="d-flex hover-cont mb-4 w-100 gap-3 align-items-center list-group-horizontal p-0">
              <span className="ico-box">
                <FaEnvelope />
              </span>
              sheetalsaini1610@gmail.com
            </li>
            <li className="d-flex hover-cont w-100 gap-3 align-items-center list-group-horizontal p-0">
              <span className="ico-box">
                <FaLocationPinLock />
              </span>
              Haryana, India
            </li>
          </ul>
        </div>

        <div className="more-links mt-5">
          <ul className="list-group d-flex justify-content-center  list-group-horizontal p-0">
            {intraction?.map((item, index) => {
              return (
                <li className="list-group-item bg-transparent border-0">
                  <Link to={item?.link}>
                    {item?.icon}
                    {/* <img src={item?.icon} alt="" width={item?.width ? item?.width : "20px"} /> */}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
