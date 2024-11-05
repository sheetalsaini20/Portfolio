import React, { useState } from 'react'
import { Nav, NavLink, Navbar } from 'react-bootstrap'
import { BsGrid3X2Gap } from 'react-icons/bs';
import { GoHome } from 'react-icons/go';
import { LuUser2 } from 'react-icons/lu';
import { MdOutlineFileCopy, MdOutlineMailOutline } from 'react-icons/md';
import { PiShapesBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

export default function Menu() {
    const imageUrl = './assets/images/';
    const [activeLink, setActiveLink] = useState(null);
    const [hideShow, setHideShow] = useState(false);
    const navData = [
        {
            id: 1, title: "INTRODUCTION", icon: <GoHome />, link: "intro"
        },
        {
            id: 2, title: "ABOUT", icon: <LuUser2 />, link: "about",
        },
        {
            id: 3, title: "RESUME", icon: <MdOutlineFileCopy />, link: "resume",
        },
        {
            id: 4, title: "SKILLS", icon: <PiShapesBold />, link: "skills",
        },
        {
            id: 5, title: "PORTFOLIO", icon: <BsGrid3X2Gap />, link: "portfolio",
        },
        {
            id: 6, title: "CONTACT", icon: <MdOutlineMailOutline />, link: "contact",
        },
    ];

    const gotoServices = (item) => {
        const element = document.getElementById(item);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setActiveLink(item);
        setHideShow(false);
    };

    return (
        <div className={`right-manu  ${hideShow ? "menu-open" : "menu-closed"}`}>
            <div className='dmenu scroll-nav d-flex d-nnone d-lg-block'>
                <Navbar expand="xl">
                    <button
                        aria-controls="basic-navbar-nav"
                        type="button"
                        aria-label="Toggle navigation"
                        class="navbar-toggler"
                        onClick={() => setHideShow(!hideShow)}
                    >
                        <span class="navbar-toggler-icon">
                            <img src={imageUrl + "cross.svg"} alt="" />
                        </span>
                    </button>
                    <Navbar.Collapse id="basic-navbar-nav"
                        className={hideShow ? "navbar-collapse collapse show" : ""}>
                        <Nav className="me-auto">
                            {navData?.map((item, index) => {
                                return (
                                    <NavLink
                                        key={index}
                                        id={`close-button-${index + 1}`}
                                        className={`d-flex justify-content-center nav-link  ${activeLink === item.link ? 'active' : ''}`}
                                        to={`/${item.link}`}
                                        onClick={() => gotoServices(item?.link)}
                                        activeClassName="active">
                                        <span>
                                            {item.title}
                                        </span>
                                        {item.icon}
                                    </NavLink>
                                )
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}
