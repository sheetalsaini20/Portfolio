import React, { useState } from "react";
import { BsGrid3X2Gap } from "react-icons/bs";
import CommonHeading from "../utills/CommonHeading";
import { portfolioData } from "../utills/customData";
import { Modal, Tab, Tabs } from "react-bootstrap";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { FaGlobeAmericas, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Portfolio({ id }) {
  const imageUrl = './assets/images/';
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);// State to hold selected item
  const handleClose = () => setShowProjectModal(false);
  const handleShow = (item) => {
    setSelectedItem(item); // Set selected item when modal is shown
    setShowProjectModal(true);
  };
  return (
    <div className="portfolio_sec py-90" id={id}>
      <CommonHeading
        heading="PORTFOLIO"
        icon={<BsGrid3X2Gap />}
        dataAos="fade-up"
      />
      <h1 data-aos="fade-up" className="main-heading">
        Featured  <span className="theme-txt">Projects</span>
      </h1>

      <div className="row portfolio-item">

        <div className="col-md-6">
          <div className="portfolio-item-card">

          </div>
        </div>
      </div>
      <div className="portfolio-flters">
        {/* <Tabs
          defaultActiveKey="dashboard"
          id="uncontrolled-tab-example"
          className="mb-3" data-aos="zoom-in"
        >
          {portfolioData.map((tab, index) => {
            return (
              <Tab key={index} eventKey={tab.title.toLowerCase()} title={tab.title} className='portfolio-tab'>
                <div className="row">
                  {tab.data.map((item, itemIndex) => {
                    return (
                      <div key={item.id} className="col-md-6 port-cards" data-aos="zoom-in-down" data-aos-duration="10000">
                        <div className="tab-item card-box">
                          <img src={item.imageUrl} alt={`Item ${item.id}`} className='project-image' />
                          <div className="hovered-text ">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <p>{item.description}</p>
                                <h1 className="text_B main-heading">{item?.projectName}</h1>
                              </div>
                              <div className="next-icon pointer">
                                <img src={imageUrl + "view-next.svg"} alt="" onClick={() => handleShow(item)} />
                              </div>
                            </div>
                            <div className="tech-list mb-3">
                              {item.tech && item.tech.map((tech, techIndex) => (
                                <span className="icon-box mx-2 px-4 grey-txt py-2 rounded-5 small" key={techIndex}>{tech.name}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Tab>
            );
          })}
        </Tabs> */}
         {portfolioData.map((tab, index) => {
            return (
              <div className='portfolio-tab'>
                <div className="row">
                  {tab.data.map((item, itemIndex) => {
                    return (
                      <div key={item.id} className="col-md-6 port-cards" data-aos="zoom-in-down" data-aos-duration="10000">
                        <div className="tab-item card-box">
                          <div className="project-image-box">
                          <img src={item.imageUrl} alt={`Item ${item.id}`} className='project-image' /></div>
                          <div className="hovered-text ">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="col-sm-9">
                                <p className="port-desc">{item.description}</p>
                                <h1 className="text_B main-heading  ">{item?.projectName}</h1>
                              </div>
                              <div className="next-icon pointer">
                                <img src={imageUrl + "view-next.svg"} alt="" onClick={() => handleShow(item)} />
                              </div>
                            </div>
                            <div className="tech-list mb-3 d-flex flex-wrap ">
                              {item.tech && item.tech.map((tech, techIndex) => (
                                <span className="icon-box mx-2 px-4 grey-txt py-2 mb-3 rounded-5 small" key={techIndex}>{tech.name}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
      <Modal show={showProjectModal} className="right-modal project-modal" onHide={handleClose}>
        <Modal.Header >
          <div className="bck-btn pointer" onClick={handleClose}>
            <IoChevronBackCircleOutline className="grey-txt" />
          </div>
          <Modal.Title className="theme-txt text_SB pointer" onClick={handleClose}>
            Back to the projects.
            {/* {selectedItem?.projectName} */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="pro-detail-heading ps-3">
            <h1 className="project-modal-title text_SB">
              {selectedItem?.projectName}
            </h1>
            <p className="project-modal-desc mb-4 pt-3">
              {/* {selectedItem?.description} */}
            </p>
          </div>
          {/* Display other information about the selected item here */}
          <div className="project-modal-screen ">
            <img src={selectedItem?.imageUrl} alt="" className="project-image " />
          </div>
          <div className="pro-about my-5 pro-data ps-3">
            <h4 className="text_M my-3 small-title">About</h4>
            <p>
              {selectedItem?.description}
            </p>
          </div>
          <div className="pro-tech ps-3 my-5 pro-data">
            <h4 className="text_M my-3 small-title">Technologies</h4>
            <div className="pro-tech-tech pt-3">
              {selectedItem?.tech?.length ? selectedItem?.tech?.map((tech, techIndex) => (
                <span className="icon-box mx-2 px-4 grey-txt py-2 rounded-5 small" key={techIndex}>{tech?.name}</span>
              )) : <span className="text_B no_data ">No data</span>}
            </div>
          </div>
          <div className="pro-web ps-3 my-5 pro-data">
            <h4 className="text_M my-3 small-title"><FaGlobeAmericas className="me-2" /> Website</h4>
            <p><Link to={selectedItem?.projectLink} target="_blank"><span className="icon"> <FaExternalLinkAlt className="me-3" /></span>{selectedItem?.projectLink} </Link></p>
          </div>
          <div className="pro-gitHub ps-3 my-5 pro-data">
            <h4 className="text_M my-3 small-title"><FaGithub className="me-2" /> Github</h4>
            <p><Link to={selectedItem?.projectLink} target="_blank"><span className="icon"> <FaExternalLinkAlt className="me-3" /></span>{selectedItem?.projectLink} </Link></p>
          </div>
        </Modal.Body>
        <Modal.Footer className="project-footer">
          <div className="project-footer-link">
            <Link to={selectedItem?.projectLink} target="_blank">Open project<FaExternalLinkAlt className="ms-3" />
            </Link>
          </div>
        </Modal.Footer>
      </Modal>
    </div>

  );
}
