import React, { useState } from "react";
import { BsGrid3X2Gap } from "react-icons/bs";
import CommonHeading from "../utills/CommonHeading";
import { Carousel, Modal, Tab, Tabs } from "react-bootstrap";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { projects } from "../constants/customData";
import { ProjectBaseUrl } from "../constants/ImgConst";
import { FaExternalLinkAlt, FaGlobeAmericas } from "react-icons/fa";
import { Link } from "react-scroll";
import ShowMore from "react-show-more-button/dist";

export default function Portfolio({ id }) {
  const imageUrl = './assets/images/';
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showCarousel, setShowCarousel] = useState(false);

  const handleClose = () => setShowProjectModal(false);
  const handleShow = (item) => {
    setSelectedItem(item);
    setShowProjectModal(true);
  };

  // Flatten all projects
  const allProjects = projects.flatMap((group) => group.data);

  // Generate categories from tags dynamically
  const categories = [
    { key: "all", title: "All" },
    ...Array.from(
      new Set(allProjects.flatMap((p) => p.tags ?? []))
    ).map((tag) => ({ key: tag, title: tag.charAt(0).toUpperCase() + tag.slice(1) })),
  ];

  // Filter and sort projects
  const filterAndSortProjects = (tab) => {
    let filtered = [];

    switch (tab) {
      case "all":
        filtered = [...allProjects];
        filtered.sort((a, b) => {
          const order = { website: 0, dashboard: 1, design: 2 };
          return (order[a.type] ?? 99) - (order[b.type] ?? 99);
        });
        break;

      case "websites":
        filtered = allProjects.filter((p) => p.type === "website");
        break;

      case "react":
        filtered = allProjects.filter((p) => p.tags?.includes("react"));
        filtered.sort((a, b) => {
          const order = { dashboard: 0, website: 1, design: 2 };
          return (order[a.type] ?? 99) - (order[b.type] ?? 99);
        });
        break;

      case "UI/UX":
        filtered = allProjects.filter((p) => p.tags?.includes("UI/UX"));
        break;

      default:
        filtered = allProjects;
    }

    return filtered;
  };

  const [showAll, setShowAll] = useState(false); // ✅ toggle state
  return (
    <div className="portfolio_sec py-90" id={id}>
      <CommonHeading heading="PORTFOLIO" icon={<BsGrid3X2Gap />} dataAos="fade-up" />
      <h1 data-aos="fade-up" className="main-heading">
        Featured <span className="theme-txt">Projects</span>
      </h1>

      <div className="portfolio-flters">
        <Tabs
          defaultActiveKey="all"
          id="portfolio-tabs"
          className="mb-3"
          data-aos="zoom-in"
          mountOnEnter
          unmountOnExit={false}
        >
          {categories.map((cat) => {
            const filtered = filterAndSortProjects(cat.key);

            // Decide what to show
            const visibleItems = showAll ? filtered : filtered.slice(0, 4);

            return (
              <Tab key={cat.key} eventKey={cat.key} title={cat.title} className="portfolio-tab">

                <div className="row">
                  {visibleItems.map((item) => (
                    <div key={item.id} className="col-md-6 port-cards" data-aos="zoom-in-down">
                      <div className="tab-item card-box">
                        <div className="project-image-box">
                          <img
                            src={ProjectBaseUrl + item.projectBanner}
                            alt={item.projectName}
                            className="project-image"
                          />
                        </div>
                        <div className="hovered-text">
                          <div className="d-flex justify-content-between align-items-top mt-4">
                            <div className="pe-5 heading-box">
                              <h1 className="text_B main-heading mb-2">{item.projectName}</h1>
                              {item.projectSubtitle && (
                                <h2 className="text_B mb-0 pe-5">{item.projectSubtitle}</h2>
                              )}
                            </div>
                            <div className="next-icon pointer">
                              <img
                                src={imageUrl + "view-next.svg"}
                                alt=""
                                onClick={() => handleShow(item)}
                              />
                            </div>
                          </div>
                          <p className="port-desc">{item.description}</p>
                          <div className="tech-list d-flex flex-wrap">
                            {item.tech?.slice(0, 4).map((tech, i) => (
                              <span
                                key={i}
                                className="icon-box mx-2 px-4 grey-txt py-2 mt-4 rounded-5 small"
                              >
                                {tech.name}
                              </span>
                            ))}
                            {item.tech?.length > 4 && (
                              <span
                                className="theme-txt py-2 mt-4 small pointer"
                                onClick={() => handleShow(item)}
                              >
                                +{item.tech.length - 4} more
                              </span>
                            )}
                            {/* Project Type */}
                            {(item?.projectType || item?.tool) && (
                              <div className="pro-about mt-3 flex flex-wrap">
                                {item?.tool && (
                                  <span className="icon-box m-2 px-4 grey-txt py-2 rounded-5 small">
                                    {item.tool}
                                  </span>
                                )}

                                {/* Show only 4 types */}
                                {Array.isArray(item?.projectType) &&
                                  item.projectType.slice(0, 3).map((type, i) => (
                                    <span
                                      key={i}
                                      className="icon-box m-2 px-4 grey-txt py-2 rounded-5 small"
                                    >
                                      {type} {/* ✅ Direct string */}
                                    </span>
                                  ))}

                                {/* Show "more" if projectType has more than 4 */}
                                {Array.isArray(item?.projectType) && item.projectType.length > 4 && (
                                  <span
                                    className="theme-txt py-2 mt-4 small pointer"
                                    onClick={() => handleShow(item)}
                                  >
                                    +{item.projectType.length - 3} more
                                  </span>
                                )}
                              </div>
                            )}


                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {filtered.length > 4 && (
                    <div className="show-more-btn text-center mt-3">
                      <button
                        className="theme-btn px-5 py-3 mt-4 btn"
                        onClick={() => setShowAll(!showAll)}
                      >
                        {showAll ? "Show Less" : "Show More"}
                      </button>
                    </div>
                  )}

                </div>
              </Tab>
            );
          })}
        </Tabs>

      </div>

      {/* Project Modal */}
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
          <div className="pro-detail-heading ps-md-3 ">
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
              src={ProjectBaseUrl + selectedItem?.projectBanner}
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
          <div className="pro-about my-5 pro-data ps-md-3 ">
            <h4 className="text_M my-3 small-title">About</h4>
            <p>
              {selectedItem?.description}
            </p>
          </div>
          {/* Key Features */}
          {selectedItem?.keyFeatures && <div className="pro-about my-5 pro-data ps-md-3 ">
            <h4 className="text_M my-3 small-title">Key Features:</h4>
            <p>
              {selectedItem?.keyFeatures}
            </p>
          </div>}
          {/* My Role & Contributions */}
          {selectedItem?.myRole && <div className="pro-about my-5 pro-data ps-md-3 ">
            <h4 className="text_M my-3 small-title">My Role & Contributions:</h4>
            <p>
              {selectedItem?.myRole}
            </p>
          </div>}
          {/* Project Type*/}
          {selectedItem?.tool && <div className="pro-about my-5 pro-data ps-md-3 ">
            <h4 className="text_M my-4 small-title">Project Type:</h4>
            <span
              className="icon-box m-2 px-4 grey-txt py-2 rounded-5 small"            >
              {selectedItem?.tool}
            </span>
          </div>}
          {/* Category*/}
          {selectedItem?.projectType && <div className="pro-about my-5 pro-data ps-md-3 ">
            <h4 className="text_M my-4 small-title">Category:</h4>

            {Array.isArray(selectedItem?.projectType) &&
              selectedItem.projectType.map((type, i) => (
                <span
                  key={i}
                  className="icon-box m-2 px-4 grey-txt py-2 rounded-5 small"
                >
                  {type}   {/* ✅ Direct string */}
                </span>
              ))}

          </div>}
          {selectedItem?.techDetails && <div className="pro-tech ps-md-3  my-5 pro-data">
            <h4 className="text_M my-3 small-title">Technologies</h4>
            <div className="pro-tech-tech pt-3 d-flex flex-wrap">
              {selectedItem?.techDetails?.length ? (
                selectedItem.techDetails.map((tech, index) => (
                  <p key={index} className="icon-box m-2 px-4 grey-txt py-2 rounded-5 small"
                  >
                    <strong>{tech.label}:</strong> {tech.value}
                  </p>
                ))
              ) : (
                selectedItem?.tech?.map((tech, techIndex) => (
                  <span
                    className="icon-box m-2 px-4 grey-txt py-2 rounded-5 small"
                    key={techIndex}
                  >
                    {tech?.name}
                  </span>
                ))
              )}

            </div>
          </div>}
          {selectedItem?.projectLink && <div className="pro-web ps-md-3  my-5 pro-data">
            <h4 className="text_M my-3 small-title"><FaGlobeAmericas className="me-2" />
              {selectedItem?.tags?.includes("UI/UX") ? selectedItem?.btnTitle : "Website"}</h4>
            <p>
              <a href={selectedItem?.projectLink} target="_blank">
                <span className="icon"> <FaExternalLinkAlt className="me-3" /></span>{selectedItem?.projectName}
              </a>
            </p>
          </div>}
          {selectedItem?.otherLink &&
            <div className="d-flex justify-content-between flex-wrap pro-web ps-md-3  my-5 pro-data ">
              {selectedItem?.otherLink?.map((tech, techIndex) => {
                console.log(tech.userApp, "userApp");

                return (
                  <div className="d-block">
                    <h4 className="text_M my-3 small-title"><FaGlobeAmericas className="me-2" /> {tech.label}</h4>

                    <p>
                      <a href={tech.userApp} target="_blank">
                        <span className="icon"> <FaExternalLinkAlt className="me-3" /></span>{tech.label}
                      </a>
                    </p>
                  </div>
                )
              })}
            </div>
          }
          {/* <div className="pro-gitHub ps-md-3  my-5 pro-data">
            <h4 className="text_M my-3 small-title"><FaGithub className="me-2" /> Github</h4>
            <p><Link to={selectedItem?.projectLink} target="_blank"><span className="icon"> <FaExternalLinkAlt className="me-3" /></span>{selectedItem?.projectLink} </Link></p>
          </div> */}
        </Modal.Body>
        <Modal.Footer className="project-footer">
          <div className="project-footer-link">
            <a href={selectedItem?.projectLink ? selectedItem?.projectLink : selectedItem?.otherLink[0].userApp} target="_blank">
              {selectedItem?.tags?.includes("UI/UX") ? selectedItem?.btnTitle : "Open Project"}
              <FaExternalLinkAlt className="ms-3" />
            </a>
          </div>
        </Modal.Footer>
      </Modal>
      {/* Separate carousel modal */}
      <Modal show={showCarousel}
        backdrop="static"
        keyboard={false} onHide={() => setShowCarousel(false)} centered size="xl" className="carousel-modal z-5">
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
