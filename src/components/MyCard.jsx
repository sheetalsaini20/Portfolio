import React from "react";
//images
import { FaBehance, FaLinkedinIn } from "react-icons/fa";

import { Link } from "react-router-dom";

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
        <h1 className="text_B text-nowrap">
          {/* Sheetal Kapoor  */}
          user name
        </h1>
        <h4 class="designation text-end">
          Web Designer &amp; ReactJs Developer
        </h4>
      </div>
      <div className="per_card_profile">
        <img src={imageUrl + "profile.png"} alt="" />
      </div>
      <div className="text-center">
        <h3 className="text_L"> sheetalsaini1610@gmail.com </h3>
        <h3 className="text_L"> Haryana </h3>
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
  );
}
