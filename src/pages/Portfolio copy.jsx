import React, { useState } from "react";
import { BsGrid3X2Gap } from "react-icons/bs";
import CommonHeading from "../utills/CommonHeading";
import { Carousel, Modal, Tab, Tabs } from "react-bootstrap";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { FaGlobeAmericas, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProjectBaseUrl } from "../constants/ImgConst";
import { portfolioData } from "../constants/customData";
export default function Portfolio({ id }) {
  const imageUrl = './assets/images/';
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);// State to hold selected item
  const handleClose = () => setShowProjectModal(false);

  const [showCarousel, setShowCarousel] = useState(false);

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

      <div className="portfolio-flters">
        <Tabs
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
                      <div className='portfolio-tab'>
                        <div className="row">
                          {tab.data.map((item, itemIndex) => {
                            return (
                              <div key={item.id} className="col-md-6 port-cards" data-aos="zoom-in-down" data-aos-duration="10000">
                                <div className="tab-item card-box">
                                  <div className="project-image-box">
                                    <img src={ProjectBaseUrl + item.imageUrl} alt={`Item ${item.id}`} className='project-image' /></div>
                                  <div className="hovered-text ">
                                    <div className="d-flex flex-0 justify-content-between align-items-top mt-4">
                                      <div className="pe-5 heading-box">
                                        <h1 className="text_B main-heading mb-2">{item?.projectName}</h1>
                                        {item?.projectSubtitle && <h2 className="text_B mb-0 pe-5">{item?.projectSubtitle}</h2>}
                                      </div>
                                      <div className="next-icon pointer">
                                        <img src={imageUrl + "view-next.svg"} alt="" onClick={() => handleShow(item)} />
                                      </div>
                                    </div>
                                    <p className="port-desc">{item.description}</p>

                                    <div className="tech-list d-flex flex-wrap ">
                                      {item.tech && item.tech.slice(0, 4).map((tech, techIndex) => (
                                        <span
                                          className="icon-box mx-2 px-4 grey-txt py-2 mt-4 rounded-5 small"
                                          key={techIndex}
                                        >
                                          {tech.name}
                                        </span>
                                      ))}

                                      {/* Show +count if more than 5 */}
                                      {item.tech && item.tech.length > 4 && (
                                        <span className="theme-txt py-2 mt-4  small pointer" onClick={() => handleShow(item)}>
                                          +{item.tech.length - 4} more
                                        </span>
                                      )}
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
              </Tab>
            );
          })}
        </Tabs>

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
          {/* Main preview with +count */}
          <div className="project-modal-screen position-relative">
            <img
              src={ProjectBaseUrl + selectedItem?.imageUrl}
              alt=""
              className="project-image"
            />
            {selectedItem?.screenList?.length > 0 && (
              <div
                className="extra-count-badge position-absolute top-0 end-0 m-2 px-3 py-1 rounded-5 bg-dark text-white small pointer"
                onClick={() => setShowCarousel(true)}
              >
                +{selectedItem.screenList.length}
              </div>
            )}
          </div>
          <div className="pro-about my-5 pro-data ps-3">
            <h4 className="text_M my-3 small-title">About</h4>
            <p>
              {selectedItem?.description}
            </p>
          </div>
          {/* Key Features */}
          <div className="pro-about my-5 pro-data ps-3">
            <h4 className="text_M my-3 small-title">Key Features:</h4>
            <p>
              {selectedItem?.keyFeatures}
            </p>
          </div>
          {/* My Role & Contributions */}
          <div className="pro-about my-5 pro-data ps-3">
            <h4 className="text_M my-3 small-title">My Role & Contributions:</h4>
            <p>
              {selectedItem?.myRole}
            </p>
          </div>
          <div className="pro-tech ps-3 my-5 pro-data">
            <h4 className="text_M my-3 small-title">Technologies</h4>
            <div className="pro-tech-tech pt-3 d-flex flex-wrap">
              {selectedItem?.techDetails?.length ? (
                selectedItem.techDetails.map((tech, index) => (
                  <p key={index} className="icon-box mx-2 px-4 grey-txt py-2 rounded-5 small"
                  >
                    <strong>{tech.label}:</strong> {tech.value}
                  </p>
                ))
              ) : (
                selectedItem?.tech?.map((tech, techIndex) => (
                  <span
                    className="icon-box mx-2 px-4 grey-txt py-2 rounded-5 small"
                    key={techIndex}
                  >
                    {tech?.name}
                  </span>
                ))
              )}

            </div>
          </div>
          {selectedItem?.projectLink && <div className="pro-web ps-3 my-5 pro-data">
            <h4 className="text_M my-3 small-title"><FaGlobeAmericas className="me-2" /> Website</h4>
            <p>
              <Link to={selectedItem?.projectLink} target="_blank">
                <span className="icon"> <FaExternalLinkAlt className="me-3" /></span>{selectedItem?.projectName}
              </Link>
            </p>
          </div>}
          {selectedItem?.otherLink &&
            <div className="d-flex justify-content-between flex-wrap pro-web ps-3 my-5 pro-data ">
              {selectedItem?.otherLink?.map((tech, techIndex) => (
                <div className="d-block">
                  <h4 className="text_M my-3 small-title"><FaGlobeAmericas className="me-2" /> {tech.label}</h4>

                  <p>
                    <Link to={tech.userApp} target="_blank">
                      <span className="icon"> <FaExternalLinkAlt className="me-3" /></span>{tech.label}
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          }
          {/* <div className="pro-gitHub ps-3 my-5 pro-data">
            <h4 className="text_M my-3 small-title"><FaGithub className="me-2" /> Github</h4>
            <p><Link to={selectedItem?.projectLink} target="_blank"><span className="icon"> <FaExternalLinkAlt className="me-3" /></span>{selectedItem?.projectLink} </Link></p>
          </div> */}
        </Modal.Body>
        <Modal.Footer className="project-footer">
          <div className="project-footer-link">
            <Link to={selectedItem?.projectLink ? selectedItem?.projectLink : selectedItem?.otherLink[0].userApp} target="_blank">Open project<FaExternalLinkAlt className="ms-3" />
            </Link>
          </div>
        </Modal.Footer>
      </Modal>
      {/* Separate carousel modal */}
      <Modal show={showCarousel} onHide={() => setShowCarousel(false)} centered size="xl" className="carousel-modal">
        <Modal.Header closeButton className=" p-5">
          <div className="position-relative z-5  text-center">
            <h2 className=" text-black fw-bold h1"> {selectedItem?.projectName}</h2>
          </div>

        </Modal.Header>
        <Modal.Body>
          <Carousel nextLabel={''} prevLabel={''} dots={false} indicators={false} interval={null} >

            {/* Other screens */}
            {selectedItem?.screenList?.map((screen, i) => (
              <Carousel.Item key={i}>
                <img
                  className="slider-img"
                  src={ProjectBaseUrl + screen.url}
                  alt={`Screen ${i + 1}`}
                />
                <div className="position-relative z-5 p-4 border-top text-center">
                  <h2 className=" text-black fw-bold mt-4">{screen.title}</h2>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </div>

  );
}
