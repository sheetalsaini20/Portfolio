import React, { useCallback, useEffect, useState } from "react";
import MyCard from "./MyCard";
import { Outlet } from "react-router-dom";
import Introduction from "../pages/Introduction";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Menu from "./Menu";

export default function PortalLayout() {

  const [activeTab, setActiveTab] = useState();
  const [backTop, setBackTop] = useState(false);
  const actionFunction = (e) => {
    e.preventDefault();
    setBackTop(window.scrollY > 200 ? true : false);
    scrollEventFunction(document.querySelectorAll("section[id]"));
  };

  const scrollEventFunction = useCallback((sections) => {
    // Get current scroll position
    let scrollY = window.pageYOffset;
    let sectionId;
    // Now we loop through sections to get height, top and ID values for each
    sections &&
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;

        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          if (sectionId === "contact") {
            return;
          }
          setActiveTab(sectionId);
        }
      });
  }, []);

  const backToTop = () => {
    window.scrollTo(0, 0);
    // navigate('/');
  };

  useEffect(() => {
    window.addEventListener("scroll", actionFunction);

    return () => {
      window.removeEventListener("scroll", actionFunction);
    };
    // loadScript('https://www.google.com/recaptcha/api.js?render=explicit')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div id="wrapper" className="main-portfolio">
      <div className="container-fluid">
        <div className="row m-0">
          <div className="col-lg-3 my-card">
            <MyCard />
          </div>
          <div className="port-header">
            <Menu
              activeTab={activeTab} />
          </div>
          <div className="col-xxl-9  col-xl-10 main-body">
            <div className="custom-container">
              {/* <Outlet /> */}
              <Introduction id="intro" />
              <About id="about" />
              <Resume id="resume" />
              <Skills id="skills" />
              <Portfolio id="portfolio" />
              <Contact id="contact" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
